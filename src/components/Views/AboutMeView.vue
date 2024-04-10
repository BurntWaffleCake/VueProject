<script setup>
import { ref } from "vue";
import TresScene from "../utility/TresScene.vue";

function evaluateAge() {
  return new Date(new Date() - new Date(1136656800 * 1000)).getFullYear() - 1970;
}

evaluateAge();
</script>

<template>
  <div class="d-flex flex-column flex-grow-1 h-auto">
    <TresScene style="z-index: -10" />
    <div class="px-0 container-fluid w-100 vh-100 d-flex flex-column justify-content-center" style="scroll-snap-align: start">
      <div class="hazard-background py-4">
        <div class="w-100 d-flex flex-column align-items-center bg-body py-5">
          <div class="display-1">Soohan Cho<br /></div>
          <div class="display-5 text-nowrap scroll-infinite">
            So who is he? &emsp; So who is he? &emsp; So who is he? &emsp; So who is he? &emsp; So who is he? &emsp; So who is he? &emsp; So who is
            he? &emsp; So who is he? &emsp; So who is he? &emsp; So who is he? &emsp; So who is he? &emsp; So who is he? &emsp; So who is he?
          </div>
        </div>
      </div>
    </div>

    <div
      class="px-0 my-5 container-fluid w-100 d-flex flex-column justify-content-lg-center justify-content-start align-items-center align-content-lg-center"
    >
      <div class="row g-0">
        <div v-motion-slide-visible-once-left class="col-12 p-3 col-lg-6">
          <div class="w-100">
            <img class="w-100 rounded rounded-3" src="/Profile.png" />
          </div>
        </div>
        <div v-motion-slide-visible-once-right class="col-12 p-3 col-lg-6">
          <div class="w-100 h-100 rounded rounded-3 bg-body p-4 pg-lg-5">
            <div class="h1">Profile</div>
            <hr />
            <div class="row">
              <div class="col-12 col-lg-6 h-100">
                <div class="fs-3 text-decoration-underline"><b>General</b></div>
                <div class="fs-4"><b>Name</b>: Soohan Cho</div>
                <div class="fs-4"><b>Gender</b>: Male</div>
                <div class="fs-4"><b>Age</b>: {{ evaluateAge() }}</div>
                <div class="fs-4"><b>Favorite Ice Cream Flavor</b>: Chocolate</div>
              </div>
              <hr class="d-block my-3 d-lg-none" />
              <div class="col-12 col-lg-6 h-100">
                <div class="fs-5">
                  I am an avid computer scientist with many different interests in a wide range of different CS and non CS related topics. This
                  website serves as a medium for me to express my expertise and personal projects as I delve into the intricate and wonderful world we
                  live in!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="my-5 container-fluid w-100 d-flex flex-column justify-content-center" style="scroll-snap-align: start">
      <div class="align-self-center w-75">
        <div class="display-2 text-center text-light mb-3">Skills and Experience</div>
        <div class="row h-100">
          <div class="col-lg-4 h-100">
            <div class="h2">Frameworks and Libraries</div>
            <hr />
          </div>
          <div class="col-lg-4 h-100">
            <div class="h2">Programming Languages</div>
          </div>
          <div class="col-lg-4 h-100">
            <div class="h2">Other Skills</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.text-shadow-fancy {
  text-shadow: 0px 0px 0.5rem rgb(0, 0, 0);
}

.scroll-infinite {
  animation: scroll 10s infinite linear;
}

@keyframes scroll {
  0% {
    translate: -25%;
  }

  100% {
    translate: 25%;
  }
}
</style>
