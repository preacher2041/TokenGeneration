import { all } from 'redux-saga/effects';
import RetailerProductSaga from '../components/PointOfSaleContainer/store/sagas'

// Combine sags from each component saga into one master saga
export default function* rootSaga () {
	yield all([
		RetailerProductSaga(),
	]);
}