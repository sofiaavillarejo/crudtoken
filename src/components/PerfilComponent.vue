<template>
  <div>
    <h1>Perfil del empleado: {{ empleado.apellido }}</h1>
    <ul>
      <li>{{ empleado.idEmpleado }}, {{ empleado.apellido }}</li>
    </ul>
  </div>
</template>

<script>
import ServiceAlumnos from '@/services/ServiceAlumnos'
const service = new ServiceAlumnos();

export default {
  name: "PerfilComponent",
  data() {
    return {
      empleado: ""
    }
  },
  mounted(){
    service.getPerfil().then(result => {
      console.log(result.data);
      this.empleado = result.data;
    })
  }
  }
</script>

<style>

</style>