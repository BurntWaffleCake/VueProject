<script setup lang="ts">
import ThemeToggleButton from "./ThemeToggleButton.vue";
import NavLink from "./NavLink.vue";
import NavDropdown from "./NavDropdown.vue";
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary z-3">
    <div class="container">
      <RouterLink class="navbar-brand fw-bold p-0 d-flex flex-row align-items-center gap-1" to="/"
        ><i class="m-0 p-0 h1 bi bi-journal-code"></i>
        <div class="fs-6">DIGITAL<br />PORTFOLIO</div></RouterLink
      >

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav navbar-center mb-2 mb-lg-0 d-flex flex-lg-row flex-grow-1">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/AboutMe">About Me</NavLink>

          <NavDropdown label="Articles">
            <RouterLink class="dropdown-item" to="/Article">Home</RouterLink>
            <RouterLink class="dropdown-item" to="/Article/Algorithms">Algorithms</RouterLink>
            <RouterLink class="dropdown-item" to="/Article/Physics">Physics</RouterLink>
            <RouterLink class="dropdown-item" to="/Article/Graphics">Graphics</RouterLink>
          </NavDropdown>

          <li class="ms-lg-auto mt-3 mt-lg-0">
            <ThemeToggleButton />
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
