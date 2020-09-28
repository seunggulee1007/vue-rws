<template>
	<nav class="gnb" :class="{ on: !subMenu }">
		<button type="button" class="btClose" @click="closeMenu">
			<i>닫기</i>
		</button>
		<span class="wrap">
			<ul>
				<li v-for="firstMenu in menuList" :key="firstMenu.menuId">
					<p class="bm" @click="firstMenu.openFlag = !firstMenu.openFlag" :class="{ on: firstMenu.openFlag }">
						<i>{{ firstMenu.menuNm }}</i>
					</p>
					<transition name="slide">
						<!-- secondMenu Start-->
						<ul v-if="firstMenu.openFlag">
							<!-- secondMenu has child-->
							<template v-if="firstMenu.child.length > 0">
								<li v-for="secondMenu in firstMenu.child" :key="secondMenu.menuId">
									<template v-if="secondMenu.child.length > 0">
										<p
											class="mm drop"
											@click="secondMenu.openFlag = !secondMenu.openFlag"
											:class="{
												on: secondMenu.openFlag,
											}"
										>
											{{ secondMenu.menuNm }}
										</p>
										<div class="sub" v-if="secondMenu.openFlag">
											<router-link
												:to="thirdMenu.pageUrl"
												v-for="thirdMenu in secondMenu.child"
												:key="thirdMenu.menuId"
												class="sm"
												><i>{{ thirdMenu.menuNm }}</i></router-link
											>
										</div>
									</template>
									<template v-else>
										<router-link :to="secondMenu.pageUrl" class="mm"
											><i>{{ secondMenu.menuNm }}</i></router-link
										>
									</template>
								</li>
							</template>
							<!-- secondMenu hasn't child -->
							<template v-else>
								<li>
									<router-link :to="secondMenu.pageUrl">{{ secondMenu.pageNm }}</router-link>
								</li>
							</template>
						</ul>
					</transition>
					<!-- secondMenu end-->
				</li>
			</ul>
		</span>
	</nav>
</template>

<script>
export default {
	props: ['subMenu'],
	data() {
		return {
			menuList: [
				{
					menuId: 1,
					menuNm: '영업 CRM',
					openFlag: false,
					child: [
						{
							menuId: 100,
							menuNm: '고객관리',
							openFlag: false,
							child: [
								{
									menuId: 1000,
									menuNm: '고객정보등록',
									pageUrl: '',
									child: [],
								},
								{
									menuId: 1001,
									menuNm: '고객정보현황',
									pageUrl: '',
									child: [],
								},
							],
						},
						{
							menuId: 101,
							menuNm: '영업기회',
							openFlag: false,
							child: [
								{
									menuId: 1010,
									menuNm: '영업기회등록',
									pageUrl: '',
									child: [],
								},
								{
									menuId: 1011,
									menuNm: '영업기회현황',
									pageUrl: '',
									child: [],
								},
							],
						},
						{
							menuId: 102,
							menuNm: '영업활동',
							openFlag: false,
							child: [
								{
									menuId: 1020,
									menuNm: '영업방문 일정등록',
									pageUrl: '',
									child: [],
								},
								{
									menuId: 1021,
									menuNm: '영업방문 일정조회',
									pageUrl: '',
									child: [],
								},
								{
									menuId: 1022,
									menuNm: '영업활동 결과등록',
									pageUrl: '',
									child: [],
								},
								{
									menuId: 1023,
									menuNm: '영업활동 결과현황',
									pageUrl: '',
									child: [],
								},
							],
						},
					],
				},
				{
					menuId: 2,
					menuNm: '유연근무',
					openFlag: false,
					child: [
						{
							menuId: 200,
							menuNm: '근무계획조회',
							pageUrl: '/flexible/workPlan',
							child: [],
						},
						{
							menuId: 201,
							menuNm: '유연근무설정',
							pageUrl: '/flexible/setWorkPlan',
							child: [],
						},
						{
							menuId: 202,
							menuNm: '유연근무등록',
							pageUrl: '/flexible/regWorkPlan',
							child: [],
						},
						{
							menuId: 203,
							menuNm: '근무계획변경',
							pageUrl: '',
							child: [],
						},
						{
							menuId: 204,
							menuNm: '근태관리',
							openFlag: false,
							child: [
								{
									menuId: 2040,
									menuNm: '연장/휴일근무 신청',
									pageUrl: '',
									child: [],
								},
								{
									menuId: 2041,
									menuNm: '출/퇴근등록',
									pageUrl: '',
									child: [],
								},
								{
									menuId: 2042,
									menuNm: '휴가신청',
									pageUrl: '',
									child: [],
								},
								{
									menuId: 2043,
									menuNm: '외근신청',
									pageUrl: '',
									child: [],
								},
								{
									menuId: 2044,
									menuNm: '출장신청',
									pageUrl: '',
									child: [],
								},
							],
						},
						{
							menuId: 205,
							menuNm: '승인처리',
							pageUrl: '',
							child: [],
						},
					],
				},
			],
		};
	},
	methods: {
		closeMenu() {
			this.$emit('closeMenu');
		},
	},
};
</script>

<style scoped>
nav.gnb li > ul {
	display: block;
}
nav.gnb .sub {
	display: block;
}
.slide-leave-active {
	-moz-transition-duration: 0.3s;
	-webkit-transition-duration: 0.3s;
	-o-transition-duration: 0.3s;
	transition-duration: 0.3s;
	-moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
	-webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
	-o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
	transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.slide-enter-to,
.slide-leave {
	max-height: 100px;
	overflow: hidden;
}

.slide-enter,
.slide-leave-to {
	overflow: hidden;
	max-height: 0;
}
</style>
