import Global from "@/Global";
import axios from "axios";

//!guardarlo en el service directamente
// let token = ""

//!para que se guarde siempre -> localstorage

export default class ServiceAlumnos {

  getToken(usuario){
    return new Promise(function(resolve){
      let request = "Auth/Login";
      let url = Global.urlApi + request;
      axios.post(url, usuario, {headers: {"Content-Type": "application/json"}}).then(response => {
        // token = response.data.response;
        resolve(response);
      })
    })
  }

  getEmpleados(){
    return new Promise(function (resolve) { 
      const token = localStorage.getItem('token');
      let request = "api/empleados";
      let url = Global.urlApi + request;
      const headers = { 'Authorization': `Bearer ${token}` };
      axios.get(url, {headers}).then(response => {
        // token = response.data.response;
        resolve(response);
      })
    })
  }

  getPerfil(){
    return new Promise(function(resolve){
      const token = localStorage.getItem('token');

      let request = "api/empleados/perfilempleado";
      let url = Global.urlApi + request;
      const headers = { 'Authorization': `Bearer ${token}` };
      axios.get(url, {headers}).then(response => {
        resolve(response);
      })
    })
  }

}