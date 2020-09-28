<template>
	<div>
		<header>
			<span class="wrap">
				<div class="inner" v-if="isUserLogin">
					<h1>
						<a href="/" class="logo">INNO SOFT<mark>RWS</mark></a>
					</h1>
					<button type="button" class="btMenu" :class="{ on: menuOpen }" @click="btnFlag">
						<i>메뉴</i>
					</button>
					<div class="user">
						<button type="button" @click="logoutUser">
							로그아웃
						</button>
						<span class="pic"><!--img src="images/profile.png" alt=""--></span>
						<span class="txt">홍길동</span>
					</div>
					<!--nav class="my">
				<ul>
					<li><a href="">내정보수정</a></li>
					<li><a href="">로그아웃</a></li>
				</ul>
			</nav-->
				</div>
			</span>
		</header>
		<app-navi :subMenu="menuOpen" @closeMenu="menuClose" v-if="isUserLogin"></app-navi>
	</div>
</template>

<script>
import { deleteCookie } from '@/utils/cookies';
import AppNavi from '@/components/common/AppNavi.vue';

export default {
	data() {
		return {
			menuOpen: true,
		};
	},
	components: {
		AppNavi,
	},
	computed: {
		isUserLogin() {
			return this.$store.getters.isLogin;
		},
		logoLink() {
			return this.$store.getters.isLogin ? '/main' : '/login';
		},
	},
	methods: {
		logoutUser() {
			this.$store.commit('clearLoginInfo');
			deleteCookie(process.env.VUE_APP_USER_NM);
			deleteCookie(process.env.VUE_APP_AUTH_TOKEN);
			deleteCookie(process.env.VUE_APP_USER_ID);
			this.$router.push('/login');
		},
		btnFlag() {
			this.menuOpen = !this.menuOpen;
			this.$emit('upProps');
		},
		menuClose() {
			this.menuOpen = true;
		},
	},
};
</script>
