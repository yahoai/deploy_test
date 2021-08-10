import React from 'react';
//상수를 위한 파일 임포트
export default {
	props: {
		isPagination: {
			type: 'bool',
			defaultValue: true,
			description: '페이지네이션 유무',
			propsType: 'view',
		},
		paginationPosition: {
			type: 'select',
			defaultValue: '',
			description: '페이지네이션 위치',
			options: [
				{ label: '좌측', value: 'left' },
				{ label: '가운데', value: 'cetner' },
				{ label: '우측', value: 'right' },
			],
			propsType: 'view',
		},
		isWriteBtn: {
			type: 'bool',
			defaultValue: true,
			description: '글쓰기 버튼 유무',
			propsType: 'view',
		},
		isDeleteBtn: {
			type: 'bool',
			defaultValue: true,
			description: '삭제 버튼 유무',
			propsType: 'view',
		},
		isItemCheckbox: {
			type: 'bool',
			defaultValue: true,
			description: '아이템별 체크박스 유무',
			propsType: 'view',
		},
		listData: {
			type: 'array',
			defaultValue: [],
			description: '게시판 리스트 데이터',
			propsType: 'data',
		},
	},
	event: {
		onClickWriteBtn: null,
		onClickPageBtn: {
			page: '클릭된 페이지',
			pageOffset: '페이지 offset',
		},
		onClickDeleteBtn: {
			ids: '삭제될 아이디들',
		},
		onClickItem: {
			id: '클릭된 아이템 아이디',
		},
	},
};
