<template>
  <div>
    <h1>Empleados</h1>
    <ul>
      <li v-for="emp in empleados" :key="emp">{{ emp.idEmpleado }}, {{ emp.apellido }}, {{ emp.oficio }}</li>
    </ul>
  </div>
</template>

<script>
import ServiceAlumnos from '@/services/ServiceAlumnos'
const service = new ServiceAlumnos();

export default {
  name: "EmpleadosComponent",
  data() {
    return {
      //esque me habia equivocado de url de api
      empleados: []
    }
  },
  mounted() {
    service.getEmpleados().then(result => {
      this.empleados = result.data;
    })
  }
}
</script>

<style>

</style>