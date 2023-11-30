import { Logger } from 'svelte-library';

const logger = new Logger({
	endpoint: `/log`,
	server: {
		maxTimeoutMs: 0,
		logCount: 1
	},
	client: {
		maxTimeoutMs: 15000,
		logCount: 10
	}
});

logger.init();

export default logger;
