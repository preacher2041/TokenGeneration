import React from 'react';
import {connect} from 'react-redux';
import QueryFilterContainer from './QueryFilterContainer';
import {fetchReportData} from './store/actions';

const QueryFilterRedux = ({fetchReportData}) => {
	return (
		<QueryFilterContainer fetchReportData={fetchReportData}/>
	)
};

const mapDispatchToProps = dispatch => ({
	fetchReportData: (selectedDateFrom, selectedDateTo) => dispatch(fetchReportData(selectedDateFrom, selectedDateTo))
});


export default connect(null, mapDispatchToProps)(QueryFilterRedux);