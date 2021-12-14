import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import CreateContact from "../views/CreateContact.vue";
import ContactDetail from "../views/ContactDetail.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/contact/create",
    name: "CreateContact",
    component: CreateContact,
  },
  {
    path: "/contact/:id",
    name: "ContactDetail",
    component: ContactDetail,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
