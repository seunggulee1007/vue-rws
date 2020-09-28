<template>
	<div class="contents">
		<div class="form-wrapper form-wrapper-sm">
			<form class="form">
				<div>
					<label for="userId">id :</label>
					<input type="text" id="userId" v-model="userId" ref="userId" @keyup.enter="login" />
				</div>
				<div>
					<label for="password">pw : </label>
					<input type="password" id="password" v-model="password" ref="password" @keyup.enter="login" />
				</div>
				<button type="button" @click="login" class="btn">
					로그인
				</button>
				<p class="log">{{ logMessage }}</p>
			</form>
		</div>
	</div>
</template>

<script>
import { validateEmail } from '@/utils/validation';
import CommonMixin from '@/mixins/commonMixin';
import { mapActions } from 'vuex';

export default {
	mixins: [CommonMixin],
	data() {
		return {
			userId: '',
			password: '',
			logMessage: '',
		};
	},
	computed: {
		isIdValid() {
			return validateEmail(this.userId);
		},
	},
	methods: {
		...mapActions(['LOGIN']),
		async login() {
			// if (!(await this.sConfirm('등록하시겠습니까?'))) {
			// 	return;
			// }
			if (!this.userId) {
				this.sAlert('알림', '아이디를 입력해 주세요', '확인');
				this.$refs.userId.focus();
				return;
			} else if (!this.password) {
				this.sAlert('비밀번호를 입력해 주세요');
				this.$refs.password.focus();
				return;
			}
			const params = {
				userId: this.userId,
				password: this.password,
			};
			try {
				let res = await this.LOGIN(params);
				if (res.result == 0) {
					this.$router.push('/flexible/workPlan');
				} else {
					this.sAlert(res.resultMsg);
				}
			} catch (e) {
				this.logMessage = e.response.data.resultMsg;
			}
		},
	},
};
</script>

<style>
.btn {
	color: white !important;
}
</style>
