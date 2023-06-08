<template>
  <div>
    <h2>Formulario de Departamento</h2>
    <form @submit.prevent="guardarDepartamento">
      <div>
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" v-model="nombre" />
      </div>
      <div>
        <label for="descripcion">Descripción:</label>
        <input type="text" id="descripcion" v-model="descripcion" />
      </div>
      <div>
        <label for="ubicacion">Ubicación:</label>
        <input type="text" id="ubicacion" v-model="ubicacion" />
      </div>
      <button type="submit">Guardar</button>
    </form>
  </div>
</template>

<script>
import { createDepartamento } from "../services/DepartamentoService";

export default {
  name: "DepartamentoForm",
  data() {
    return {
      nombre: "",
      descripcion: "",
      ubicacion: "",
    };
  },
  methods: {
    guardarDepartamento() {
      const departamento = {
        nombre: this.nombre,
        descripcion: this.descripcion,
        ubicacion: this.ubicacion,
      };

      createDepartamento(departamento)
        .then(() => {
          // Realizar alguna acción después de guardar el departamento
        })
        .catch((error) => {
          console.error("Error al guardar el departamento:", error);
        });
    },
  },
};
</script>
