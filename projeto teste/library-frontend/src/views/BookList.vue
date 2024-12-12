<template>
  <div class="booklist-container">
    <h1>Lista de Livros</h1>
    <ul class="book-list">
      <li v-for="book in books" :key="book.id" class="book-item">
        <span class="book-title">{{ book.title }} - {{ book.author }} ({{ book.year }})</span>
        <input type="file" @change="handleFileChange" accept="image/*" />
        <!-- Exibe a imagem do livro, caso exista -->
        <div v-if="book.imageUrl">
          <img :src="book.imageUrl" alt="Imagem do Livro" class="book-image" />
        </div>

        <div class="button-group">
          <button @click="editBook(book)" class="edit-button">Editar</button>
          <button @click="deleteBook(book._id)" class="delete-button">Excluir</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import api from '../services/api'; // Importa o serviço API
export default {
  data() {
    return {
      books: [], // Lista de livros
    };
  },
  methods: {
    fetchBooks() {
      api.getBooks().then(response => {
        this.books = response.data;
      });
    },
    deleteBook(id) {
      api.deleteBook(id).then(() => {
        this.fetchBooks();
      });
    },
    editBook(book) {
      this.$emit('edit-book', book);
    },
  },
  mounted() {
    this.fetchBooks(); // Carrega os livros ao montar o componente
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
    
    
  };
  
</script>

<style scoped>
.booklist-container {
  background-color: #f9f9f9;
  padding: 20px;
  border: 1px solid #ccc;
}

.book-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.book-image {
  max-width: 50px; /* Limita o tamanho da imagem */
  max-height: 50px; /* Limita a altura da imagem */
  margin-right: 10px; /* Espaçamento entre a imagem e o texto */
}

.edit-button, .delete-button {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 3px;
}

.delete-button {
  background-color: #f44336;
}

button:hover {
  opacity: 0.8;
}
</style>
