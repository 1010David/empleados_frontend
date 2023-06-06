<template>
  <div>
    <h2>Agregar/Editar Empleado</h2>
    <form @submit.prevent="guardarEmpleado">
      <input type="text" v-model="empleado.nombre" placeholder="Nombre" required />
      <input type="text" v-model="empleado.apellido" placeholder="Apellido" required />
      <input type="email" v-model="empleado.correo_electronico" placeholder="Correo electrónico" required />
      <button type="submit"> Guardar </button>
    </form>
  </div>
</template>

<script>
import { agregarEmpleado, actualizarEmpleado } from "../services/EmpleadoService";

export default {
  name: "EmpleadoForm",
  data() {
    return {
      empleado: {
        nombre: "",
        apellido: "",
        correo_electronico: ""
      }
    };
  },
  methods: {
    guardarEmpleado() {
      if (this.empleado.id) {
        actualizarEmpleado(this.empleado.id, this.empleado)
          .then((response) => {
            // Manejar la respuesta exitosa si es necesario
          })
          .catch((error) => {
            console.error("Error al actualizar el empleado:", error);
          });
      } else {
        agregarEmpleado(this.empleado)
          .then((response) => {
            // Manejar la respuesta exitosa si es necesario
          })
          .catch((error) => {
            console.error("Error al agregar el empleado:", error);
          });
      }
    }
  }
};
</script>
