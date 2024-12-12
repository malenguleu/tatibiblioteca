<template> 
  <div class="booklist-container">
    <h1>Lista de Livros</h1>
    <ul class="book-list">
      <li v-for="book in books" :key="book.id" class="book-item">
        <span class="book-title">{{ book.title }} - {{ book.author }} ({{ book.year }})</span>
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
      books: [], // Estado local da lista de livros
    };
  },
  methods: {
    fetchBooks() { // Busca os livros do back-end
      api.getBooks().then(response => {
        this.books = response.data; // Atualiza a lista de livros
      });
    },
    deleteBook(id) { // Exclui um livro pelo ID
      api.deleteBook(id).then(() => {
        this.fetchBooks(); // Atualiza a lista após a exclusão
      });
    },
    editBook(book) { // Emite um evento para editar um livro
      this.$emit('edit-book', book);
    },
  },
  mounted() {
    this.fetchBooks(); // Busca os livros ao montar o componente
  },
};
</script>

<style>
  .booklist-container {
    background-color: #f9f9f9;
    padding: 20px;
    border: 1px solid #ccc;
  }
  </style>
  <style scoped>
  /* Container principal do componente */
  .booklist-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
   
  /* Estilo da lista de livros */
  .book-list {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
   
  /* Cada item da lista */
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
   
  /* Botão de editar */
  .edit-button {
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    border-radius: 3px;
  }
   
  /* Botão de excluir */
  .delete-button {
    background-color: #f44336;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    border-radius: 3px;
  }
   
  /* Efeito hover nos botões */
  .edit-button:hover, .delete-button:hover {
    opacity: 0.8;
  }
  </style>