<template>
   <div class="bookform-container">
    <form @submit.prevent="handleSubmit">
      <input v-model="book.title" placeholder="Título" required />
      <input v-model="book.author" placeholder="Autor" required />
      <input v-model="book.year" placeholder="Ano" required />
      <button type="submit">{{ book._id ? 'Atualizar' : 'Adicionar' }}</button>
    </form>
  </div>
    <div class="v124_2">
      <div class="v124_3">
        <div class="v124_4"></div>
        <div class="v124_5"></div>
      </div>
      <div class="v57_752"></div>
  
      <div class="v124_199">
        <input v-model="searchQuery" type="text" class="search-txt" placeholder="Buscar..." />
      </div>
      <div class="v124_210">
        <input v-model="publisher" type="text" class="search-txt" placeholder="Editora..." />
      </div>
      <div class="v124_216">
        <input v-model="date" type="text" class="search-txt" placeholder="AA/AA/AA..." />
      </div>
      <div class="v124_226">
        <input v-model="price" type="text" class="search-txt" placeholder="Preço..." />
      </div>
      <div class="v124_224">
        <input v-model="pages" type="text" class="search-txt" placeholder="Pagina..." />
      </div>
      <div class="v124_220">
        <input v-model="month" type="text" class="search-txt" placeholder="Mês..." />
      </div>
      <div class="v124_218">
        <input v-model="searchQuery" type="text" class="search-txt" placeholder="Buscar..." />
      </div>
      <div class="v124_207">
        <input v-model="description" type="text" class="search-txt" placeholder="Descrição..." />
      </div>
      <div class="v124_201">
        <input v-model="title" type="text" class="search-txt" placeholder="Titulo..." />
      </div>
      <div class="v124_205">
        <input v-model="author" type="text" class="search-txt" placeholder="Autor..." />
      </div>
      <div class="v124_133">Titulo</div>
  
      <div class="v124_154">
        <span class="v124_155">Data de Publicação</span>
      </div>
      <div class="v124_188">
        <div class="v124_189">
          <div class="v124_190"></div>
        </div>
        <span class="v124_191">Imagem da Capa</span>
      </div>
      <div class="v124_194">
        <span class="v124_195" @click="submitForm">Enviar</span>
      </div>
  
      <span class="v124_198">Seleção de Coleção</span>
      <span class="v124_203">Autor</span>
      <span class="v124_204">Descrição</span>
      <span class="v124_209">Editora</span>
      <span class="v124_212">Ano</span>
      <span class="v124_214">Mês</span>
      <span class="v124_215">Dia</span>
      <span class="v124_222">Páginas</span>
      <span class="v124_223">Preço</span>
    </div>
  </template>
  
  <script>
  import api from '@/services/api'; // Importa o serviço API para fazer requisições
  
  export default {
    props: ['bookToEdit'], // Recebe o livro a ser editado como uma prop
    data() {
      return {
        book: this.bookToEdit || { title: '', author: '', year: null }, // Inicializa os dados do livro
      };
    },
    watch: {
      bookToEdit: {
        immediate: true,
        handler(newVal) {
          this.book = newVal || { title: '', author: '', year: null }; // Atualiza os dados quando a prop mudar
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
    },
  };
  </script>

  <style scoped>
  * {
    box-sizing: border-box;
  }
  body {
    font-size: 14px;
  }
  .v124_2 {
    width: 100%;
    height: 1024px;
    background: rgba(255,255,255,1);
    opacity: 1;
    position: absolute;
    top: 0px;
    left: 0px;
    overflow: hidden;
  }
  .v116_77 {
    width: 38px;
    color: rgba(119,119,119,1);
    position: absolute;
    top: 27px;
    left: 9px;
    font-family: Roboto;
    font-weight: Regular;
    font-size: 15px;
    opacity: 1;
    text-align: left;
  }
  .arrumar {
    width: 412px;
    background-color: rgb(30,144,238,1);
    position: absolute;
    transform: translate(-50%, -50%);
    top: 115px;
    left: 750px;
    height: 40px;
    padding: 10px;
    border-radius: 40px;
    font-family: Josefin Sans;
    font-weight: Regular;
    font-size: 14px;
    opacity: 1;
    text-align: left;
  }
  .search-txt {
    border: none;
    background: none;
    outline: none;
    }
  .v124_3 {
    width: 235px;
    height: 1024px;
    background: rgba(217,217,217,1);
    opacity: 1;
    position: absolute;
    top: 0px;
    left: 0px;
    overflow: hidden;
  }
  .v124_4 {
    width: 122px;
    height: 38px;
    background: url("../assets/v124_4.png");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    opacity: 1;
    position: absolute;
    top: 40px;
    left: 35px;
    overflow: hidden;
  }
  .v124_5 {
    width: 86px;
    height: 86px;
    background: url("../assets/v124_5.png");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    opacity: 1;
    position: absolute;
    top: 16px;
    left: 71px;
    border-top-left-radius: 321px;
    border-top-right-radius: 321px;
    border-bottom-left-radius: 321px;
    border-bottom-right-radius: 321px;
    overflow: hidden;
  }
  .v124_199 {
    width: 681px;
    height: 34px;
    background: rgba(217,217,217,1);
    opacity: 1;
    position: absolute;
    top: 119px;
    left: 417px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    overflow: hidden;
    padding: 10px;
    border-radius: 40px;
    
  }
  .v124_210 {
    width: 681px;
    height: 34px;
    background: rgba(217,217,217,1);
    opacity: 1;
    position: absolute;
    top: 463px;
    left: 415px;
    padding: 10px;
    border-radius: 40px;
  
  
  
  }
  .v124_216 {
    width: 133px;
    height: 34px;
    background: rgba(217,217,217,1);
    opacity: 1;
    position: absolute;
    top: 577px;
    left: 427px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    overflow: hidden;
    padding: 10px;
    border-radius: 40px;
  }
  .v124_226 {
    width: 133px;
    height: 34px;
    background: rgba(217,217,217,1);
    opacity: 1;
    position: absolute;
    top: 678px;
    left: 596px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    overflow: hidden;
    padding: 10px;
    border-radius: 40px;
  }
  .v124_224 {
    width: 133px;
    height: 34px;
    background: rgba(217,217,217,1);
    opacity: 1;
    position: absolute;
    top: 675px;
    left: 426px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    overflow: hidden;
    padding: 10px;
    border-radius: 40px;
  }
  .v124_220 {
    width: 133px;
    height: 34px;
    background: rgba(217,217,217,1);
    opacity: 1;
    position: absolute;
    top: 577px;
    left: 786px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    overflow: hidden;
    padding: 10px;
    border-radius: 40px;
  }
  .v124_218 {
    width: 133px;
    height: 34px;
    background: rgba(217,217,217,1);
    opacity: 1;
    position: absolute;
    top: 577px;
    left: 588px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    overflow: hidden;
    padding: 10px;
    border-radius: 40px;
  }
  .v124_207 {
    width: 681px;
    height: 34px;
    background: rgba(217,217,217,1);
    opacity: 1;
    position: absolute;
    top: 397px;
    left: 414px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    overflow: hidden;
    padding: 10px;
    border-radius: 40px;
  }
  .v124_201 {
    width: 681px;
    height: 34px;
    background: rgba(217,217,217,1);
    opacity: 1;
    position: absolute;
    top: 198px;
    left: 414px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    overflow: hidden;
    padding: 10px;
    border-radius: 40px;
  }
  .v124_205 {
    width: 681px;
    height: 34px;
    background: rgba(217,217,217,1);
    opacity: 1;
    position: absolute;
    top: 306px;
    left: 413px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    overflow: hidden;
    padding: 10px;
    border-radius: 40px;
  }
  .v124_133 {
    width: 60px;
    height: 27px;
    background: url("../assets/v124_133.png");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    margin: 1px;
    opacity: 1;
    position: absolute;
    top: 171px;
    left: 419px;
    overflow: hidden;
  }
  .v124_134 {
    width: 39px;
    color: rgba(3,21,30,1);
    position: absolute;
    top: 0px;
    left: 0px;
    font-family: Roboto;
    font-weight: Regular;
    font-size: 15px;
    opacity: 1;
    text-align: left;
  }
  .v124_154 {
    width: 970px;
    height: 27px;
    background: url("../assets/v124_154.png");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    opacity: 1;
    position: absolute;
    top: 508px;
    left: 415px;
    overflow: hidden;
  }
  .v124_155 {
    width: 129px;
    color: rgba(3,21,30,1);
    position: absolute;
    top: 0px;
    left: 0px;
    font-family: Roboto;
    font-weight: Regular;
    font-size: 15px;
    opacity: 1;
    text-align: left;
  }
  .v124_188 {
    width: 202px;
    height: 38px;
    background: rgba(75,193,210,0.3100000023841858);
    padding: 10px 21px;
    margin: 11px;
    opacity: 1;
    position: absolute;
    top: 772px;
    left: 397px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    overflow: hidden;
  }
  .v124_189 {
    width: 18px;
    height: 18px;
    background: url("../assets/v124_189.png");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    opacity: 1;
    position: absolute;
    top: 10px;
    left: 21px;
    overflow: hidden;
  }
  .v124_190 {
    width: 18px;
    height: 18px;
    background: rgba(3,21,30,1);
    opacity: 1;
    position: absolute;
    top: 0px;
    left: 0px;
  }
  .v124_191 {
    width: 121px;
    color: rgba(3,21,30,1);
    position: absolute;
    top: 11px;
    left: 50px;
    font-family: Roboto;
    font-weight: SemiBold;
    font-size: 16px;
    opacity: 1;
    text-align: center;
  }
  .v124_194 {
    width: 106px;
    height: 38px;
    background: rgba(75,193,210,1);
    padding: 11px 31px;
    opacity: 1;
    position: absolute;
    top: 772px;
    left: 670px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    overflow: hidden;
  }
  .v124_195 {
    width: 45px;
    color: rgba(254,254,254,1);
    position: absolute;
    top: 11px;
    left: 31px;
    font-family: Roboto;
    font-weight: SemiBold;
    font-size: 16px;
    opacity: 1;
    text-align: center;
  }
  .v124_198 {
    width: 243px;
    color: rgba(0,0,0,1);
    position: absolute;
    top: 63px;
    left: 403px;
    font-family: Roboto;
    font-weight: Bold;
    font-size: 24px;
    opacity: 1;
    text-align: left;
  }
  .v124_203 {
    width: 37px;
    color: rgba(0,0,0,1);
    position: absolute;
    top: 277px;
    left: 415px;
    font-family: Roboto;
    font-weight: Regular;
    font-size: 15px;
    opacity: 1;
    text-align: left;
  }
  .v124_204 {
    width: 67px;
    color: rgba(0,0,0,1);
    position: absolute;
    top: 367px;
    left: 412px;
    font-family: Roboto;
    font-weight: Regular;
    font-size: 15px;
    opacity: 1;
    text-align: left;
  }
  .v124_209 {
    width: 47px;
    color: rgba(0,0,0,1);
    position: absolute;
    top: 436px;
    left: 413px;
    font-family: Roboto;
    font-weight: Regular;
    font-size: 15px;
    opacity: 1;
    text-align: left;
  }
  .v124_212 {
    width: 27px;
    color: rgba(0,0,0,1);
    position: absolute;
    top: 553px;
    left: 432px;
    font-family: Roboto;
    font-weight: Regular;
    font-size: 15px;
    opacity: 1;
    text-align: left;
  }
  .v124_214 {
    width: 29px;
    color: rgba(0,0,0,1);
    position: absolute;
    top: 551px;
    left: 621px;
    font-family: Roboto;
    font-weight: Regular;
    font-size: 15px;
    opacity: 1;
    text-align: left;
  }
  .v124_215 {
    width: 22px;
    color: rgba(0,0,0,1);
    position: absolute;
    top: 546px;
    left: 817px;
    font-family: Roboto;
    font-weight: Regular;
    font-size: 15px;
    opacity: 1;
    text-align: left;
  }
  .v124_222 {
    width: 53px;
    color: rgba(0,0,0,1);
    position: absolute;
    top: 646px;
    left: 433px;
    font-family: Roboto;
    font-weight: Regular;
    font-size: 15px;
    opacity: 1;
    text-align: left;
  }
  .v124_223 {
    width: 38px;
    color: rgba(0,0,0,1);
    position: absolute;
    top: 651px;
    left: 612px;
    font-family: Roboto;
    font-weight: Regular;
    font-size: 15px;
    opacity: 1;
    text-align: left;
  }
  
  </style>
  



23

<template>
    <div class="bookform-container">
      <form @submit.prevent="handleSubmit">
        <input v-model="book.title" placeholder="Título" required />
        <input v-model="book.author" placeholder="Autor" required />
        <input v-model="book.year" placeholder="Ano" required />
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
        book: this.bookToEdit || { title: '', author: '', year: null }, // Inicializa os dados do livro
      };
    },
    watch: {
      bookToEdit: {
        immediate: true,
        handler(newVal) {
          this.book = newVal || { title: '', author: '', year: null }; // Atualiza os dados quando a prop mudar
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
    },
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
  </style>
  