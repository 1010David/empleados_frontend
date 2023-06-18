<template>
  <div>
    <h2>Lista de Departamentos</h2>
    <ul class="list-group">
      <li
        v-for="departamento in departamentos"
        :key="departamento.id"
        class="list-group-item"
      >
        {{ departamento.nombre }} - {{ departamento.descripcion }} -
        {{ departamento.ubicacion }}
        <button
          @click="eliminarDepartamento(departamento.id)"
          class="btn btn-danger"
        >
          Eliminar
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import {
  getDepartamentos,
  eliminarDepartamento,
} from "../services/DepartamentoService";

export default {
  name: "DepartamentoList",
  data() {
    return {
      departamentos: [],
    };
  },
  mounted() {
    this.fetchDepartamentos();
  },
  methods: {
    fetchDepartamentos() {
      getDepartamentos()
        .then((response) => {
          this.departamentos = response.data;
        })
        .catch((error) => {
          console.error("Error al obtener la lista de departamentos:", error);
        });
    },
    editarDepartamento(id) {
      // Redireccionar al formulario de edición del departamento con el ID proporcionado
      this.$router.push(`/editar/${id}`);
    },
    eliminarDepartamento(id) {
      // Llamar a la función de eliminación del departamento y realizar alguna acción después
      eliminarDepartamento(id)
        .then(() => {
          // Realizar alguna acción después de eliminar el departamento
          this.fetchDepartamentos(); // Volver a obtener la lista de departamentos actualizada
        })
        .catch((error) => {
          console.error("Error al eliminar el departamento:", error);
        });
    },
  },
};
</script>
