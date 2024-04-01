<!-- <script src="p5.min.js"></script>
<script src="vanta.topology.min.js"></script> -->

<script setup>
import { onMounted } from "vue";

VANTA.TOPOLOGY({
  el: "#Vanta_Topology_Backdrop",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
});

onMounted(() => {
  const theElement = this.$refs.myComponentElement.$el;
  console.log(theElement);
});

console.log("tried");
</script>

<template>
  <div id="Vanta_Topology_Backdrop"></div>
</template>
