import packageJSON from '../../package.json';
import firebaseConfig from '../../firebase.config.js';

export async function load(event) {
	return {
		package: {
			name: packageJSON.name,
			version: packageJSON.version
		},
		firebaseConfig,
		...event.locals
	};
}
