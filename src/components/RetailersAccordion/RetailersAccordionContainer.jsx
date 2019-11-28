import React, {useState, Fragment} from 'react';
import RetailersAccordionView from './RetailersAccordionView';

const RetailerAccordionContainer = ({retailerData}) => {
	const [expanded, setExpanded] = useState(false);
	
	const handleChange = panel => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
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
					handleChange={handleChange}/>
			)
		})}
		</Fragment>
	)
};

export default RetailerAccordionContainer;