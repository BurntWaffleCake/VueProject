import "./assets/main.css";

import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import { createApp } from "vue";
import App from "./App.vue";

let app = createApp(App);
app.mount("#app");

import NavBar from "./components/NavBar.vue";
import ThemeToggleButton from "./components/ThemeToggleButton.vue";

app.component("MyComponent", NavBar);
app.component("MyComponent", ThemeToggleButton);
