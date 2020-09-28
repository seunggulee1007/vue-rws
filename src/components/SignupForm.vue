<template>
	<div class="contents">
		<div class="form-wrapper form-wrapper-sm">
			<form class="form">
				<div>
					<label for="userId">id :</label>
					<input type="text" id="userId" v-model="userId" />
				</div>
				<div>
					<label for="password">pw : </label>
					<input type="password" id="password" v-model="password" />
				</div>
				<div>
					<label for="userNm">name : </label>
					<input type="text" id="userNm" v-model="userNm" />
				</div>
				<button type="button" class="btn" @click="join">
					회원가입
				</button>
			</form>
		</div>
	</div>
</template>

<script>
import { registerUser } from '@/api/auth';
export default {
	data() {
		return {
			userId: '',
			password: '',
			userNm: '',
			logMessage: '',
		};
	},
	methods: {
		async join() {
			let res = await registerUser({
				userId: this.userId,
				password: this.password,
				userNm: this.userNm,
			});
			console.log(res);
			alert(res.resultMsg);
			if (res.result == 0) {
				this.$route.push('/main');
			}
		},
		initForm() {
			this.userId = '';
			this.password = '';
			this.userNm = '';
		},
	},
};
</script>

<style></style>
