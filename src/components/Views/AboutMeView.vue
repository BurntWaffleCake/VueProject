<script setup>
import { ref } from "vue";
import TresScene from "../TresScene.vue";

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

    <div class="px-0 container-fluid w-100 vh-100 d-flex flex-column justify-content-center align-items-start align-content-lg-center">
      <div class="d-flex flex-lg-row flex-column gap-5">
        <div class="h3 bg-body p-5 rounded-5">
          <h1>Profile</h1>
          <hr style="height: 3px" />
          Name: Soohan Cho<br />
          Gender: Male <br />
          Current Age: {{ evaluateAge() }}

          <hr style="height: 3px" />
        </div>
        <div class="h3 text-center bg-body p-5 rounded-5">
          <h1>Skills</h1>
          <hr style="height: 3px" />
          Computer Scientist<br />
          Graphic Designer<br />
          Artist<br />
          Scientist<br />
          Game Developer<br />
          Programmer<br />
          Full Stack Developer<br />
          Web Application Designer<br />
          <hr style="height: 3px" />
        </div>

        <div class="h3 text-center bg-body p-5 rounded-5">
          <h1>Skills</h1>
          <hr style="height: 3px" />
          Computer Scientist<br />
          Graphic Designer<br />
          Artist<br />
          Scientist<br />
          Game Developer<br />
          Programmer<br />
          Full Stack Developer<br />
          Web Application Designer<br />
          <hr style="height: 3px" />
        </div>
      </div>
    </div>

    <div class="px-0 container-fluid w-100 vh-100 d-flex flex-column justify-content-center align-items-center">
      <div class="text-shadow-fancy h1 text-light text-center">My name is Soohan Cho. I am an</div>
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
.hazard-background {
  animation: scrollBackground 1s linear infinite;
  /* background-repeat: repeat-x; */
  background-size: cover;
  background-image: repeating-linear-gradient(-55deg, #2b2b2b, #2b2b2b 30px, #6b6b6b 30px, #6b6b6b 60px);
}

@keyframes scrollBackground {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: -100% 0;
  }
}
</style>
