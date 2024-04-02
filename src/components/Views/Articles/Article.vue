<template lang="">
  <div class="container-fluid flex-grow-1 h-100">
    <div class="row h-100">
      <div class="col d-none d-lg-block col-lg-3 h-100 bg-danger"></div>
      <div class="col col-12 col-lg-6 h-100 bg-primary">
        <div class="w-100 h-100" id="article_main" v-html="articleHtml"></div>
      </div>
      <div class="col d-none d-lg-block col-lg-3 h-100 bg-wark"></div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { marked } from "marked";
import { useRouter, useRoute } from "vue-router";
import DOMPurify from "dompurify";
import { onMounted, ref, nextTick } from "vue";

const router = useRouter();
const route = useRoute();

console.log(route.params.articleName);

const articleLoaded = ref(false);
let articleDocument: ArticleDocument | undefined = undefined;
const articleHtml = ref("");

class ArticleDocument {
  markdown: string;
  metadata: { [field: string]: any };
  constructor(markdown: string, fields: { [field: string]: any }) {
    this.markdown = markdown;
    this.metadata = fields;
  }
}

async function fetchArticle(path: string): Promise<string> {
  const response = await fetch(path);
  const text = await response.text();
  return text;
  // return await DOMPurify.sanitize(marked.parse(text));
}

function convertToTypeOf(type: string, input: string): any {
  switch (type) {
    case "string":
      return String(input);
    case "number":
      return Number(input);
    default:
      return undefined;
  }
}

function parseRawMarkdown(md: string): ArticleDocument | undefined {
  console.log("attempting to parse markdown");
  const lines = md.split("\n");
  let commandLines = 0;
  let valid = false;
  const data: { [any: string]: any } = {};

  for (let i = 0; i < lines.length; i++) {
    let currentLine = lines[i];
    if (currentLine.charAt(0) != "&") {
      if (!valid) {
        return undefined;
      }
      continue;
    }
    currentLine = currentLine.replace(/\s/g, ""); // remove whitespace

    valid = true;
    commandLines += 1;
    const tokens = currentLine.slice(1, currentLine.length).split(":");
    const label = tokens[0];
    const type = tokens[1];
    const value = convertToTypeOf(type, tokens[2]);
    if (!value) continue;
    data[label] = value;
  }
  return new ArticleDocument(lines.slice(commandLines, lines.length).join(""), data);
}

function renderDocument(document: ArticleDocument) {
  articleLoaded.value = true;
  articleDocument = document;
  articleHtml.value = DOMPurify.sanitize(marked.parse(document.markdown));
}

function afterInsert() {
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
}

onMounted(async () => {
  const article: string = await fetchArticle(`${router.options.history.base}/articleMarkdown/${route.params.articleName}.md`);
  const articleDocument = parseRawMarkdown(article);
  if (articleDocument) {
    renderDocument(articleDocument);
    afterInsert();
  }
});
</script>
<style lang=""></style>
