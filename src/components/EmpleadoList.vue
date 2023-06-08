<template>
  <div>
    <h2>Lista de Empleados</h2>
    <ul>
      <li v-for="empleado in empleados" :key="empleado.id">
        {{ empleado.nombre }} - {{ empleado.apellido }} -
        {{ empleado.fechaNacimiento }} - {{ empleado.direccion }} -
        {{ empleado.telefono }} - {{ empleado.correoElectronico }} -
        {{ empleado.numeroIdentificacion }} - {{ empleado.fechaContratacion }} -
        {{ empleado.salario }}
      </li>
    </ul>
  </div>
</template>

<script>
import { getEmpleados } from "../services/EmpleadoService";

export default {
  name: "EmpleadoList",
  data() {
    return {
      empleados: [],
    };
  },
  mounted() {
    this.fetchEmpleados();
  },
  methods: {
    fetchEmpleados() {
      getEmpleados()
        .then((response) => {
          this.empleados = response.data;
        })
        .catch((error) => {
          console.error("Error al obtener la lista de empleados:", error);
        });
    },
  },
};
</script>
