/* eslint-disable */
import { createRouter, createWebHistory } from "vue-router";

import EmpleadoList from "../components/EmpleadoList.vue";
import EmpleadoForm from "../components/EmpleadoForm.vue";
import DepartamentoList from "../components/DepartamentoList.vue";
import DepartamentoForm from "../components/DepartamentoForm.vue";
import Reportes from "../components/ReportesComponent.vue";

const routes = [
  { path: "/", redirect: "/empleados" },
  { path: "/empleados", component: EmpleadoList },
  { path: "/empleados/agregar", component: EmpleadoForm },
  { path: "/empleados/editar/:id", component: EmpleadoForm },
  { path: "/departamentos", component: DepartamentoList },
  { path: "/departamentos/agregar", component: DepartamentoForm },
  { path: "/departamentos/editar/:id", component: DepartamentoForm },
  { path: "/reportes", component: Reportes },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
