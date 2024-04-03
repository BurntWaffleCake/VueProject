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
        <ArticleHeader title="Box Collision" title-image-path="/img/boxCollisionBackdrop.webp" />
        <!-- Main Content -->

        <div class="px-4">
          <nav class="breadcrumb">
            <a class="breadcrumb-item" href="../../../index.html">Articles</a>
            <a class="breadcrumb-item" href="../../index.html">Physics</a>
            <a class="breadcrumb-item" href="../index.html">Physics Engine</a>
            <span class="breadcrumb-item active" aria-current="page">Box Collision</span>
          </nav>

          <h1>Box Collision</h1>

          <h2>Basic Polygon Collision</h2>
          <p>
            Balls are the simplest collision shape we need to handle. Unfortunately, most complex volumes are not made up of only balls and instead use complex polygons and shapes to fully or partially represent itself. In our case with 2D collision, triangles are the most basic shape we can decompose these volumes into. This article will not go
            into triangle and other decomposition algorithms and instead focus on collision between box or rectangular volumes.
          </p>

          <h2>AABB Box Collision</h2>
          <p>
            AABB collision is the most simple way to calculate the collision between two boxes. All of the edges of the box we want to collide is mapped to the x and y axis of the coordinate frame we are using. This means that all colliders do not have rotation allowing for every efficient and fast calculations to test for collision. In our case
            (with 2d collision), we only need to test the x and y axis to see if two colliders are colliding which we can calculate using the overlap of the projection of these shapes onto said axis. If these projections do not overlap in any of the tested axis, we can conclude that the two volumes are not colliding. This concept of using
            projections is further expanded in the SAT collision algorithm.
          </p>

          <p style="text-align: center">calculating overlap between two lines</p>

          <p class="p-0 pb-3 m-0 text-center">\( overlap =\max{(0, \min{(A_{max}, B_{max})}-\max{(A_{min}, B_{min})})}\)</p>

          <img class="w-100 p-5" style="max-height: 20rem" src="/article/BoxCollision/AABB.drawio.svg" />

          <h2>Pros and Cons</h2>
          <p>
            AABB is extremely fast compared to other collision algorithms and its simple nature allows for efficient and fast calculations. This is why many games use AABB when testing for collision using bounding boxes that encapsulate the entire body that needs collision. This, however, comes at the cost of precision as AABB is locked to the axis
            and does not allow any rotation. AABB also only represents a box and is unable to test for collision between more complex geometry. AABB serves as an excellent approximation of a body's volume and is often used as an optimization method for more complex collision algorithms.
          </p>

          <p class="codepen" data-height="300" data-default-tab="result" data-slug-hash="KKJOxQW" data-user="WaffleCake-the-decoder" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em">
            <span>See the Pen <a href="https://codepen.io/WaffleCake-the-decoder/pen/KKJOxQW"> Untitled</a> by WaffleCake (<a href="https://codepen.io/WaffleCake-the-decoder">@WaffleCake-the-decoder</a>) on <a href="https://codepen.io">CodePen</a>.</span>
          </p>
          <a href="./src/AABBCollision/index.html" target="_blank" style="color: white">Click to open in new tab</a>

          <br />

          <h2>SAT Algorithm</h2>
          <p>
            SAT or Separating Axis Theorem is a method of finding collision using a set of axis and overlaps between projections. The overlap calculations from AABB is applicable here with the max and min points being derived by projecting the colliding geometries onto an arbitrary axis instead of using the x and y axis. SAT allows for our boxes to
            have rotation and can be extended to any convex polygon (any line drawn across a geometry can not have move than 2 points of intersection with that geometry). SAT uses an arbitrarily large number of axis to find whether two geometries collide, however; we only need to test a set number of them in order to determine whether two
            geometries are colliding. These axis can be obtained by fetching all the normals of both geometries, ignoring any normals that are parallel to existing axis. By projecting both geometries to these axis and making sure every axis has an overlap, we can guarantee a collision/overlap between those two geometries (as long as they are both
            convex).
          </p>

          <img class="w-100 p-5" style="" src="/article/BoxCollision/SatDiagram.png" />

          <p class="codepen" data-height="300" data-default-tab="result" data-slug-hash="gOqVBaw" data-user="WaffleCake-the-decoder" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em">
            <span>See the Pen <a href="https://codepen.io/WaffleCake-the-decoder/pen/gOqVBaw"> Untitled</a> by WaffleCake (<a href="https://codepen.io/WaffleCake-the-decoder">@WaffleCake-the-decoder</a>) on <a href="https://codepen.io">CodePen</a>.</span>
          </p>
          <a href="./src/SatCollision/index.html" target="_blank" style="color: white">Click to open in new tab</a>

          <h2>Response and Simulation</h2>
          <p>Using the area of these boxes as their mass, we can calculate the collision response that would occur if they were to collide. A force is applied at the point of collision proportional to the amount of momentum each box carries which can in turn be used to calculate the rotational and translational velocities of the boxes.</p>

          <p class="codepen" data-height="300" data-default-tab="  result" data-slug-hash="KKJOGMo" data-user="WaffleCake-the-decoder" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em">
            <span>See the Pen <a href="https://codepen.io/WaffleCake-the-decoder/pen/KKJOGMo"> Untitled</a> by WaffleCake (<a href="https://codepen.io/WaffleCake-the-decoder">@WaffleCake-the-decoder</a>) on <a href="https://codepen.io">CodePen</a>.</span>
          </p>
          <a href="./src/BoxCollision/index.html" target="_blank" style="color: white">Click to open in new tab</a>
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
