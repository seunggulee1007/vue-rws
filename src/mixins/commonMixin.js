export default {
	created() {
		console.log('created');
	},
	methods: {
		// 전역 알림 창
		sAlert(text, title, confirmButtonText) {
			title = title ? title : '알림';

			text = text ? text : '';
			confirmButtonText = confirmButtonText ? confirmButtonText : '확인';

			this.$swal({
				title,
				text,
				confirmButtonText,
				icon: 'info',
			});
		},
		// 전역 경고창
		sWarnning(text, title, confirmButtonText) {
			title = title ? title : '경고';
			text = text ? text : '';
			confirmButtonText = confirmButtonText ? confirmButtonText : '확인';
			this.$swal({
				title,
				text,
				confirmButtonText,
				icon: 'warning',
			});
		},
		// 전역 확인 창
		async sConfirm(text, param) {
			let params = {};
			// 파라미터로 온 값들을 세팅
			for (let data in param) {
				params.append(data, param[data]);
			}
			// 내용 세팅
			if (text) {
				params.title = text;
			}

			// 취소 버튼
			params.showCancelButton = true;
			// 확인 버튼에 텍스트 내용이 없다면 '예'로 초기화
			if (!params.confirmButtonText) {
				params.confirmButtonText = '예';
			}
			if (!params.cancelButtonText) {
				params.cancelButtonText = '아니오';
			}
			return await this.$swal(params).then(result => {
				return result.isConfirmed;
			});
		},
	},
};
