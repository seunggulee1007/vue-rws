<template>
	<div>
		<div class="main list-container contents">
			<h1 class="page-header">today I Learned</h1>
			<LoadingSpinner v-if="isLoading"></LoadingSpinner>
			<ul v-else>
				<PostItemList v-for="post in postItems" :key="post.postId" :post="post" @refresh="fetchNotes">
				</PostItemList>
			</ul>
		</div>
		<router-link to="/add" class="create-button">
			+
		</router-link>
	</div>
</template>

<script>
import { fetchPosts } from '@/api/post';
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';
import PostItemList from '@/components/posts/PostListItem.vue';
export default {
	data() {
		return {
			postItems: [],
			isLoading: false,
		};
	},
	created() {
		this.fetchNotes();
	},
	methods: {
		async fetchNotes() {
			this.isLoading = true;
			try {
				console.log(this.$store.state.userId);
				let res = await fetchPosts(this.$store.state.userId);
				console.log(res);
				this.postItems = res.data;
				console.log(this.postItems);
			} catch (err) {
				console.log(err);
			}
			this.isLoading = false;
		},
	},
	components: {
		PostItemList,
		LoadingSpinner,
	},
};
</script>

<style></style>
