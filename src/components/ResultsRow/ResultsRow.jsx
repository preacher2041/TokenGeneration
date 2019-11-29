import React from 'react';
import {styles} from './QueryFilterStyle'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {withStyles, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography} from '@material-ui/core';
import {connect} from 'react-redux';

const ResultsRow = ({rows, productData}) => {
	console.log(productData.productName)

	return(
		<Paper className={styles.formControl}>
			<Table className={styles.formControl} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell>Product Name</TableCell>
						<TableCell>Voucher type ID</TableCell>
						<TableCell align="right">Retailer ID</TableCell>
						<TableCell align="right">Delivered</TableCell>
						<TableCell align="right">Not delivered</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map(row => (
						<TableRow key={row.voucherTypeId}>
							{productData.map((product, i) => {
								if(productData[i].typeID == row.voucherTypeId){
								return (
									<TableCell component="th" scope="row" key={i}>
										{productData[i].typeID == row.voucherTypeId ? product.productName : ''}
									</TableCell>
								)} else {
									return;
								}
							})}
							<TableCell align="right">{row.voucherTypeId}</TableCell>
							<TableCell align="right">{row.retailerId}</TableCell>
							<TableCell align="right">{row.count - row.countNotDelivered}</TableCell>
							<TableCell align="right">{row.countNotDelivered}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</Paper>
		);

};

const mapStateToProps = state => ({
	productData: state.RetailerProductReducer.productData,
});

export default connect(mapStateToProps)(withStyles(styles)(ResultsRow)) ;