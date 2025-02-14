import { BUY_TV } from './type'

const initialStateTv = {
	tv: 5
}

const tvReducer = (state = initialStateTv, action) => {
	switch (action.type) {
		case BUY_TV:
			return {
				...state,
				tv: state.tv - 1
			}
			break;
		default:
			return state 
	}
}

export default tvReducer