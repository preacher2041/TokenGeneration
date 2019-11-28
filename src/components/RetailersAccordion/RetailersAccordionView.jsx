import React from 'react';
import {styles} from './RetailersAccordionStyles';
import {withStyles, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography} from '@material-ui/core';
import {ExpandMore} from '@material-ui/icons';

import ProductContainer from '../ProductContainer';

const RetailersAccordionView = ({expanded, handleChange}) => (
	<div className={styles.root}>
		<ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
			<ExpansionPanelSummary
				expandIcon={<ExpandMore />}
				aria-controls="panel1bh-content"
				id="panel1bh-header"
			>
				<Typography className={styles.heading}>Retailer 1</Typography>
			</ExpansionPanelSummary>
			<ExpansionPanelDetails>
				<ProductContainer productName={'product1'} productPrice={10.99}/>
			</ExpansionPanelDetails>
		</ExpansionPanel>
		<ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
			<ExpansionPanelSummary
				expandIcon={<ExpandMore />}
				aria-controls="panel2bh-content"
				id="panel2bh-header"
			>
				<Typography className={styles.heading}>Retailer 2</Typography>
			</ExpansionPanelSummary>
			<ExpansionPanelDetails>
				<ProductContainer productName={'product2'} productPrice={10.99}/>
			</ExpansionPanelDetails>
		</ExpansionPanel>
		<ExpansionPanel expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
			<ExpansionPanelSummary
				expandIcon={<ExpandMore />}
				aria-controls="panel3bh-content"
				id="panel3bh-header"
			>
				<Typography className={styles.heading}>Retailer 3</Typography>
			</ExpansionPanelSummary>
			<ExpansionPanelDetails>
				<ProductContainer productName={'product3'} productPrice={10.99}/>
			</ExpansionPanelDetails>
		</ExpansionPanel>
		<ExpansionPanel expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
			<ExpansionPanelSummary
				expandIcon={<ExpandMore />}
				aria-controls="panel4bh-content"
				id="panel4bh-header"
			>
				<Typography className={styles.heading}>Retailer 4</Typography>
			</ExpansionPanelSummary>
			<ExpansionPanelDetails>
				<ProductContainer productName={'product4'} productPrice={10.99}/>
			</ExpansionPanelDetails>
		</ExpansionPanel>
	</div>
);

export default withStyles(styles)(RetailersAccordionView);