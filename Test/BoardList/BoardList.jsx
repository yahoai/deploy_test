import React from 'react';

import BasicComponent from '../../../../BasicComponent/BasicComponent';
import { ACTIONS } from '../../../../../../lib/constants/component-constants';
import componentInfo from './BoardList.info';

/**
 * @class Preview
 * @extends {BasicComponent}
 */
class BoardList extends BasicComponent {
	constructor() {
		super();

		//componentInfo 정보 등록 (필수)
		this.componentInfo = componentInfo;

		this.state = {};
	}

	componentDidMount() {
		super.componentDidMount();
	}

	componentDidUpdate(prevProps, prevState) {
		super.componentDidUpdate();
	}

	render() {
		return <div>render</div>;
	}
}

//Class에 componentInfo 정보 등록
BoardList.componentInfo = componentInfo;

export default BoardList;
