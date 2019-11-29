import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import PointOfSaleContainerView from './PointOfSaleContainerView';
import { fetchApplicationData } from './store/actions';

const PointOfSaleContainerRedux = ({fetchApplicationData}) => {
	useEffect(() => {
		fetchApplicationData();
		// eslint-disable-next-line
	}, []);
	
	return (
		<PointOfSaleContainerView/>
	)
};

const mapDispatchToProps = dispatch => ({
	fetchApplicationData: () => dispatch(fetchApplicationData()),
});

export default connect(null, mapDispatchToProps)(PointOfSaleContainerRedux);