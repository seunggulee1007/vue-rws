import axios from 'axios';
import { setInterceptors } from '@/api/common/index';
import { deleteCookie } from '@/utils/cookies';
import router from '@/routes/routes';

function createInstance() {
	const instance = axios.create({
		baseURL: process.env.VUE_APP_API_URL,
	});
	return setInterceptors(instance);
}

const instance = createInstance();

function doAxios(url, method, params, config) {
	return instance({
		url,
		method,
		params,
		config,
	})
		.then(({ data }) => {
			return data;
		})
		.catch(error => {
			// 인증 오류라면 메인 페이지로
			if (error.response.status == 401) {
				// 쿠키에서 인증정보 삭제 후
				deleteCookie(process.env.VUE_APP_AUTH_TOKEN);
				router.push('/');
			}
			let res = {
				result: -1,
			};
			if (error.response) {
				res = error.response.data;
				res.status = error.response.status;
			} else if (!error.status) {
				res.resultMsg = '네트워크 연결을 확인해 주세요';
			} else {
				res.data.resultMsg = error.message;
			}
			return res;
		});
}
export { createInstance, doAxios };
