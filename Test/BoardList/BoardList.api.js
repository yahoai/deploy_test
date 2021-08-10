// Default Store Data

export default [
	{
		name: '게시글 불러오기',
		method: 'GET',
		type: 'mongoDB',
		sendData: {
			documentType: 'board_post',
			page: { type: 'store', key: 'board_page' },
			count: 10,
			offset: { type: 'store', key: 'board_offset' },
		},
		sort: [{ createdat: 'desc' }],
		connectStoreData: 'board_list_data',
	},
	{
		name: '게시글 검색',
		method: 'GET',
		type: 'mongoDB',
		sendData: {
			documentType: 'board_post',
			page: 'board_page',
			count: 10,
		},

		filter: [['eq', 'title', { type: 'store', key: 'board_search_keyword' }]],
		sort: [{ createdat: 'desc' }],

		connectStoreData: 'board_list_data',
	},
	{
		name: '게시글 삭제',
		method: 'DELETE',
		type: 'mongoDB',
		sendData: {
			documentType: 'board_post',
			id: { type: 'store', key: 'board_chcked_id' },
		},
	},
];
