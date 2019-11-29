import {put, takeEvery} from 'redux-saga/effects';
import { actionTypes } from './actions';

function* fetchReportData(action) {
	try {
		const targetUrl = 'https://lpm7jw3h9f.execute-api.eu-west-1.amazonaws.com/dev/graphql';
		const data = JSON.stringify({"query": "{ getReport(fromCreationDate: \"" + action.selectedDateFrom + "\", toCreationDate:\"" + action.selectedDateTo + "\")  }"});
		console.log('Data: ', data);
		const result = yield fetch( targetUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'cache-control': 'no-cache'
			},
			body: data
		})
			.then(response => response.json());
		
		yield put ({
			type: actionTypes.FETCH_REPORT_DATA_SUCCESS,
			result
		})
	} catch(e) {
		const errorMessage = {code: e.code, message: e.message};
		yield put({
			type: actionTypes.FETCH_REPORT_DATA_FAILURE,
			errorMessage
		});
	}
}

function* reportingSaga() {
	yield takeEvery(actionTypes.FETCH_REPORT_DATA, fetchReportData);
}

export default reportingSaga;