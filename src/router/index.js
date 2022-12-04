import { createRouter, createWebHistory } from "vue-router";
import DriverWelcome from '../views/DriverWelcome.vue'
import DriverHome from '../views/DriverHome.vue'
import DriverLogin from '../views/DriverLogin.vue'
import LocatorView from '../views/LocatorView.vue'
import AppointmentView from '../views/AppointmentView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "welcome",
      component: DriverWelcome,
    },
      {
      path: "/login",
      name: "login",
      component: DriverLogin,
    },
    {
      path: '/home',
      name: 'driver-home',
      component: DriverHome
    },
    {
      path: '/appointment',
      name: 'appointment',
      component: AppointmentView
    },
    {
      path: '/locator',
      name: 'dealer-locator',
      component: LocatorView
    }
  ],
});

export default router;
