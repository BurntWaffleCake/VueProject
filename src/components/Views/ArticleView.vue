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
        <ArticleHeader title="Articles" title-image-path="/img/articlesBackdrop.png" />
        <!-- Main Content -->

        <div class="px-4">
          <nav class="breadcrumb">
            <span class="breadcrumb-item" aria-current="page"> <RouterLink to="/">Home</RouterLink> </span>
            <span class="breadcrumb-item active" aria-current="page">Articles</span>
          </nav>

          <p>
            This is the hub for all of my articles! This includes any topics and concepts I found interesting or any project I have completed over my
            computer science career. Be free to explore and let's all learn something new today!
          </p>

          <div class="border border-warning rounded my-3" id="bruh">
            <div class="border-start border-warning border-5">
              <!-- <img class="card-img-top" src="holder.js/100px180/" alt="" /> -->
              <div class="card-body p-4 bg-warning-subtle">
                <h4 class="card-title text-warning">Enable Javascript</h4>
                <p class="card-text text-warning">For the best possible experience with this website, please turn javascript on!</p>
              </div>
            </div>
          </div>
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
import ArticleMainNav from "../Articles/ArticleMainNav.vue";
import ArticleHeader from "../Articles/ArticleHeader.vue";
</script>
<style></style>
