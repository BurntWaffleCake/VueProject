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
        <ArticleHeader title="Polygon Collision" title-image-path="/img/polygonCollision.webp" />
        <!-- Main Content -->

        <div class="px-4">
          <nav class="breadcrumb">
            <RouterLink class="breadcrumb-item" to="/Article">Articles</RouterLink>
            <RouterLink class="breadcrumb-item" to="/Article/Physics">Physics</RouterLink>
            <RouterLink class="breadcrumb-item" to="/Article/Physics/PhysicsEngine">Physics Engine</RouterLink>
            <span class="breadcrumb-item active" aria-current="page">Polygon Collision</span>
          </nav>

          <h1 style="width: 100%">Polygon Collision</h1>

          <p>
            Using the SAT algorithm we described prior, some physics equations to calculate responses to collisions, and a way to apply forces, we can
            extend the engine to be able to handle any type of convex polygon (think of shapes without any "dents"). Concave polygons are handled by
            splitting them into multiple convex polygons (usually triangles). Being able to freely apply forces on our physics objects allows us to
            form models or collections of polygons that are connected or "welded" together. This allows us to form very complex shapes out of
            individual, simplified shapes while retaining high quality collision fidelity.
          </p>

          <div class="small">Click and Drag to move polygons around</div>
          <iframe
            height="300"
            style="width: 100%"
            scrolling="no"
            title="Untitled"
            src="https://codepen.io/WaffleCake-the-decoder/embed/preview/gOEdemY?default-tab=html%2Cresult"
            frameborder="no"
            loading="lazy"
            allowtransparency="true"
            allowfullscreen="true"
          >
            See the Pen <a href="https://codepen.io/WaffleCake-the-decoder/pen/gOEdemY"> Untitled</a> by WaffleCake (<a
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
