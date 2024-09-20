import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Dashboard from "../views/Dashboard.vue";
import Profile from "../views/Profile.vue";
import Contact from "../views/Contact.vue";
import Portofolio from "../views/Portofolio.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/dashboard", component: Dashboard },
  { path: "/profile", component: Profile },
  { path: "/contact", component: Contact },
  { path: "/portofolio", component: Portofolio },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: "smooth" }; // Scroll ke atas dengan behavior smooth
  },
});

export default router;
