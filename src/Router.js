import EmpleadosComponent from "./components/EmpleadosComponent.vue";
import LoginComponent from "./components/LoginComponent.vue";
import { createWebHistory, createRouter } from "vue-router";
import PerfilComponent from "./components/PerfilComponent.vue";

const myRoutes = [
  {
    path: "/", component: LoginComponent
  },
  {
    path: "/empleados", component: EmpleadosComponent
  },
  {
    path: "/perfil", component: PerfilComponent
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes: myRoutes
})

export default router;