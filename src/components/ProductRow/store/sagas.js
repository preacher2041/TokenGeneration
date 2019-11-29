import {put, takeEvery} from 'redux-saga/effects';
import { actionTypes } from './actions';

function* postTokenData(action) {
	try {
		const proxyURL = 'https://cors-anywhere.herokuapp.com/';
		const targetUrl = 'https://lpm7jw3h9f.execute-api.eu-west-1.amazonaws.com/dev/vouchers/';
		const data = JSON.stringify({
			"typeId": action.typeID,
			"retailerId": action.retailerID
		});
		const result = yield fetch( proxyURL + targetUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'cache-control': 'no-cache'
			},
			body: data
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