/* eslint-disable */
<template>
  <div>
    <h2>Lista de Empleados</h2>
    <ul class="list-group">
      <li
        v-for="empleado in empleados"
        :key="empleado.id"
        class="list-group-item"
      >
        {{ empleado.nombre }} - {{ empleado.apellido }} -
        {{ empleado.fechaNacimiento }} - {{ empleado.direccion }} -
        {{ empleado.telefono }} - {{ empleado.correoElectronico }} -
        {{ empleado.numeroIdentificacion }} - {{ empleado.fechaContratacion }} -
        {{ empleado.salario }}
        <button @click="eliminarEmpleado(empleado.id)" class="btn btn-danger">
          Eliminar
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { getEmpleados, eliminarEmpleado } from "../services/EmpleadoService";

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
    editarEmpleado(id) {
      // Redireccionar al formulario de edición del empleado con el ID proporcionado
      this.$router.push(`/editar/${id}`);
    },
    eliminarEmpleado(id) {
      // Llamar a la función de eliminación del empleado y realizar alguna acción después
      eliminarEmpleado(id)
        .then(() => {
          // Realizar alguna acción después de eliminar el empleado
          this.fetchEmpleados(); // Volver a obtener la lista de empleados actualizada
        })
        .catch((error) => {
          console.error("Error al eliminar el empleado:", error);
        });
    },
  },
};
</script>
