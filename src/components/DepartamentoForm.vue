<template>
  <div>
    <h2>Agregar/Editar Departamento</h2>

    <form @submit.prevent="guardarDepartamento">
      <input type="text" v-model="departamento.nombre" placeholder="Nombre" required>
      <input type="text" v-model="departamento.descripcion" placeholder="Descripción" required>
      <input type="text" v-model="departamento.ubicacion" placeholder="Ubicación" required>
      <button type="submit">Guardar</button>
    </form>
  </div>
</template>

<script>
import { agregarDepartamento, actualizarDepartamento } from "../services/DepartamentoService";

export default {
  name: "DepartamentoForm",
  data() {
    return {
      departamento: {
        nombre: "",
        descripcion: "",
        ubicacion: ""
      }
    };
  },
  methods: {
    guardarDepartamento() {
      if (this.departamento.id) {
        actualizarDepartamento(this.departamento.id, this.departamento)
          .then((response) => {
            // Manejar la respuesta exitosa si es necesario
          })
          .catch((error) => {
            console.error("Error al actualizar el departamento:", error);
          });
      } else {
        agregarDepartamento(this.departamento)
          .then((response) => {
            // Manejar la respuesta exitosa si es necesario
          })
          .catch((error) => {
            console.error("Error al agregar el departamento:", error);
          });
      }
    }
  }
};
</script>
