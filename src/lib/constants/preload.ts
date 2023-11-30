import { PUBLIC_PATH } from '$env/static/public';

export const fontsToPreload = [
	{
		path: `${PUBLIC_PATH}/fonts/barlow-normal.woff2`,
		as: 'font',
		type: 'font/woff'
	},
	{
		path: `${PUBLIC_PATH}/fonts/barlow-semibold.woff2`,
		as: 'font',
		type: 'font/woff'
	},
	{
		path: `${PUBLIC_PATH}/fonts/barlow-medium.woff2`,
		as: 'font',
		type: 'font/woff'
	}
];

export const imagesToPreload = [];
