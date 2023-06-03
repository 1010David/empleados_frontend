<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <!-- prettier-ignore -->
      <router-link to="/" class="navbar-brand">Gestión de Empleados</router-link>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <!-- prettier-ignore -->
            <router-link to="/empleados" class="nav-link">Empleados</router-link>
          </li>
          <li class="nav-item">
            <!-- prettier-ignore -->
            <router-link to="/departamentos" class="nav-link">Departamentos</router-link>
          </li>
          <li class="nav-item">
            <!-- prettier-ignore -->
            <router-link to="/reportes" class="nav-link">Reportes</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
