<script lang="ts" setup>
function onButtonClick() {
  document.getElementById("app").scrollTo(top);
}
</script>

<template lang="">
  <div class="position-fixed bottom-0 end-0 m-3 z-3">
    <button @click="onButtonClick()" type="button" class="btn"><i class="bi bi-caret-up-fill"></i></button>
  </div>
</template>

<style lang=""></style>
