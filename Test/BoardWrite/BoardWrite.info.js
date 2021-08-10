import React from 'react';
//상수를 위한 파일 임포트
export default {
	props: {
		isImageUpdated: {
			type: 'bool',
			defaultValue: true,
			description: '이미지 업로드 유무',
			propsType: 'view',
		},
		formData: {
			type: 'checkbox',
			defaultValue: '',
			description: '글쓰기 항목',
			options: [
				{ label: '타이틀', value: 'title' },
				{ label: '서브타이틀', value: 'subTitle' },
				{ label: '내용', value: 'contents' },
				{ label: '이름', value: 'name' },
			],
			propsType: 'view',
		},
	},
	event: {
		onClickAddBtn: {
			data: '글쓰기 데이터',
		},
		onClickCancelBtn: null,
	},
};
