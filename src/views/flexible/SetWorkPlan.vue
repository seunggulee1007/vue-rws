<template>
	<section class="sub flex set">
		<span class="wrap">
			<div class="inner">
				<div class="title">
					<h3>유연근무설정</h3>
				</div>

				<ul class="tap">
					<li @click="changeView(1)" :class="{ on: tabView == 1 }"><i>주52시간</i></li>
					<li @click="changeView(2)" :class="{ on: tabView == 2 }"><i>시차 출퇴근제</i></li>
					<li @click="changeView(3)" :class="{ on: tabView == 3 }"><i>선택적 근로제</i></li>
					<li @click="changeView(4)" :class="{ on: tabView == 4 }"><i>탄력 근무제</i></li>
					<li @click="changeView(5)" :class="{ on: tabView == 5 }"><i>재택 근무제</i></li>
				</ul>
				<week-52-hour v-if="tabView == 1"></week-52-hour>
				<time-diff v-if="tabView == 2"></time-diff>
				<choice-work v-if="tabView == 3"></choice-work>
				<flexible-work v-if="tabView == 4"></flexible-work>
				<telecommuting v-if="tabView == 5"></telecommuting>
				<div class="btns">
					<button type="button" class="bt bd s">취소</button>
					<button type="button" class="bt bg m">저장</button>
				</div>
			</div>

			<!--//inner-->
		</span>
	</section>
</template>

<script>
import Week52Hour from '@/components/workPlan/Week52Hour.vue';
import TimeDiff from '@/components/workPlan/TimeDiff.vue';
import ChoiceWork from '@/components/workPlan/ChoiceWork.vue';
import FlexibleWork from '@/components/workPlan/FlexibleWork.vue';
import Telecommuting from '@/components/workPlan/Telecommuting.vue';
export default {
	components: {
		Week52Hour,
		TimeDiff,
		ChoiceWork,
		FlexibleWork,
		Telecommuting,
	},
	data() {
		return {
			tabView: 1,
		};
	},
	methods: {
		changeView(num) {
			this.tabView = num;
		},
	},
};
</script>

<style></style>
