import {put, takeEvery} from 'redux-saga/effects';
import { actionTypes } from './actions';

function* fetchApplicationData() {
	try {
		const result = yield fetch( './data/applicationData.json')
			.then(response => response.json());
		
		yield put ({
			type: actionTypes.FETCH_APPLICATION_DATA_SUCCESS,
			result
		})
	} catch(e) {
		const errorMessage = {code: e.code, message: e.message};
		yield put({
			type: actionTypes.FETCH_APPLICATION_DATA_FAILURE,
			errorMessage
		});
	}
}

function* retailerProductSaga() {
	yield takeEvery(actionTypes.FETCH_APPLICATION_DATA, fetchApplicationData);
}

export default retailerProductSaga;