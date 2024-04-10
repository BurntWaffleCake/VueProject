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
        <ArticleHeader title="Physics" title-image-path="/img/physicsBackdrop.png" />
        <!-- Main Content -->

        <div class="px-4">
          <nav class="breadcrumb">
            <RouterLink class="breadcrumb-item" to="/Article">Articles</RouterLink>
            <span class="breadcrumb-item active" aria-current="page">Physics</span>
          </nav>

          <div class="card playfair-display">
            <div class="card-body">
              <blockquote class="blockquote mb-0">
                <p>Physics:</p>
                <p>
                  the branch of science concerned with the nature and properties of matter and energy. The subject matter of physics, distinguished
                  from that of chemistry and biology, includes mechanics, heat, light and other radiation, sound, electricity, magnetism, and the
                  structure of atoms.
                </p>
                <footer class="blockquote-footer">
                  Google,
                  <cite title="Source title">Oxford Languages</cite>
                </footer>
              </blockquote>
            </div>
          </div>

          <br />

          <p>
            Welcome to my physics projects where I combine my love for physics with my passion for coding. On this section, you'll find a bunch of
            projects I've been tinkering with that involve simulating all sorts of cool physics phenomena. Whether it's modeling planetary motion,
            simulating fluid dynamics, or exploring chaos theory, I'm constantly diving into the world of physics simulations and seeing what I can
            create. So, join me on this journey as I experiment, learn, and push the boundaries of what's possible with physics and computer science!
          </p>
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
