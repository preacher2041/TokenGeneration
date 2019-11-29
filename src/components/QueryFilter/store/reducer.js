import {actionTypes} from './actions';

const initialState = {
	reportData: [],
};

export const ReportingReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.FETCH_REPORT_DATA:
			return {
				...state,
				dataIsLoading: true
			};
		
		case actionTypes.FETCH_REPORT_DATA_SUCCESS:
			const reportData = action.result;
			
			return {
				...state,
				dataIsLoading: false,
				reportData: reportData,
			};
		
		default:
			return state;
	}
};