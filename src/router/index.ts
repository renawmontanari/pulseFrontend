import CollaboratorsView from "@/views/CollaboratorsView.vue";
import DashboardPulse from "@/views/DashboardPulse.vue";
import LoginDashboard from "@/views/LoginDashboard.vue";
import PulsebacksView from "@/views/PulsebacksView.vue";
import ProfilePulselover from "@/views/ProfilePulselover.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "logindashboard",
      component: LoginDashboard,
    },
    {
      path: "/dashboardpulse",
      name: "DashboardPulse",
      component: DashboardPulse,
      meta: {
        requiredAuth: true,
      },
    },
    {
      path: "/collaborators",
      name: "CollaboratorsView",
      component: CollaboratorsView,
      meta: {
        requiredAuth: true,
      },
    },
    {
      path: "/pulsebacks",
      name: "PulsebacksView",
      component: PulsebacksView,
      meta: {
        requiredAuth: true,
      },
    },
    {
      path: "/profilepulse",
      name: "ProfilePulse",
      component: ProfilePulselover,
      meta: {
        requiredAuth: true,
      },
    },
  ],
});

export default router;
