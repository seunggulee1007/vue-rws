<template>
	<div>
		<app-header @upProps="setProps"></app-header>
		<router-view :setSection="sectionFlag"></router-view>
	</div>
</template>

<script>
import AppHeader from '@/components/common/AppHeader.vue';

export default {
	components: {
		AppHeader,
	},
	data() {
		return {
			sectionFlag: false,
		};
	},
	methods: {
		setProps() {
			this.sectionFlag = !this.sectionFlag;
		},
	},
};
</script>

<style>
/* @import './css/reset.css'; */
@import './css/common.css';
@import './css/style.css';
</style>
