import {put, takeEvery} from 'redux-saga/effects';
import { actionTypes } from './actions';

function* fetchRetailerData() {
	try {
		const result = yield fetch( './data/retailerData.json')
			.then(response => response.json());
		
		yield put ({
			type: actionTypes.FETCH_RETAILER_DATA_SUCCESS,
			result
		})
	} catch(e) {
		const errorMessage = {code: e.code, message: e.message};
		yield put({
			type: actionTypes.FETCH_RETAILER_DATA_FAILURE,
			errorMessage
		});
	}
}

function* fetchProductData() {
	try {
		const result = yield fetch( './data/productData.json')
			.then(response => response.json());
		
		yield put ({
			type: actionTypes.FETCH_PRODUCT_DATA_SUCCESS,
			result
		})
	} catch(e) {
		const errorMessage = {code: e.code, message: e.message};
		yield put({
			type: actionTypes.FETCH_PRODUCT_DATA_FAILURE,
			errorMessage
		});
	}
}

function* retailerProductSaga() {
	yield takeEvery(actionTypes.FETCH_RETAILER_DATA, fetchRetailerData);
	yield takeEvery(actionTypes.FETCH_PRODUCT_DATA, fetchProductData)
}

export default retailerProductSaga;