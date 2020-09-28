<template>
	<div class="view2">
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
				<dt class="sure">근무시간</dt>
				<dd>
					<span class="input time term">
						<input type="text" placeholder="시작시간" readonly />
						<input type="text" placeholder="종료시간" readonly />
					</span>
					<i class="infoTxt">총 00 시간</i>
				</dd>
				<dt class="br">
					휴게시간<span class="check switch"
						><input type="checkbox" checked /><label>휴게시간유무</label></span
					>
				</dt>
				<dd>
					<div class="inAdd">
						<ul>
							<li>
								휴게명칭1 AM 00:00~PM 00:00 (총 00 시간)<button type="button" class="btX">
									<i>삭제</i>
								</button>
							</li>
							<li>
								휴게명칭2휴게명칭2 AM 00:00~PM 00:00 (총 00 시간)<button type="button" class="btX">
									<i>삭제</i>
								</button>
							</li>
							<li>
								휴게명칭3 AM 00:00~PM 00:00 (총 00 시간)<button type="button" class="btX">
									<i>삭제</i>
								</button>
							</li>
							<li>
								휴게명칭휴게명칭휴게명칭휴게명칭4 AM 00:00~PM 00:00 (총 00 시간)<button
									type="button"
									class="btX"
								>
									<i>삭제</i>
								</button>
							</li>
							<li>
								휴게명칭1 AM 00:00~PM 00:00 (총 00 시간)<button type="button" class="btX">
									<i>삭제</i>
								</button>
							</li>
							<li>
								휴게명칭2휴게명칭2 AM 00:00~PM 00:00 (총 00 시간)<button type="button" class="btX">
									<i>삭제</i>
								</button>
							</li>
						</ul>
						<span class="add">
							<span class="input"><input type="text" placeholder="휴게명칭"/></span>
							<span class="input time term">
								<input type="text" placeholder="시작시간" />
								<input type="text" placeholder="종료시간" />
							</span>
							<i class="infoTxt">총 00 시간</i>
							<button type="button" class="btPlus"><i>추가</i></button>
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
