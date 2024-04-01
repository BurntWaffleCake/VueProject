import "./assets/main.css";

import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import { createMemoryHistory, createRouter } from "vue-router";

import { createApp } from "vue";
import App from "./App.vue";

let app = createApp(App);

// Routing
import HomeView from "./components/Views/HomeView.vue";
import TemplateArticleView from "./components/Views/TemplateArticleView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/Template", component: TemplateArticleView },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

app.use(router);
app.mount("#app");
