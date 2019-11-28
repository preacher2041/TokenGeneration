import React, {useState} from 'react';
import RetailersAccordionView from './RetailersAccordionView';

const RetailerAccordionContainer = () => {
	const [expanded, setExpanded] = useState(false);
	
	const handleChange = panel => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};
	
	return (
		<RetailersAccordionView expanded={expanded} handleChange={handleChange}/>
	)
};

export default RetailerAccordionContainer;