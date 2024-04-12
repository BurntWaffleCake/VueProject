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
        <ArticleHeader title="Verlet Physics" title-image-path="/img/polygonCollision.webp" />
        <!-- Main Content -->

        <div class="px-4">
          <nav class="breadcrumb">
            <RouterLink class="breadcrumb-item" to="/Article">Articles</RouterLink>
            <RouterLink class="breadcrumb-item" to="/Article/Physics">Physics</RouterLink>
            <RouterLink class="breadcrumb-item" to="/Article/Physics/PhysicsEngine">Physics Engine</RouterLink>
            <span class="breadcrumb-item active" aria-current="page">Verlet Physics</span>
          </nav>

          <h1 style="width: 100%">Verlet Physics</h1>
          <p>
            Verlet Physics is an alternative way to approach calculating physics bodies. It uses Verlet integration which is a way of integrating and
            solving Newton's equations of motion. To make a complex topic more concise, Verlet physics uses the difference of position from a certain
            time to another certain time to calculate how that object should react in terms of velocity and acceleration changes. This means that, in
            the code, the only real thing that we need to do to apply a force on an object is to change its position. This example of Verlet physics
            uses nodes and bridges to construct highly complex systems with very simple components. Nodes act as particles while bridges are used to
            maintain a specific distance between two nodes. Using these two simple components, we can simulate very complex systems such as soft
            bodies or even clothing and architectural designs.
          </p>
          <iframe
            height="300"
            style="width: 100%"
            scrolling="no"
            title="Untitled"
            src="https://codepen.io/WaffleCake-the-decoder/embed/preview/ExMeENE?default-tab=html%2Cresult"
            frameborder="no"
            loading="lazy"
            allowtransparency="true"
            allowfullscreen="true"
          >
            See the Pen <a href="https://codepen.io/WaffleCake-the-decoder/pen/ExMeENE"> Untitled</a> by WaffleCake (<a
              href="https://codepen.io/WaffleCake-the-decoder"
              >@WaffleCake-the-decoder</a
            >) on <a href="https://codepen.io">CodePen</a>.
          </iframe>
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
