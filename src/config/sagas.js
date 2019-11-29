import { all } from 'redux-saga/effects';
import RetailerProductSaga from '../components/PointOfSaleContainer/store/sagas';
import TokenSaga from '../components/ProductRow/store/sagas';
import ReportingSaga from '../components/QueryFilter/store/sagas';

// Combine sags from each component saga into one master saga
export default function* rootSaga () {
	yield all([
		RetailerProductSaga(),
		TokenSaga(),
		ReportingSaga(),
	]);
}