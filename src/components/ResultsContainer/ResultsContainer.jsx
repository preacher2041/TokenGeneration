import React from 'react';
import ResultsRow from '../../components/ResultsRow';


const ResultsContainer = ({reportData}) => {
	// The first commit of Material-UI

	const createData = (voucherTypeId, retailerId, count) => {
		return { voucherTypeId, retailerId, count };
	};
	console.log(reportData);

	const rows = [
/*		reportData.map((reportData, i) => {
			createData(reportData)
		}),*/

		createData('SCEE-XX-S0035764', 'AMA', 13),
		createData('SCEE-XX-S0035763', 'TES', 122),
		createData('SCEE-XX-S0035762', 'GAM', 112),
	];
	return (
		<ResultsRow rows={rows}  />
	)
};

export default ResultsContainer;