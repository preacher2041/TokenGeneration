import {put, takeEvery} from 'redux-saga/effects';
import { actionTypes } from './actions';

function* postTokenData() {
	try {
		const url = 'https://lpm7jw3h9f.execute-api.eu-west-1.amazonaws.com/dev/vouchers/';
		const data = {
			"typeId": "SCEE-XX-S0035764",
			"retailerId": "PAM"
		};
		const result = yield fetch( url, {
			method: 'POST',
			mode: 'no-cors',
			body: JSON.stringify(data)
		})
			.then(response => response.json());
		
		yield put ({
			type: actionTypes.POST_TOKEN_DATA_SUCCESS,
			result
		})
	} catch(e) {
		const errorMessage = {code: e.code, message: e.message};
		yield put({
			type: actionTypes.POST_TOKEN_DATA_FAILURE,
			errorMessage
		});
	}
}

function* tokenSaga() {
	yield takeEvery(actionTypes.POST_TOKEN_DATA, postTokenData);
}

export default tokenSaga;