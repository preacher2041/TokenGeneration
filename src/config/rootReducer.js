import { combineReducers } from 'redux';

import {RetailerProductReducer} from '../components/PointOfSaleContainer/store/reducer';
import {TokenReducer} from '../components/ProductRow/store/reducer';
import {ReportingReducer} from '../components/QueryFilter/store/reducer';

// Combine the multiple component reducers into one root reducer that returns the application state
export default combineReducers({
	RetailerProductReducer: RetailerProductReducer,
	TokenReducer: TokenReducer,
	ReportingReducer: ReportingReducer,
});