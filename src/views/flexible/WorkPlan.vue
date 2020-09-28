<template>
	<section class="sub flex" :class="{ push: setSection }">
		<span class="wrap">
			<div class="inner">
				<div class="title">
					<h3>근무계획조회</h3>
				</div>

				<div class="my">
					<div class="user">
						<span class="pic"><img src="@/images/profile.png" alt=""/></span>
						<span class="txt"><b>홍길동 과장</b>개발1팀</span>
					</div>
					<ul class="state">
						<li>
							평균 근로시간<i>주<strong>57.3</strong>시간</i><b>기본 160.0시간<em>+34.0시간 연장</em></b>
						</li>
						<li>
							총 근로시간<i>월<strong>194.0</strong>시간</i><b>기본 32.0시간<em>+6.8시간 연장</em></b>
						</li>
						<li>
							잔여연차<i>연<strong>8.5</strong>개</i><b>발생 15.0개<em>-6.5개 사용</em></b>
						</li>
					</ul>
					<div class="btns">
						<button type="button" class="bt bd m">
							근무계획변경
						</button>
						<button type="button" class="bt bd m">
							연장/휴일근무 신청
						</button>
					</div>
				</div>

				<div class="control">
					<button type="button" class="btUser">
						<span
							><i><b>홍길동</b>과장</i><i>개발1팀</i></span
						>
					</button>
				</div>

				<div class="calendar">
					<fullcalendar></fullcalendar>
				</div>
			</div>
			<!--//inner-->
		</span>
	</section>
</template>

<script>
import Fullcalendar from '@/components/common/Fullcalendar.vue';
export default {
	props: ['setSection'],
	components: {
		Fullcalendar,
	},
};
</script>

<style></style>
