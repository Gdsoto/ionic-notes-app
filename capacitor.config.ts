import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
	appId: 'com.example.app',
	appName: 'PetsApp',
	webDir: 'build',
	bundledWebRuntime: false,
	server: {
		androidScheme: 'http',
		allowNavigation: ['http://127.0.0.1:8000/api'],
		cleartext: true,
	},
};

export default config;
