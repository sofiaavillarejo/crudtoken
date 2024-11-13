<template>
  <div class="container mt-3">
  <div class="row">
    <div class="col-2"></div>
    <div class="col-8 ">
      <div class="heading">Iniciar Sesión</div>
      <form v-on:submit.prevent="hacerLogin()" class="form">
        <input class="form-control input" type="text" id="email" placeholder="Usuario" v-model="usuario.userName">
        <input required="" class="input" type="text" id="password" placeholder="Contraseña" v-model="usuario.password">
        <span class="forgot-password"><a href="#">¿Has olvidado tu contraseña?</a></span>
        <button  class="login-button">Entrar</button>
      </form>
    </div>
    <div class="col-2"></div>
  </div>
</div>
</template>

<script>

import ServiceAlumnos from '@/services/ServiceAlumnos'
const service = new ServiceAlumnos();

export default {
  name: "LoginComponent",
  data(){
    return {
      usuario: {
        userName: "",
        password: ""
      },
    }
  },
  methods: {
    hacerLogin(){
      console.log(this.usuario.userName);
      console.log(this.usuario.password);

      service.getToken(this.usuario).then(result => {
        console.log(result);
        console.log("Token almacenado en el servicio: " + result.data.response);
        const token = result.data.response;

        if(token != ""){
          localStorage.setItem('token', token);
          this.$router.push("/perfil");
        }
        // this.$router.push("/empleados");

      })
    }
  }
}
</script>

<style>
.container {
  max-width: 650px;
  background: #F4F6FA;  /* Fondo más suave */
  background: linear-gradient(0deg, rgb(255, 255, 255) 0%, rgb(240, 246, 250) 100%);
  border-radius: 40px;
  padding: 25px 35px;
  border: 5px solid rgb(255, 255, 255);
  box-shadow: rgba(100, 149, 193, 0.5) 0px 30px 30px -20px;  /* Sombra más suave */
}

.heading {
  text-align: center;
  font-weight: 900;
  font-size: 30px;
  color: #2C3E50;  /* Gris oscuro */
}

.form {
  margin-top: 20px;
}

.form .input {
  width: 100%;
  background: white;
  border: none;
  padding: 15px 20px;
  border-radius: 20px;
  margin-top: 15px;
  box-shadow: rgba(200, 220, 240, 0.5) 0px 10px 10px -5px;
  border-inline: 2px solid transparent;
}

.form .input::-moz-placeholder {
  color: rgb(150, 150, 150);
}

.form .input::placeholder {
  color: rgb(150, 150, 150);
}

.form .input:focus {
  outline: none;
  border-inline: 2px solid #3498db;  /* Azul suave */
}

.form .forgot-password {
  display: block;
  margin-top: 10px;
  margin-left: 10px;
}

.form .forgot-password a {
  font-size: 16px;
  color: #3498db;  /* Azul para los enlaces */
  text-decoration: none;
}

.form .login-button {
  display: block;
  width: 100%;
  font-size: 18px;
  font-weight: bold;
  background: linear-gradient(45deg, #3498db 0%, #5DADE2 100%);  /* Azul moderno */
  color: white;
  padding-block: 15px;
  margin: 20px auto;
  border-radius: 20px;
  box-shadow: rgba(100, 149, 193, 0.5) 0px 20px 10px -15px;
  border: none;
  transition: all 0.2s ease-in-out;
}

.form .login-button:hover {
  transform: scale(1.03);
  box-shadow: rgba(100, 149, 193, 0.5) 0px 23px 10px -20px;
}

.form .login-button:active {
  transform: scale(0.95);
  box-shadow: rgba(100, 149, 193, 0.5) 0px 15px 10px -10px;
}

.agreement a {
  text-decoration: none;
  color: #3498db;  /* Azul para los enlaces */
  font-size: 9px;
}
</style>