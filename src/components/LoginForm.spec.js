// import { sum } from './math';

// // 연관된 테스트 케이스를 그룹화 하는 API
// describe('sum 함수 ', () => {
// 	test('10+20 = 30', () => {
// 		const result = sum(10, 20);
// 		expect(result).toBe(30);
// 	});
// });
import { shallowMount } from '@vue/test-utils';
// import Vue from 'vue';
import LoginForm from './LoginForm.vue';

// describe('LoginForm.vue', () => {
// 	test('컴포넌트가 마운팅 되면 화면에 그려져야 한다', () => {
// 		// const instance = new Vue(LoginForm).$mount();
// 		//expect(instance.userNm).toBe(undefined);
// 		const wrapper = shallowMount(LoginForm);
// 		expect(wrapper.vm.userNm).toBe(undefined);
// 	});
// });

describe('LoginForm.vue', () => {
	test('ID는 이메일 형식이어야 한다.', () => {
		const wrapper = shallowMount(LoginForm, {
			data() {
				return {
					userId: 'test@a.com',
				};
			},
		});
		const idInput = wrapper.find('#userId');
		console.log(idInput.element.value);
		console.log(idInput.html());
		console.log(wrapper.vm.isIdValid);
	});

	test('Id와 PW가 입력되지 않으면 로그인 버튼이 비활성화 된다.', () => {
		const wrapper = shallowMount(LoginForm, {
			data() {
				return {
					userid: '',
					password: '',
				};
			},
		});
		const button = wrapper.find('button');
		expect(button.element.disabled).toBeTruthy();
	});
});
