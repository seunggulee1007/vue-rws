<template>
	<div class="contents">
		<h1 class="page-header">Create Post</h1>
		<div class="form-wrapper">
			<form class="form">
				<div>
					<label for="title"> Ttitle : </label>
					<input type="text" id="title" v-model="title" ref="title" />
				</div>
				<div>
					<label for="contents">Contents:</label>
					<textarea id="contents" v-model="contents" ref="contents" rows="3" />
					<p class="valitation-text warning" v-if="!isContentsValid">
						Text is Too Long
					</p>
				</div>
				<button type="button" @click="regPost()" class="btn">
					등록
				</button>
				<button type="button" @click="goList()" class="btn">
					목록
				</button>
			</form>
		</div>
	</div>
</template>

<script>
import { doPost } from '@/api/post';
import CommonMixin from '@/mixins/commonMixin';
import { mapGetters } from 'vuex';
export default {
	mixins: [CommonMixin],
	data() {
		return {
			title: '',
			contents: '',
		};
	},
	computed: {
		...mapGetters({
			crtId: 'getUserId',
		}),
		isContentsValid() {
			return this.contents.length < 200;
		},
	},
	methods: {
		async regPost() {
			if (!this.title) {
				this.sAlert('제목을 입력해 주세요.');
				this.$refs.title.focus();
				return;
			} else if (!this.contents) {
				this.sAlert('내용을 입력해 주세요.');
				this.$refs.contents.focus();
				return;
			}
			let res = await doPost({
				title: this.title,
				contents: this.contents,
				crtId: this.crtId,
			});
			this.sWarnning(res.resultMsg);
			if (res.result == 0) {
				this.sAlert(res.resultMsg);
				this.$router.push('/main');
			}
		},
		goList() {
			this.$router.go(-1);
		},
	},
};
</script>

<style scoped>
.form-wrapper .form {
	width: 100%;
}
.btn {
	color: white;
}
</style>
