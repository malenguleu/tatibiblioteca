
<template>
    <div class="v57_750">
      <header class="v57_752">
        <div class="v80_104"></div>
      </header>
      <main>
        <div class="v57_753">
          <p class="v57_756">Identifique-se para prosseguir</p>
  
          <form @submit.prevent="handleSubmit" class="v57_757">
            <label for="email" class="v116_77">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              v-model="email" 
              required
            >
            <span class="v117_79"></span>
  
            <div class="v57_760">
              <label for="senha" class="v116_77">Senha</label>
              <input 
                type="password" 
                id="senha" 
                name="senha" 
                v-model="senha" 
                required
              >
              <span class="v57_761"></span>
            </div>
  
            <div class="v57_762">
              <input 
                type="checkbox" 
                id="remember" 
                v-model="remember"
              >
              <label for="remember" class="v57_764">não sou um robo</label>
            </div>
            <button type="submit">entar</button>
            <router-link to="" class="v57_767">esqueceu a senha</router-link>
          </form>
        </div>
      </main>
    </div>
  </template>
  <script>
  import api from '../axios'; // Importa a configuração do Axios
  
  export default {
    data() {
      return {
        email: '',      // Variável para armazenar o email do usuário
        password: '',   // Variável para armazenar a senha do usuário
        message: '',    // Mensagem de feedback (sucesso ou erro)
      };
    },
    methods: {
      async loginUser() {
        try {
          // Envia uma requisição POST para o backend com email e senha
          const response = await api.post('/auth/login', {
            email: this.email,
            password: this.password,
          });
          
          // Se o login for bem-sucedido, mostra a mensagem de sucesso
          this.message = 'Login bem-sucedido!';
          
          // Armazena o token JWT no localStorage
          localStorage.setItem('token', response.data.token);
          
          // Redireciona para a página do dashboard
          this.$router.push('/dashboard');
        } catch (error) {
          // Caso haja um erro no login, mostra uma mensagem de erro
          this.message = error.response && error.response.data && error.response.data.message
            ? error.response.data.message
            : 'Erro ao fazer login.';
        }
      },
    },
  };
  </script>

