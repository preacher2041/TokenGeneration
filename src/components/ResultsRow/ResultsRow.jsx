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
					<TableCell>Dessert (100g serving)</TableCell>
					<TableCell align="right">Calories</TableCell>
					<TableCell align="right">Fat&nbsp;(g)</TableCell>
					<TableCell align="right">Carbs&nbsp;(g)</TableCell>
					<TableCell align="right">Protein&nbsp;(g)</TableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				{rows.map(row => (
					<TableRow key={row.name}>
						<TableCell component="th" scope="row">
							{row.name}
						</TableCell>
						<TableCell align="right">{row.calories}</TableCell>
						<TableCell align="right">{row.fat}</TableCell>
						<TableCell align="right">{row.carbs}</TableCell>
						<TableCell align="right">{row.protein}</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	</Paper>
);

export default withStyles(styles)(ResultsRow);