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

const ResultsRow = ({rows}) => (
	<Paper className={styles.formControl}>
		<Table className={styles.formControl} aria-label="simple table">
			<TableHead>
				<TableRow>
					<TableCell>Voucher type ID</TableCell>
					<TableCell align="right">Retailer ID</TableCell>
					<TableCell align="right">Count</TableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				{rows.map(row => (
					<TableRow key={row.voucherTypeId}>
						<TableCell component="th" scope="row">
							{row.voucherTypeId}
						</TableCell>
						<TableCell align="right">{row.retailerId}</TableCell>
						<TableCell align="right">{row.count}</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	</Paper>
);

export default withStyles(styles)(ResultsRow);