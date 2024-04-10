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
        <ArticleHeader title="Ball Collision Optimization" title-image-path="/img/ballCollisionOptimizationBackdrop.webp" />
        <!-- Main Content -->

        <div class="px-4">
          <nav class="breadcrumb">
            <RouterLink class="breadcrumb-item" to="/Article">Articles</RouterLink>
            <RouterLink class="breadcrumb-item" to="/Article/Physics">Physics</RouterLink>
            <RouterLink class="breadcrumb-item" to="/Article/Physics/PhysicsEngine">Physics Engine</RouterLink>
            <span class="breadcrumb-item active" aria-current="page">Ball Collision Optimization</span>
          </nav>

          <h1 class="bookmark">Ball Collision Optimization</h1>

          <h2 class="bookmark" data-skew="1">Limitation of Brute Force Circle Collision</h2>
          <p>
            You may have noticed the fact that spawning a lot of balls in the previous article's simulation quickly negatively impacts the performance
            of the simulation. The previous simulation took a brute-force approach to checking collision. Each ball is compared with every other ball
            meaning the number of comparisons quickly increases as the number of balls increases (in this case the number of comparisons is equal to
            \( n^2 \) where \(n\) is the number of balls present).
          </p>

          <h2 class="bookmark" data-skew="1">Spatial Partitioning</h2>
          <p>
            One way to optimize collisions is to use spatial partitioning. Spatial partitioning is the act of separating space into partitions or
            groups which, in this case, can be used to cull unneeded comparisons between physics objects. There are many types of spatial partitioning
            each with their own pros and cons which we will discuss below.
          </p>

          <h3 class="bookmark" data-skew="2">Grid Optimization</h3>
          <p>
            One way to improve the overall performance of the simulation is to split the workspace (simulation area) into a grid. Each ball is
            associated with a grid cell assigned before the collision calculation cycle. The grid cells with balls are then iterated through and balls
            in ONLY the adjacent grid cells are compared to the balls in the current grid cell. This culls any ball in grid cells not adjacent to the
            current grid cell, excluding them in the comparison. This can vastly decrease the number of comparisons needed per ball improving overall
            performance, especially with a larger number of balls.
          </p>

          <img class="w-100 p-5" style="max-height: 20rem" src="/article/CircleCollisionOptimization/gridDiagram.drawio.svg" />

          <h3 class="bookmark" data-skew="2">Pros and Cons</h3>
          <p>
            The grid optimization is relatively simple to implement and easy to understand; however, there are also several cons to is usage. The
            optimization's simplicity is only extended to balls of the same size, a property which is exploited by the optimization by setting the
            grid's cell size to the ball's diameter. Even with this limitation, this optimization can still be used to simulate fluids and particle
            interactions.
          </p>

          <p
            class="codepen"
            data-height="500"
            data-default-tab="html,result"
            data-slug-hash="RwvdGxZ"
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
              >See the Pen <a href="https://codepen.io/WaffleCake-the-decoder/pen/RwvdGxZ"> Untitled</a> by WaffleCake (<a
                href="https://codepen.io/WaffleCake-the-decoder"
                >@WaffleCake-the-decoder</a
              >) on <a href="https://codepen.io">CodePen</a>.</span
            >
          </p>

          <h3 class="bookmark" data-skew="2">Recursive Spatial Partitioning</h3>
          <p>
            The term "recursive spatial partitioning" can be attributed to a number of different types of spatial partitioning. Some of these include
            binary partitioning, octal and quad trees, and an infinite number of other data structures that each follow the same concept of recursing.
            This type of spatial partitioning splits the workspace into equally sized partitions each of which can then be split into their own
            partitions. For example, in binary space partitioning the workspace is split in half (hence the binary part of the optimization)
            recursively forming a binary tree of sorts. This is similar to the spatial separation found in grid optimizations except it is not limited
            by the size of grid cells.
          </p>

          <img class="w-100 p-5" style="max-height: 20rem" src="/article/CircleCollisionOptimization/binarySpacePartitionDiagram.drawio.svg" />
          <img class="w-100 p-5" style="max-height: 20rem" src="/article/CircleCollisionOptimization/binaryTree.drawio.svg" />

          <h3 class="bookmark" data-skew="2">Pros and Cons</h3>
          <p>
            Recursive spatial partitioning is a simple concept that is harder to implement than optimizations such as grid optimization due to the non
            uniform size of each partition. The size of each partition can change relative to how you divide (binary, quad, octal, etc.) the workspace
            along with the actual size of the workspace. Another complication is actually assigning each physics object to the partitions which can be
            tricky especially with non uniformly sized physics objects.
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
