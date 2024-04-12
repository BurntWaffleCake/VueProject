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

          <p
            class="codepen"
            data-height="300"
            data-default-tab="html,result"
            data-slug-hash="ExMeENE"
            data-user="WaffleCake-the-decoder"
            style="
              height: 300px;
              box-sizing: border-box;
              display: flex;
              align-items: center;
              justify-content: center;
              border: 2px solid;
              margin: 1em 0;
              padding: 1em;
            "
          >
            <span
              >See the Pen <a href="https://codepen.io/WaffleCake-the-decoder/pen/ExMeENE"> Untitled</a> by WaffleCake (<a
                href="https://codepen.io/WaffleCake-the-decoder"
                >@WaffleCake-the-decoder</a
              >) on <a href="https://codepen.io">CodePen</a>.</span
            >
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
<script setup>
import { onMounted } from "vue";

onMounted(() => {
  let codepenScript = document.createElement("script");
  codepenScript.setAttribute("src", "https://cpwebassets.codepen.io/assets/embed/ei.js");
  document.head.appendChild(codepenScript);

  let MathJax = document.createElement("script");
  MathJax.setAttribute("src", "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js");
  document.head.appendChild(MathJax);
});
</script>
<style></style>
