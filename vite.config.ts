import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		port: 5555,
	},
	resolve: {
		alias: {
			app: '/src/app',
			entities: '/src/entities',
			features: '/src/features',
			pages: '/src/pages',
			processes: '/src/processes',
			shared: '/src/shared',
			widgets: '/src/widgets',
		},
	},
});
