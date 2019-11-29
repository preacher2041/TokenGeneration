import React from 'react';
import ResultsRow from '../../components/ResultsRow';


const ResultsContainer = (reportData) => {
	// The first commit of Material-UI

	const rows = [];

	if(reportData !== null){
		console.log(reportData.reportData);
		reportData.reportData.map((reportDataItem, i) => {
		 rows.push({voucherTypeId: reportDataItem.voucherTypeId, retailerId: reportDataItem.retailerId, count: reportDataItem.count})
		 });
	}

	return (
		<ResultsRow rows={rows}  />
	)
};

export default ResultsContainer;