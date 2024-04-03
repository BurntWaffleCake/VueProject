<template lang="">
  <div class="h-100 flex-grow-1 container-fluid d-flex flex-column p-0">
    <button class="d-block d-lg-none position-fixed btn bg-secondary-subtle m-3" data-bs-toggle="offcanvas" type="button" data-bs-target="#Id1">
      <i class="bi bi-three-dots"></i>
    </button>

    <div class="row h-100 flex-grow-1 flex-row">
      <!-- Left Side Nav -->
      <div class="d-lg-block col-lg-3 flex-grow-1">
        <ArticleMainNav />
      </div>

      <!-- Main Body -->
      <div class="col-12 col-lg-6 flex-grow-1 shadow p-0">
        <ArticleHeader title="Physics" title-image-path="/img/physicsEngineBackdrop.jpg" />
        <!-- Main Content -->

        <div class="px-4">
          <nav class="breadcrumb">
            <a class="breadcrumb-item" href="../../index.html">Articles</a>
            <a class="breadcrumb-item" href="../index.html">Physics</a>
            <span class="breadcrumb-item active" aria-current="page">Physics Engine</span>
          </nav>

          <div class="h1">Introduction</div>

          <p>This is a simple physics engine written in javascript. Although it's performance is not the greatest, some optimizations have been made. This section of the website documents its development and the concepts used to develope it.</p>
        </div>
        <!-- End of Main Content -->
      </div>
      <!-- End of Main Body -->

      <!-- BookMarks -->
      <div class="d-none d-lg-block col-lg-3 flex-grow-1"></div>
    </div>
  </div>
</template>
<script setup></script>
<style></style>
