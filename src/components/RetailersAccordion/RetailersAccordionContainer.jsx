import React, {useState, Fragment} from 'react';
import RetailersAccordionView from './RetailersAccordionView';
import { Checkbox } from '@material-ui/core';

const RetailerAccordionContainer = ({retailerData}) => {
	const [expanded, setExpanded] = useState(false);
	const [errorHandling, setErrorHandling] = useState({
		errorHandlingEnabled: false
	});
	
	const handleChange = panel => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};
	
	const handleCheckBoxChange = name => event => {
		setErrorHandling({ ...errorHandling, [name]: event.target.checked });
	};
	
	return (
		<Fragment>
		{retailerData.map((accordionData, i) => {
			return (
				<RetailersAccordionView
					key={i}
					index={i}
					accordionData={accordionData}
					expanded={expanded}
					handleChange={handleChange}
					errorHandling={errorHandling}
				/>
			)
		})}
			<Checkbox
				checked={errorHandling.errorHandlingEnabled}
				onChange={handleCheckBoxChange('errorHandlingEnabled')}
				value="errorHandlingEnabled"
				inputProps={{
					'aria-label': 'primary checkbox',
				}}
			/>
		</Fragment>
	)
};

export default RetailerAccordionContainer;