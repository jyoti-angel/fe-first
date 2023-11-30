<script lang="ts">
	import '../app.css';
	import { onMount, setContext } from 'svelte';
	import {
		localStorage,
		sessionStorage,
		stores,
		firebase,
		analytics,
		parseJwtClient
	} from 'svelte-library';
	import dayjs from 'dayjs';

	/* Types */
	import type { FirebaseOptions } from 'firebase/app';
	import type { SparkData } from 'svelte-library/dist/types/ISparkStore';
	import { persistedStore } from '$lib/utils';
	import http from '$lib/utils/http';
	import { PUBLIC_ENV_NAME, PUBLIC_PRJALIAS } from '$env/static/public';
	import type { DevicePayload } from 'sveltekit-device-detector/dist/types';
	import type { Environment } from '$lib/types';
	import { getAnalyticsUrl, getPipeTopic, getPlatform } from '$lib/utils/analytics';

	const { sparkStore, deviceStore } = stores;
	const { initFirebase } = firebase;

	type PageData = {
		package: {
			name: string;
			version: string;
		};
		firebaseConfig: FirebaseOptions;
		deviceType: DevicePayload;
		sparkStore: SparkData;
	};

	export let data: PageData;

	onMount(async () => {
		localStorage.init(data.package.name, data.package.version);
		await sessionStorage.init(data.package.name, data.package.version);
		sparkStore.set(persistedStore(data.sparkStore));
		deviceStore.set(data.deviceType as DevicePayload); // need to udate latest lib version
		await initFirebase(data.firebaseConfig); // remove this if not needed
		http.setHeader({ 'Access-Token': stores.sparkStore.nttoken }); // set all headers for CSR calls
		analytics.init({
			baseUrl: getAnalyticsUrl(data.deviceType.isAndroid, PUBLIC_ENV_NAME as Environment),
			initValue: {
				api_dt: dayjs().format('YYYY-MM-DD'),
				api_hr: dayjs().hour(),
				api_min: dayjs().minute(),
				api_timestamp: dayjs().format('YYYY-MM-DD HH:mm:ss.SSS'),
				api_timestamp_unix: dayjs().valueOf(),
				build_release: PUBLIC_ENV_NAME,
				pipe_topic: getPipeTopic(data.deviceType.isAndroid, PUBLIC_ENV_NAME as Environment),
				os_version: data.deviceType.osVersion,
				platform: getPlatform(data.deviceType),
				env: PUBLIC_ENV_NAME,
				client_id: parseJwtClient(sparkStore.nttoken)?.userData?.user_id,
				device_manufacturer: data.deviceType.osName as string,
				device_model: data.deviceType.browserName as string,
				appVersion: stores.sparkStore.platformversion,
				app_version_id: `${PUBLIC_PRJALIAS} ${sparkStore.platformversion}`,
				release_code: '2.0'
			}
		});
	});

	setContext('theme', data?.sparkStore?.theme || 'light') as string;
</script>

<div class={`${data?.sparkStore?.theme || 'light'}`}>
	<slot />
</div>
