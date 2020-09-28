<template>
	<div class="contents">
		<h1 class="page-header">Edit Post</h1>
		<div class="form-wrapper">
			<form class="form">
				<div>
					<label for="title"> Ttitle : </label>
					<input type="text" id="title" v-model="postVO.title" />
				</div>
				<div>
					<label for="contents">Contents:</label>
					<textarea id="contents" v-model="postVO.contents" rows="3" />
					<p class="valitation-text warning" v-if="!isContentsValid">
						Text is Too Long
					</p>
				</div>
				<button type="button" @click="editPost()" class="btn">
					수정
				</button>
			</form>
		</div>
	</div>
</template>

<script>
import { fetchPost, editPost } from '@/api/post';
export default {
	created() {
		const id = this.$route.params.id;
		this.getPost(id);
	},
	data() {
		return {
			postVO: {
				title: '',
				contents: '',
			},
		};
	},
	computed: {
		isContentsValid() {
			return this.postVO.contents.length < 200;
		},
	},
	methods: {
		async getPost(postId) {
			let res = await fetchPost(postId);
			this.postVO = res.data;
		},
		async editPost() {
			let res = await editPost(this.postVO);
			if (res.result == 0) {
				alert(res.resultMsg);
				this.$router.push('/main');
			}
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
