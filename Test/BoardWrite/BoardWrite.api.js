// Default Store Data

export default [
	{
		name: '글쓰기',
		method: 'POST',
		type: 'mongoDB',
		sendData: {
			documentType: 'board_post',
			data: {
				type: 'store',
				key: 'board_write_data',
			},
		},
	},
	{
		name: '글쓰기',
		method: 'PUT',
		type: 'mongoDB',
		sendData: {
			documentType: 'board_post',
			data: {
				type: 'store',
				key: 'board_write_data',
			},
		},
	},
];
