import { createRouter, createWebHistory } from 'vue-router'
import ErrorView from "@/views/ErrorView.vue";
import HomeView from "@/views/HomeView.vue";
import ContactView from "@/views/ContactView.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/errorView",
			name: "error",
			component: ErrorView,
		},
		{
			path: "/",
			name: "home",
			component: HomeView,
		},
		{
			path: "/contact",
			name: "contact",
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: ContactView,
		},
	],
});

export default router