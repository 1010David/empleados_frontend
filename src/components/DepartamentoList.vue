<template>
  <div>
    <h2>Lista de Departamentos</h2>
    <ul>
      <li v-for="departamento in departamentos" :key="departamento.id">
        {{ departamento.nombre }} - {{ departamento.descripcion }} - {{ departamento.ubicacion }}
      </li>
    </ul>
  </div>
</template>

<script>
import { getDepartamentos } from "../services/DepartamentoService";

export default {
  name: "DepartamentoList",
  data() {
    return {
      departamentos: []
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
    }
  }
};
</script>
