<template lang="">
  <div id="article_main" v-html="article"></div>
</template>
<script lang="ts" setup>
import { marked } from "marked";
import { useRouter, useRoute } from "vue-router";
import DOMPurify from "dompurify";
import { onMounted, ref, nextTick } from "vue";
import { text } from "stream/consumers";
import { element } from "three/examples/jsm/nodes/Nodes.js";

const router = useRouter();
const route = useRoute();

console.log(route.params.articleName);

const articleLoaded = ref(false);
const article = ref("");

async function fetchArticleFromMD(path: string): Promise<string> {
  const response = await fetch(path);
  const text = await response.text();
  return await DOMPurify.sanitize(marked.parse(text));
}

onMounted(async () => {
  console.log("mounting");
  fetchArticleFromMD(`/VueProject/${route.params.articleName}.md`).then((res) => {
    articleLoaded.value = true;
    article.value = res;
    nextTick(() => {
      const main = document.getElementById("article_main");
      if (!main) {
        console.error("Missing Article Main Component");
        return;
      }
      const headers = main.getElementsByTagName("h1");
      console.log(headers);
      for (let element of headers) {
        element.classList.add("py-5");
      }
    });
    console.log(res);
  });
});
</script>
<style lang=""></style>
