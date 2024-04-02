import "./assets/main.css";

import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import { createApp } from "vue";
import App from "./App.vue";

let app = createApp(App);

// Routing
import { createWebHistory, createRouter } from "vue-router";

import HomeView from "./components/Views/HomeView.vue";
import TemplateArticleView from "./components/Views/TemplateArticleView.vue";
import AboutMeView from "./components/Views/AboutMeView.vue";
// import ArticleView from "./components/Views/Articles/Article.vue";

import { defineAsyncComponent } from "vue";

// const ArticleView = defineAsyncComponent(() => import("./components/Views/Articles/Article.vue"));

const routes = [
  { path: "/", component: HomeView },
  { path: "/Template", component: TemplateArticleView },
  { path: "/AboutMe", component: AboutMeView },
  { path: "/Article/:articleName?", component: defineAsyncComponent({ loader: () => import("./components/Views/Articles/Article.vue") }) },
];

const router = createRouter({
  history: createWebHistory("/VueProject/"),
  routes,
});

app.use(router);
app.mount("#app");
