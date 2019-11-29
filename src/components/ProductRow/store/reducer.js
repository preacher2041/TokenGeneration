import {actionTypes} from './actions';

const initialState = {
	tokenData: [],
};

export const TokenReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.POST_TOKEN_DATA:
			return {
				...state,
				dataIsLoading: true
			};
		
		case actionTypes.POST_TOKEN_DATA_SUCCESS:
			const tokenData = action.result.tokenData;
			
			return {
				...state,
				dataIsLoading: false,
				tokenData: tokenData
			};
		
		default:
			return state;
	}
};