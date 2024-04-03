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
            <a class="breadcrumb-item" href="../../../index.html">Articles</a>
            <a class="breadcrumb-item" href="../../index.html">Physics</a>
            <a class="breadcrumb-item" href="../index.html">Physics Engine</a>
            <span class="breadcrumb-item active" aria-current="page">Ball Collision</span>
          </nav>
          <h1 class="bookmark">Ball Collision</h1>

          <h2 class="bookmark" data-skew="1">What is Ball Collision?</h2>
          <p>Ball Collision (or in this case circle collision as we are going to mostly be in 2d), is a way of detecting the overlap or collision of two ball objects. This can very simply be done using certain properties that each ball holds along with relational data between said balls.</p>

          <h3 class="bookmark" data-skew="1">Point In Circle Algorithm</h3>
          <p>
            From this point forward we will reference balls as circles however the mathematics can be applied to higher dimensions such as with spheres. We can define a circle as an enclosed geometry which has an infinite number of definable points each a distance of its radius from its center. As such, we can know that a point lies inside of a
            circle if its distance from the center of said circle is less than the radius and on the surface of the circle if the distance is equal to the circle's radius.
          </p>

          <p class="p-0 pb-3 m-0 text-center">\( \vec{d} = \begin{vmatrix} x_{circle} - x_{point} \\ y_{circle} - y_{point} \end{vmatrix} \) <br /></p>
          <p class="p-0 pb-3 m-0 text-center">\( |\vec{d}| = \sqrt{ {\vec{d}_x}^2 + {\vec{d}_y}^2 } \) <br /></p>
          <p class="p-0 pb-3 m-0 text-center">\( l_{distance} = |\vec{d}| \)</p>
          <p class="p-0 pb-3 m-0 text-center">Point is in circle when: \( l_{distance} < r_{radius}\)</p>

          <div style="height: 15rem">
            <ArticleDiagram path="article\CircleCollision\CirclePointOverlap.drawio.svg" />
          </div>
          <div class="image-display mb-5" style="height: 15rem; background-image: url('/article/CircleCollision/CirclePointOverlap.drawio.svg')"></div>

          <h3 class="bookmark" data-skew="1">Circle To Circle Collision Detection Algorithm</h3>
          <p>
            We now know that a point is in a circle if the distance between the point and the center of the circle is less than the circle's radius. Using this relationship and the fact that all points on a circle is exactly the distance of the circle's radius from its center, we can deduce that the if the distance between the two circles is less
            than sum of two circle's radii, they are colliding. We can in turn calculate the overlap or "depth" of the collision by subtracting the distance from the sum of radii giving us the overlap magnitude.
          </p>
          <p>Where \(a\) and \(b\) are circles:</p>

          <p class="p-0 pb-3 m-0 text-center">\( r_{sum} = r_a + r_b\)</p>
          <p class="p-0 pb-3 m-0 text-center">\( l_{distance} = |\vec{a_{pos}} - \vec{b_{pos}}| \)</p>
          <p class="p-0 pb-3 m-0 text-center">Circles are colliding when: \( l_{distance} < r_{sum} \)</p>
          <p class="p-0 pb-3 m-0 text-center">\( d_{depth} = r_{sum} - l_{distance} \)</p>

          <div class="image-display mb-5" style="height: 15rem; background-image: url('/article/CircleCollision/CircleCircleOverlap.drawio.svg')"></div>

          <h3 class="bookmark" data-skew="1">Collision Response</h3>
          <p>
            A collision response occurs after a collision is detected and is used to change certain attributes regarding each of the circles. For example, we could make the circles bounce off of one another when the collision occurs. In this article, we will only consider a simplified collision response meaning momentum will not be accurately
            represented. To properly position each of the circles, we can use the depth that we found previously scaled along the position delta vector to offset each of the circles equally. Each circle is offset with a magnitude half of the depth as we want to move each circle and equal distance apart.
          </p>
          <p class="p-0 pb-3 m-0 text-center">\( \vec{d} = \vec{b_{pos}} - \vec{a_{pos}} \)</p>
          <p class="p-0 pb-3 m-0 text-center">\( \hat{d} = \frac{\vec{d}}{|\vec{d}|} \)</p>
          <p class="p-0 pb-3 m-0 text-center">\( \vec{a_{delta}} = \frac{1}{2} * d_{depth} * \hat{d} \)</p>
          <p class="p-0 pb-3 m-0 text-center">\( \vec{b_{delta}} = \frac{1}{2} * d_{depth} * -\hat{d} \)</p>
          <p class="p-0 pb-3 m-0 text-center">
            [Note the negative when solving for \( \vec{b_{delta}} \). <br />
            We want the circles to move in opposite directions]
          </p>
          <div class="image-display mb-5" style="height: 15rem; background-image: url('/article/CircleCollision/CircleDelta.drawio.svg')"></div>

          <p>
            Notice the fact that the offset / delta vector we used to move the circles are perpendicular to the tangent line of the point the offset vector's axis intersects. The unit vector of this offset is the same as the "normal" vector that faces towards the opposing circle thus defining a "normal" vector as one that lays perpendicular to a
            face. Also notice that there are two vectors that are similar to our offset vector: the one we just defined and one that lays on the opposite side of the collision (just with a inverse or opposing direction). This property of offsetting by the normals and parallel normals and faces will be used later on during collision detection
            between polygons.
          </p>
          <h2 class="bookmark">Simulation</h2>
          <p>Using the math previously described, we can make a physics simulation to describe collision detection and response.</p>
          <br />
          <p>Click to spawn in balls</p>
          <p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="wvNPYGK" data-user="WaffleCake-the-decoder" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em">
            <span>See the Pen <a href="https://codepen.io/WaffleCake-the-decoder/pen/wvNPYGK"> Untitled</a> by WaffleCake (<a href="https://codepen.io/WaffleCake-the-decoder">@WaffleCake-the-decoder</a>) on <a href="https://codepen.io">CodePen</a>.</span>
          </p>
          <a href="./src/index.html" target="_blank" style="color: white">Click to open in new tab</a>
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
