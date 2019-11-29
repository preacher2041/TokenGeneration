import React from 'react';
import {styles} from './RetailersAccordionStyles';
import {withStyles, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography} from '@material-ui/core';
import {ExpandMore} from '@material-ui/icons';

import ProductRow from '../ProductRow';

const RetailersAccordionView = ({index, accordionData, expanded, handleChange}) => (
	<div className={styles.root}>
		<ExpansionPanel expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
			<ExpansionPanelSummary
				expandIcon={<ExpandMore />}
				id="panel1bh-header"
			>
				<Typography className={styles.heading}>{accordionData.retailerName}</Typography>
			</ExpansionPanelSummary>
			<ExpansionPanelDetails>
				<ProductRow
					retailerID={accordionData.retailerID}
				/>
			</ExpansionPanelDetails>
		</ExpansionPanel>
	</div>
);

export default withStyles(styles)(RetailersAccordionView);