<style scoped>
/* Adapte o CSS para Vue.js */
* {
box-sizing: border-box;
}
body {
font-size: 14px;
}
.v57_751 {
width: 100%;
height: 1024px;
background: rgba(255,255,255,1);
opacity: 1;
position: absolute;
top: 0px;
left: 0px;
overflow: hidden;
}
.v57_752 {
width: 100%;
height: 328px;
background: url("../assets/v57_752.png");
background-repeat: no-repeat;
background-position: center center;
background-size: cover;
opacity: 1;
position: absolute;
top: 0px;
left: 0px;
box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.15000000596046448);
overflow: hidden;
}
.v80_104 {
width: 170px;
height: 167px;
background: url("../assets/v80_104.png");
background-repeat: no-repeat;
background-position: center center;
background-size: cover;
opacity: 1;
position: absolute;
top: 68px;
left: 46px;
border-top-left-radius: 321px;
border-top-right-radius: 321px;
border-bottom-left-radius: 321px;
border-bottom-right-radius: 321px;
overflow: hidden;
}
.v78_96 {
width: 122px;
height: 114px;
background: url("../assets/v78_96.png");
background-repeat: no-repeat;
background-position: center center;
background-size: cover;
opacity: 1;
position: absolute;
top: 857px;
left: 1081px;
overflow: hidden;
}
.v116_2 {
width: 528px;
height: 568px;
background: rgba(217,217,217,1);
opacity: 1;
position: absolute;
top: 377px;
left: 447px;
overflow: hidden;
}
.v57_753 {
width: 432px;
height: 470px;
background: rgba(255,255,255,1);
opacity: 1;
position: absolute;
top: 416px;
left: 495px;
box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.20000000298023224);
overflow: hidden;
}
.v57_755 {
width: 49px;
color: rgba(119,119,119,1);
position: absolute;
top: 214px;
left: 45px;
font-family: Open Sans;
font-weight: Regular;
font-size: 17px;
opacity: 1;
text-align: left;
}
.v58_755 {
width: 49px;
color: rgba(119,119,119,1);
position: absolute;
top: px;
left: 45px;
font-family: Open Sans;
font-weight: Regular;
font-size: 17px;
opacity: 1;
text-align: left;
}
.v57_767 {
width: 119px;
height: 27px;
background-repeat: no-repeat;
background-position: center center;
background-size: cover;
opacity: 1;
position: absolute;
top: 230px;
left: 210px;
overflow: hidden;
}
.v57_756 {
width: 196px;
color: rgba(112,112,112,1);
position: absolute;
top: 30px;
left: 43px;
font-family: Open Sans;
font-weight: Regular;
font-size: 14px;
opacity: 1;
text-align: left;
}
.v57_757 {
width: 357px;
height: 339px;
background-repeat: no-repeat;
background-position: center center;
background-size: cover;
opacity: 1;
position: absolute;
top: 98px;
left: 35px;
overflow: hidden;
}
.v57_760 {
width: 357px;
height: 52px;
background: rgba(255,255,255,1);
opacity: 1;
position: absolute;
top: 150px;
left: 0px;
border-top-left-radius: 4px;
border-top-right-radius: 4px;
border-bottom-left-radius: 4px;
border-bottom-right-radius: 4px;
overflow: hidden;
}
.v57_761 {
width: 22px;
color: rgba(85,168,253,1);
position: absolute;
top: 15px;
left: 299px;
font-family: Font Awesome 5 Free;
font-weight: Solid;
font-size: 20px;
opacity: 1;
text-align: left;
}
.v117_78 {
width: 357px;
height: 52px;
background: rgba(255,255,255,1);
opacity: 1;
position: absolute;
top: 54px;
left: 1px;
border-top-left-radius: 4px;
border-top-right-radius: 4px;
border-bottom-left-radius: 4px;
border-bottom-right-radius: 4px;
overflow: hidden;
}
.v117_79 {
width: 22px;
color: rgba(85,168,253,1);
position: absolute;
top: 15px;
left: 299px;
font-family: Font Awesome 5 Free;
font-weight: Solid;
font-size: 20px;
opacity: 1;
text-align: left;
}
.v57_762 {
width: 165px;
height: 26px;
background-repeat: no-repeat;
background-position: center center;
background-size: cover;
opacity: 1;
position: absolute;
top: 228px;
left: 0px;
overflow: hidden;
}
.v57_763 {
width: 24px;
height: 24px;
background: rgba(255,255,255,1);
opacity: 1;
position: absolute;
top: 5px;
left: 0px;
border: 1px solid rgba(226,226,226,1);
border-top-left-radius: 2px;
border-top-right-radius: 2px;
border-bottom-left-radius: 2px;
border-bottom-right-radius: 2px;
overflow: hidden;
}
.v57_764 {
width: 126px;
color: rgba(119,119,119,1);
position: absolute;
top: 1px;
left: 40px;
font-family: Open Sans;
font-weight: Regular;
font-size: 17px;
opacity: 1;
text-align: left;
}
.v57_765 {
width: 357px;
height: 48px;
background: rgba(85,168,253,1);
opacity: 1;
position: absolute;
top: 271px;
left: 0px;
border-top-left-radius: 6px;
border-top-right-radius: 6px;
border-bottom-left-radius: 6px;
border-bottom-right-radius: 6px;
overflow: hidden;
}
.v57_766 {
width: 50px;
color: rgba(255,255,255,1);
position: absolute;
top: 10px;
left: 154px;
font-family: Open Sans;
font-weight: Regular;
font-size: 14px;
opacity: 1;
text-align: center;
}

