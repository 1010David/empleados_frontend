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
      <div>
        <label for="jefeNombre">Nombre del Jefe:</label>
        <input type="text" id="jefeNombre" v-model="jefeNombre" />
      </div>
      <div>
        <label for="jefeApellido">Apellido del Jefe:</label>
        <input type="text" id="jefeApellido" v-model="jefeApellido" />
      </div>
      <div>
        <label for="jefeFechaNacimiento">Fecha de Nacimiento del Jefe:</label>
        <input
          type="date"
          id="jefeFechaNacimiento"
          v-model="jefeFechaNacimiento"
        />
      </div>
      <div>
        <label for="jefeDireccion">Dirección del Jefe:</label>
        <input type="text" id="jefeDireccion" v-model="jefeDireccion" />
      </div>
      <div>
        <label for="jefeTelefono">Teléfono del Jefe:</label>
        <input type="text" id="jefeTelefono" v-model="jefeTelefono" />
      </div>
      <div>
        <label for="jefeCorreoElectronico">Correo Electrónico del Jefe:</label>
        <input
          type="email"
          id="jefeCorreoElectronico"
          v-model="jefeCorreoElectronico"
        />
      </div>
      <div>
        <label for="jefeNumeroIdentificacion"
          >Número de Identificación del Jefe:</label
        >
        <input
          type="text"
          id="jefeNumeroIdentificacion"
          v-model="jefeNumeroIdentificacion"
        />
      </div>
      <div>
        <label for="jefeFechaContratacion"
          >Fecha de Contratación del Jefe:</label
        >
        <input
          type="date"
          id="jefeFechaContratacion"
          v-model="jefeFechaContratacion"
        />
      </div>
      <div>
        <label for="jefeSalario">Salario del Jefe:</label>
        <input type="number" id="jefeSalario" v-model="jefeSalario" />
      </div>
      <button type="submit">Guardar</button>
    </form>
  </div>
</template>

<script>
import { agregarDepartamento } from "../services/DepartamentoService";

export default {
  name: "DepartamentoForm",
  data() {
    return {
      nombre: "",
      descripcion: "",
      ubicacion: "",
      jefeNombre: "",
      jefeApellido: "",
      jefeFechaNacimiento: "",
      jefeDireccion: "",
      jefeTelefono: "",
      jefeCorreoElectronico: "",
      jefeNumeroIdentificacion: "",
      jefeFechaContratacion: "",
      jefeSalario: 0.0,
    };
  },
  methods: {
    guardarDepartamento() {
      const departamento = {
        nombre: this.nombre,
        descripcion: this.descripcion,
        ubicacion: this.ubicacion,
        jefeDepartamento: {
          nombre: this.jefeNombre,
          apellido: this.jefeApellido,
          fechaNacimiento: this.jefeFechaNacimiento,
          direccion: this.jefeDireccion,
          telefono: this.jefeTelefono,
          correoElectronico: this.jefeCorreoElectronico,
          numeroIdentificacion: this.jefeNumeroIdentificacion,
          fechaContratacion: this.jefeFechaContratacion,
          salario: this.jefeSalario,
        },
      };

      agregarDepartamento(departamento)
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
