import React from 'react';
import {Switch, Route, NavLink} from 'react-router-dom';
import PointOfSalePageView from './pages/PointOfSale';
import ReportsPageView from './pages/Reports';

// Renders the root component
export const App = () => {
	return (
		<div>
			<NavLink
				to="/point-of-sale">
				Point of Sale
			</NavLink>
			<NavLink
				to="/reports">
				Reports
			</NavLink>
			<React.Fragment>
				<Switch>
				<Route exact path="/point-of-sale" render={props => <PointOfSalePageView {...props} />} />
				<Route path="/reports" render={props => <ReportsPageView {...props} />} />
			</Switch>
			</React.Fragment>
		</div>
	)
};