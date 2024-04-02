<script lang="ts" setup>
import { TresCanvas, useRenderLoop } from "@tresjs/core";
import { ref } from "vue";

const torus1 = ref();
const torus2 = ref();
const torus3 = ref();

const { onLoop } = useRenderLoop();

const target = document.getElementById("app");

target?.addEventListener("scroll", () => {
  const scrollRatio = (target.scrollTop + target.scrollHeight / 2) / target.scrollHeight;

  torus1.value.rotation.y = 10 * scrollRatio;
  torus1.value.rotation.x = 5 * scrollRatio;

  torus2.value.rotation.y = 5 * scrollRatio + 0.5;
  torus2.value.rotation.x = 7 * scrollRatio + 0.5;

  torus3.value.rotation.y = 3 * scrollRatio + 0.23;
});
</script>

<template>
  <TresCanvas clear-color="#82DBC5" shadows window-size>
    <TresPerspectiveCamera :position="[3, 3, 3]" :look-at="[0, 0, 0]" />

    <TresMesh ref="torus1">
      <TresTorusGeometry :args="[0.7, 0.3, 16, 32]" />
      <TresMeshToonMaterial color="#82DBC5" />
    </TresMesh>

    <TresMesh ref="torus2">
      <TresTorusGeometry :args="[1.5, 0.35, 16, 32]" />
      <TresMeshToonMaterial color="#82DBC5" />
    </TresMesh>

    <TresMesh ref="torus3">
      <TresTorusGeometry :args="[3, 0.4, 16, 32]" />
      <TresMeshToonMaterial color="#82DBC5" />
    </TresMesh>

    <TresDirectionalLight :position="[0, 2, 4]" :intensity="1.2" cast-shadow />
  </TresCanvas>
</template>
