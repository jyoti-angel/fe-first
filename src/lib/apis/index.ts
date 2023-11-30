import http from '$lib/utils/http';
import apis from '$lib/constants/api';

export function getTestData() {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	return http.get<any>(apis.TODOS).then(({ data }) => data);
}
