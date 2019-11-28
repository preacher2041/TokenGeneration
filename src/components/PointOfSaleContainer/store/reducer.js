import {actionTypes} from './actions';

const initialState = {
	retailerData: [],
	productData: [],
};

export const RetailerProductReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.FETCH_APPLICATION_DATA:
			return {
				...state,
				dataIsLoading: true
			};
		
		case actionTypes.FETCH_APPLICATION_DATA_SUCCESS:
			const applicationData = action.result.applicationData;
			
			return {
				...state,
				dataIsLoading: false,
				retailerData: applicationData.retailerData,
				productData: applicationData.productData
			};
		
		default:
			return state;
	}
};