import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
		},
	},
	build: {
		rollupOptions: {
			external: [
				"icon/arrow.svg",
				"img/jpp.svg",
				"logo/tf1.svg",
				"img/temoin.svg",
				"icon/symfony.svg",
				"icon/react.svg",
				"icon/vue.svg",
				"icon/appmobile.svg",
				"icon/arrowRed.svg",
				"icon/burger.svg",
				"icon/centreservice.svg",
				"icon/conseil.svg",
				"icon/cta.svg",
				"icon/design.svg",
				"icon/devweb.svg",
				"icon/ecommerce.svg",
				"icon/innovation.svg",
				"icon/linked.svg",
				"icon/mail.svg",
				"icon/mailwhite.svg",
				"icon/node.svg",
				"icon/presentation.svg",
				"icon/tma.svg",
				"icon/twitter.svg",
				"img/debug.svg",
				"logo/acseo-large.svg",
				"logo/acseo-mini.svg",
			],
		},
	},
});
