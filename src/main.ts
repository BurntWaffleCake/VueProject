import "./assets/main.css";

import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import { createApp } from "vue";
import App from "./App.vue";

let app = createApp(App);

//components
import HomeView from "./components/views/HomeView.vue";
import AboutMeView from "./components/views/AboutMeView.vue";

import NavBar from "./components/utility/NavBar.vue";
import FooterComp from "./components/utility/FooterComp.vue";
import ToPageTopButton from "./components/utility/ToPageTopButton.vue";

import ArticleHeader from "./components/Articles/ArticleHeader.vue";
import ArticleMainNav from "./components/Articles/ArticleMainNav.vue";
import ArticleNavLink from "./components/Articles/ArticleNavLink.vue";
import ArticleNavSection from "./components/Articles/ArticleNavSection.vue";

import ArticleView from "./components/views/ArticleView.vue";
import PhysicsView from "./components/views/article/Physics/PhysicsView.vue";

//views
app.component("HomeView", HomeView);
app.component("AboutMeView", AboutMeView);
app.component("ArticleView", ArticleView);

app.component("NavBar", NavBar);
app.component("FooterComp", FooterComp);
app.component("ToPageTopButton", ToPageTopButton);

app.component("ArticleHeader", ArticleHeader);
app.component("ArticleMainNav", ArticleMainNav);
app.component("ArticleNavLink", ArticleNavLink);
app.component("ArticleNavSection", ArticleNavSection);

// Routing
import { createWebHistory, createRouter } from "vue-router";

const routes = [
  { path: "/", component: HomeView },
  { path: "/AboutMe", component: AboutMeView },
  {
    path: "/Article",
    children: [
      {
        path: "",
        component: ArticleView,
      },
      {
        path: "Physics",
        component: PhysicsView,
      },
    ],
  },
  { path: "/Article/Algorithms", component: ArticleView },
  { path: "/Article/Graphics", component: ArticleView },
];

const router = createRouter({
  history: createWebHistory("/VueProject/"),
  routes,
});

app.use(router);

//Motion
import { MotionPlugin } from "@vueuse/motion";
app.use(MotionPlugin);

app.mount("#app");
