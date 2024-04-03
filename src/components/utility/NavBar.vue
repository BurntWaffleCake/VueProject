<script setup lang="ts">
import ThemeToggleButton from "./ThemeToggleButton.vue";
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><i class="h3 bi bi-0-circle"></i></a>
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
          <div class="nav-item">
            <RouterLink class="nav-link" to="/">Home</RouterLink>
          </div>
          <div class="nav-item">
            <RouterLink class="nav-link" to="/AboutMe">About Me</RouterLink>
          </div>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Articles </a>
            <ul class="dropdown-menu">
              <RouterLink class="dropdown-item" to="/Article">Articles Home</RouterLink>
              <RouterLink class="dropdown-item" to="/Article/Algorithms">Algorithms</RouterLink>
              <RouterLink class="dropdown-item" to="/Article/Physics">Physics</RouterLink>
              <RouterLink class="dropdown-item" to="/Article/Graphics">Graphics</RouterLink>
            </ul>
          </li>

          <div class="nav-item">
            <RouterLink class="nav-link" to="/">Blog</RouterLink>
          </div>

          <div class="nav-item">
            <RouterLink class="nav-link" to="/">Projects</RouterLink>
          </div>

          <li class="nav-item">
            <a class="nav-link disabled" aria-disabled="true">Disabled</a>
          </li>
          <li class="ms-lg-auto">
            <ThemeToggleButton />
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
