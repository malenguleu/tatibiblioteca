<template>
  <div class="bookform-container">
    <form @submit.prevent="handleSubmit">
      <input v-model="book.title" placeholder="Título" required />
      <input v-model="book.author" placeholder="Autor" required />
      <input v-model="book.year" placeholder="Ano" required />
      
      <!-- Campo de upload de imagem -->
      <input type="file" @change="handleFileChange" accept="image/*" />
      
      <!-- Exibe a imagem carregada -->
      <div v-if="book.imageUrl">
        <img :src="book.imageUrl" alt="Imagem do livro" class="uploaded-image" />
      </div>

      <button type="submit">{{ book._id ? 'Atualizar' : 'Adicionar' }}</button>
    </form>
  </div>
</template>

<script>
import api from '@/services/api'; // Importa o serviço API para fazer requisições

export default {
  props: ['bookToEdit'], // Recebe o livro a ser editado como uma prop
  data() {
    return {
      book: this.bookToEdit || { title: '', author: '', year: null, imageUrl: null }, // Inicializa os dados do livro com uma chave imageUrl
    };
  },
  watch: {
    bookToEdit: {
      immediate: true,
      handler(newVal) {
        this.book = newVal || { title: '', author: '', year: null, imageUrl: null }; // Atualiza os dados quando a prop mudar
      },
    },
  },
  methods: {
    handleSubmit() {
      if (this.book._id) {
        api.updateBook(this.book._id, this.book).then(() => {
          this.$emit('book-updated'); // Emite um evento quando o livro é atualizado
        });
      } else {
        api.addBook(this.book).then(() => {
          this.$emit('book-added'); // Emite um evento quando um novo livro é adicionado
        });
      }
    },
    handleFileChange(event) {
      const file = event.target.files[0]; // Pega o arquivo selecionado
      if (file) {
        const reader = new FileReader(); // Cria um FileReader para ler o arquivo
        reader.onload = () => {
          this.book.imageUrl = reader.result; // Atribui a URL gerada da imagem
        };
        reader.readAsDataURL(file); // Lê o arquivo como uma URL base64
      }
    }
  }
};
</script>

<style scoped>
.bookform-container {
  max-width: 400px; /* Largura máxima do formulário */
  margin: 20px auto; /* Centraliza o formulário na tela */
  padding: 20px; /* Espaçamento interno */
  background-color: #f9f9f9; /* Cor de fundo do formulário */
  border-radius: 10px; /* Bordas arredondadas */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra suave */
}

form {
  display: flex; /* Flexbox para organizar os elementos */
  flex-direction: column; /* Coluna para os campos do formulário */
}

input {
  margin-bottom: 15px; /* Espaçamento entre os campos */
  padding: 10px; /* Espaçamento interno dos campos */
  border: 1px solid #ccc; /* Borda do campo */
  border-radius: 5px; /* Bordas arredondadas */
  font-size: 16px; /* Tamanho da fonte */
}

input:focus {
  border-color: #4CAF50; /* Cor da borda quando o campo está em foco */
  outline: none; /* Remove a borda padrão do navegador */
}

button {
  padding: 10px; /* Espaçamento interno do botão */
  background-color: #4CAF50; /* Cor de fundo do botão */
  color: white; /* Cor do texto */
  border: none; /* Remove a borda padrão */
  border-radius: 5px; /* Bordas arredondadas */
  cursor: pointer; /* Cursor de ponteiro */
  font-size: 16px; /* Tamanho da fonte */
  transition: background-color 0.3s; /* Transição suave */
}

button:hover {
  background-color: #45a049; /* Cor do botão ao passar o mouse */
}

.uploaded-image {
  max-width: 100%; /* Limita a largura da imagem */
  margin-top: 10px; /* Espaçamento entre a imagem e o formulário */
  border-radius: 5px; /* Bordas arredondadas */
}
</style>
