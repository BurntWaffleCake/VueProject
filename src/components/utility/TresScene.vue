<script lang="ts" setup>
import { TresCanvas, useRenderLoop } from "@tresjs/core";
import { nextTick } from "vue";
import { onMounted } from "vue";
import { ref } from "vue";

function interpolateHexColors(color1: string, color2: string, k: number) {
  function hexToRgb(hex) {
    return hex.match(/[A-Za-z0-9]{2}/g).map(function (v) {
      return parseInt(v, 16);
    });
  }

  function rgbToHex(rgb) {
    return (
      "#" +
      rgb
        .map(function (v) {
          return v.toString(16).padStart(2, "0");
        })
        .join("")
    );
  }

  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);

  const resultRgb = rgb1.map((channel, index) => Math.round(channel + (rgb2[index] - channel) * k));

  return rgbToHex(resultRgb);
}

const props = defineProps({
  backgroundColor: String,
});

const fromColor = "000000#";
const toColor = "000000#";

const color = ref(interpolateHexColors(fromColor, toColor, 0));
const torus1 = ref();
const torus2 = ref();
const torus3 = ref();
const torus4 = ref();

const camera = ref();

const { onLoop } = useRenderLoop();

const target = document.getElementById("app");

function tick() {
  var h = target,
    b = document.body,
    st = "scrollTop",
    sh = "scrollHeight";

  var scrollRatio = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight);

  torus1.value.rotation.y = 10 * scrollRatio;
  torus1.value.rotation.x = 5 * scrollRatio;

  torus2.value.rotation.y = 5 * scrollRatio + 0.5;
  torus2.value.rotation.x = 7 * scrollRatio + 0.5;

  torus3.value.rotation.y = 3 * scrollRatio + 0.23;

  torus4.value.rotation.x = 1.5 * scrollRatio + 0.945;

  color.value = interpolateHexColors(fromColor, toColor, scrollRatio);
  camera.value.fov = 70 + 50 * scrollRatio;
}
target?.addEventListener("scroll", tick);

onMounted(() => {
  nextTick(() => {
    tick();
  });
});
</script>

<template>
  <TresCanvas :clear-color="color" shadows window-size>
    <TresPerspectiveCamera ref="camera" :position="[3, 3, 3]" :look-at="[0, 0, 0]" />

    <TresMesh ref="torus1">
      <TresTorusGeometry :args="[0.7, 0.3, 16, 32]" />
      <TresMeshToonMaterial color="#82DBC5" :wireframe="true" />
    </TresMesh>

    <TresMesh ref="torus2">
      <TresTorusGeometry :args="[1.5, 0.35, 16, 32]" />
      <TresMeshToonMaterial color="#156064" :wireframe="true" />
    </TresMesh>

    <TresMesh ref="torus3">
      <TresTorusGeometry :args="[3, 0.4, 16, 32]" />
      <TresMeshToonMaterial color="#F8E16C" :wireframe="true" />
    </TresMesh>

    <TresMesh ref="torus4">
      <TresTorusGeometry :args="[5, 0.5, 16, 32]" />
      <TresMeshToonMaterial color="#FB8F67" :wireframe="true" />
    </TresMesh>

    <TresDirectionalLight :position="[0, 2, 4]" :intensity="1.2" cast-shadow />
  </TresCanvas>
</template>
