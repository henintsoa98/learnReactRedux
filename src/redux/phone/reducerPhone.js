import { BUY_PHONE } from './type'

const initialStatePhone = {
	phones: 5
}

const phoneReducer = (state = initialStatePhone, action) => {
	switch (action.type) {
		case BUY_PHONE:
			return {
				...state,
				phones: state.phones - action.payload
			}
			break;
		default:
			return state 
	}
}

export default phoneReducer