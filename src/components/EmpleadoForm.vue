<template>
  <div>
    <h2>Formulario de Empleado</h2>
    <form @submit.prevent="guardarEmpleado">
      <div>
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" v-model="nombre" />
      </div>
      <div>
        <label for="apellido">Apellido:</label>
        <input type="text" id="apellido" v-model="apellido" />
      </div>
      <div>
        <label for="fechaNacimiento">Fecha de Nacimiento:</label>
        <input type="date" id="fechaNacimiento" v-model="fechaNacimiento" />
      </div>
      <div>
        <label for="direccion">Dirección:</label>
        <input type="text" id="direccion" v-model="direccion" />
      </div>
      <div>
        <label for="telefono">Teléfono:</label>
        <input type="text" id="telefono" v-model="telefono" />
      </div>
      <div>
        <label for="correoElectronico">Correo Electrónico:</label>
        <input
          type="email"
          id="correoElectronico"
          v-model="correoElectronico"
        />
      </div>
      <div>
        <label for="numeroIdentificacion">Número de Identificación:</label>
        <input
          type="text"
          id="numeroIdentificacion"
          v-model="numeroIdentificacion"
        />
      </div>
      <div>
        <label for="fechaContratacion">Fecha de Contratación:</label>
        <input type="date" id="fechaContratacion" v-model="fechaContratacion" />
      </div>
      <div>
        <label for="salario">Salario:</label>
        <input type="number" id="salario" v-model="salario" />
      </div>
      <button type="submit">Guardar</button>
    </form>
  </div>
</template>

<script>
import { agregarEmpleado } from "../services/EmpleadoService";

export default {
  name: "EmpleadoForm",
  data() {
    return {
      nombre: "",
      apellido: "",
      fechaNacimiento: "",
      direccion: "",
      telefono: "",
      correoElectronico: "",
      numeroIdentificacion: "",
      fechaContratacion: "",
      salario: 0,
    };
  },
  methods: {
    guardarEmpleado() {
      const empleado = {
        nombre: this.nombre,
        apellido: this.apellido,
        fechaNacimiento: this.fechaNacimiento,
        direccion: this.direccion,
        telefono: this.telefono,
        correoElectronico: this.correoElectronico,
        numeroIdentificacion: this.numeroIdentificacion,
        fechaContratacion: this.fechaContratacion,
        salario: this.salario,
      };

      agregarEmpleado(empleado)
        .then(() => {
          // Realizar alguna acción después de guardar el empleado
        })
        .catch((error) => {
          console.error("Error al guardar el empleado:", error);
        });
    },
  },
};
</script>