.v57_768 {
width: 119px;
color: rgba(119,119,119,1);
position: absolute;
top: 1px;
left: 0px;
font-family: Open Sans;
font-weight: Regular;
font-size: 12px;
opacity: 1;
text-align: left;
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

</style>




outro

<template>
    <div class="v57_750">
      <header class="v57_752">
        <div class="v80_104"></div>
      </header>
      <main>
        <div class="v57_753">
          <p class="v57_756">Identifique-se para prosseguir</p>
  
          <form @submit.prevent="handleSubmit" class="v57_757">
            <label for="email" class="v116_77">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              v-model="email" 
              required
            >
            <span class="v117_79"></span>
  
            <div class="v57_760">
              <label for="senha" class="v116_77">Senha</label>
              <input 
                type="password" 
                id="senha" 
                name="senha" 
                v-model="senha" 
                required
              >
              <span class="v57_761"></span>
            </div>
  
            <div class="v57_762">
              <input 
                type="checkbox" 
                id="remember" 
                v-model="remember"
              >
              <label for="remember" class="v57_764">não sou um robo</label>
            </div>
            <router-link to="/" class="v57_765">Entar</router-link>
            <router-link to="" class="v57_767">esqueceu a senha</router-link>
          </form>
        </div>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        senha: '',
        remember: false
      };
    },
    methods: {
      handleSubmit() {
        // Aqui você pode tratar o envio do formulário
        console.log('Email:', this.email);
        console.log('Senha:', this.senha);
        console.log('Lembre-me:', this.remember);
  
        // Você pode fazer o login ou validar os dados
        // Exemplo: enviar para um backend ou validar os dados aqui.
      }
    }
  }
  </script>
  
  <style scoped>
  /* Adapte o CSS para Vue.js */
  * {
  box-sizing: border-box;
}
body {
  font-size: 14px;
}
.v57_751 {
  width: 100%;
  height: 1024px;
  background: rgba(255,255,255,1);
  opacity: 1;
  position: absolute;
  top: 0px;
  left: 0px;
  overflow: hidden;
}
.v57_752 {
  width: 100%;
  height: 328px;
  background: url("../assets/v57_752.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 0px;
  left: 0px;
  box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.15000000596046448);
  overflow: hidden;
}
.v80_104 {
  width: 170px;
  height: 167px;
  background: url("../assets/v80_104.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 68px;
  left: 46px;
  border-top-left-radius: 321px;
  border-top-right-radius: 321px;
  border-bottom-left-radius: 321px;
  border-bottom-right-radius: 321px;
  overflow: hidden;
}
.v78_96 {
  width: 122px;
  height: 114px;
  background: url("../assets/v78_96.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 857px;
  left: 1081px;
  overflow: hidden;
}
.v116_2 {
  width: 528px;
  height: 568px;
  background: rgba(217,217,217,1);
  opacity: 1;
  position: absolute;
  top: 377px;
  left: 447px;
  overflow: hidden;
}
.v57_753 {
  width: 432px;
  height: 470px;
  background: rgba(255,255,255,1);
  opacity: 1;
  position: absolute;
  top: 416px;
  left: 495px;
  box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.20000000298023224);
  overflow: hidden;
}
.v57_755 {
  width: 49px;
  color: rgba(119,119,119,1);
  position: absolute;
  top: 214px;
  left: 45px;
  font-family: Open Sans;
  font-weight: Regular;
  font-size: 17px;
  opacity: 1;
  text-align: left;
}
.v58_755 {
  width: 49px;
  color: rgba(119,119,119,1);
  position: absolute;
  top: px;
  left: 45px;
  font-family: Open Sans;
  font-weight: Regular;
  font-size: 17px;
  opacity: 1;
  text-align: left;
}
.v57_767 {
  width: 119px;
  height: 27px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 230px;
  left: 210px;
  overflow: hidden;
}
.v57_756 {
  width: 196px;
  color: rgba(112,112,112,1);
  position: absolute;
  top: 30px;
  left: 43px;
  font-family: Open Sans;
  font-weight: Regular;
  font-size: 14px;
  opacity: 1;
  text-align: left;
}
.v57_757 {
  width: 357px;
  height: 339px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 98px;
  left: 35px;
  overflow: hidden;
}
.v57_760 {
  width: 357px;
  height: 52px;
  background: rgba(255,255,255,1);
  opacity: 1;
  position: absolute;
  top: 150px;
  left: 0px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  overflow: hidden;
}
.v57_761 {
  width: 22px;
  color: rgba(85,168,253,1);
  position: absolute;
  top: 15px;
  left: 299px;
  font-family: Font Awesome 5 Free;
  font-weight: Solid;
  font-size: 20px;
  opacity: 1;
  text-align: left;
}
.v117_78 {
  width: 357px;
  height: 52px;
  background: rgba(255,255,255,1);
  opacity: 1;
  position: absolute;
  top: 54px;
  left: 1px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  overflow: hidden;
}
.v117_79 {
  width: 22px;
  color: rgba(85,168,253,1);
  position: absolute;
  top: 15px;
  left: 299px;
  font-family: Font Awesome 5 Free;
  font-weight: Solid;
  font-size: 20px;
  opacity: 1;
  text-align: left;
}
.v57_762 {
  width: 165px;
  height: 26px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 228px;
  left: 0px;
  overflow: hidden;
}
.v57_763 {
  width: 24px;
  height: 24px;
  background: rgba(255,255,255,1);
  opacity: 1;
  position: absolute;
  top: 5px;
  left: 0px;
  border: 1px solid rgba(226,226,226,1);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  overflow: hidden;
}
.v57_764 {
  width: 126px;
  color: rgba(119,119,119,1);
  position: absolute;
  top: 1px;
  left: 40px;
  font-family: Open Sans;
  font-weight: Regular;
  font-size: 17px;
  opacity: 1;
  text-align: left;
}
.v57_765 {
  width: 357px;
  height: 48px;
  background: rgba(85,168,253,1);
  opacity: 1;
  position: absolute;
  top: 271px;
  left: 0px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  overflow: hidden;
}
.v57_766 {
  width: 50px;
  color: rgba(255,255,255,1);
  position: absolute;
  top: 10px;
  left: 154px;
  font-family: Open Sans;
  font-weight: Regular;
  font-size: 14px;
  opacity: 1;
  text-align: center;
}

.v57_768 {
  width: 119px;
  color: rgba(119,119,119,1);
  position: absolute;
  top: 1px;
  left: 0px;
  font-family: Open Sans;
  font-weight: Regular;
  font-size: 12px;
  opacity: 1;
  text-align: left;
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

  </style>
  