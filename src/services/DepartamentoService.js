import axios from "axios";

export function getDepartamentos() {
  return axios.get("http://localhost:9090/departamentos");
}

export function agregarDepartamento(departamento) {
  return axios.post("http://localhost:9090/departamentos", departamento);
}

export function actualizarDepartamento(id, departamento) {
  return axios.put(`http://localhost:9090/departamentos/${id}`, departamento);
}

export function eliminarDepartamento(id) {
  return axios.delete(`http://localhost:9090/departamentos/${id}`);
}
