<template>
	<div class="view4">
		<div class="form">
			<dl>
				<dt class="sure">근무적용기간</dt>
				<dd>
					<span class="input day term">
						<input type="text" placeholder="시작일" readonly />
						<input type="text" placeholder="종료일" readonly />
					</span>
					<i class="infoTxt">총 00 일</i>
				</dd>
				<dt class="sure">정산단위기간</dt>
				<dd>
					<span class="select">
						<select>
							<option>단위기간선택</option>
							<option>2주 단위</option>
							<option>1개월 단위</option>
							<option>2개월 단위</option>
							<option>3개월 단위</option>
						</select>
						<label>단위기간선택</label>
					</span>
				</dd>
				<dt class="sure">근무시간</dt>
				<dd>
					<span class="input time term">
						<input type="text" placeholder="시작시간" readonly />
						<input type="text" placeholder="종료시간" readonly />
					</span>
					<i class="infoTxt">총 00 시간</i>
				</dd>
				<dt class="br">
					휴게시간<span class="check switch"><input type="checkbox" /><label>휴게시간유무</label></span>
				</dt>
				<dd>
					<div class="inAdd">
						<ul>
							<li class="noData">등록된 휴게시간이 없습니다.</li>
						</ul>
						<span class="add">
							<span class="input"><input type="text" placeholder="휴게명칭"/></span>
							<span class="input time term">
								<input type="text" placeholder="시작시간" />
								<input type="text" placeholder="종료시간" />
							</span>
							<i class="infoTxt">총 00 시간</i>
							<button type="button" class="btPlus" disabled><i>추가</i></button>
						</span>
					</div>
				</dd>
			</dl>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style></style>
