import { doAxios } from '@/api/api';
// 학습 노트 데이터 조회
function fetchPosts(id) {
	return doAxios(`/posts/${id}`, 'get');
}

function fetchPost(postId) {
	return doAxios(`/post/${postId}`, 'get');
}

// 학습 노트 데이터 저장
function doPost(data) {
	return doAxios('/post', 'post', data);
}

function deletePost(id) {
	return doAxios(`/post/${id}`, 'delete');
}

function editPost(data) {
	return doAxios('/post', 'put', data);
}

export { fetchPosts, doPost, deletePost, fetchPost, editPost };
