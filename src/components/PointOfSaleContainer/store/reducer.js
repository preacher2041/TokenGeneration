import {actionTypes} from './actions';

const initialState = {
	retailerData: [],
	productData: [],
};

export const RetailerProductReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.FETCH_RETAILER_DATA:
			return {
				...state,
				dataIsLoading: true
			};
		
		case actionTypes.FETCH_PRODUCT_DATA:
			return {
				...state,
				dataIsLoading: true
			};
		
		default:
			return state;
	}
};