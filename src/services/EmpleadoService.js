import axios from "axios";

export function getEmpleados() {
  return axios.get("http://localhost:9090/empleados");
}

export function agregarEmpleado(empleado) {
  return axios.post("http://localhost:9090/empleados", empleado);
}

export function actualizarEmpleado(id, empleado) {
  return axios.put(`http://localhost:9090/empleados/${id}`, empleado);
}

export function eliminarEmpleado(id) {
  return axios.delete(`http://localhost:9090/empleados/${id}`);
}
