<template>
	<li>
		<div class="post-title">
			{{ post.title }}
		</div>
		<div class="post-contents">
			{{ post.contents }}
		</div>
		<div class="post-time">
			{{ post.crtDtm | formatDate }}
			<i class="icon ion-md-create" @click="routeEditPage(post.postId)"></i>
			<i class="icon ion-md-trash" @click="deletePost(post.postId)"></i>
		</div>
	</li>
</template>

<script>
import { deletePost } from '@/api/post';
export default {
	props: {
		post: {
			type: Object,
			required: true,
		},
	},
	methods: {
		async deletePost(postId) {
			if (confirm('정말로 삭제 하시겠습니까?')) {
				let res = await deletePost(postId);
				alert(res.resultMsg);
				if (res.result == 0) {
					this.$emit('refresh');
				}
			}
		},
		routeEditPage(postId) {
			this.$router.push(`/post/${postId}`);
		},
	},
};
</script>

<style></style>
