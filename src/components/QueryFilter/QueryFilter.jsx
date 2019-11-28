import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import {withStyles, Typography} from '@material-ui/core';
import { Button } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
	MuiPickersUtilsProvider,
	KeyboardTimePicker,
	KeyboardDatePicker,
} from '@material-ui/pickers';
import {styles} from './QueryFilterStyle'


const QueryFilter = ({selectedDate, handleDateChange}) => (
	<div>
	<FormControl className={styles.formControl} >
		<InputLabel id="voucher-id-label">Voucher ID</InputLabel>
		<Select
			label="voucher-id-label"
			id="voucher-id-select"
			className={styles.selectEmpty}
		>
			<MenuItem value={10}>123</MenuItem>
			<MenuItem value={20}>456</MenuItem>
			<MenuItem value={30}>789</MenuItem>
		</Select>
		</FormControl>
		<FormControl className={styles.formControl} >
			<InputLabel id="retailer-id-label">Retailer ID</InputLabel>
			<Select
				label="retailer-id-label"
				id="retailer-id-select"
				className={styles.selectEmpty}
			>
				<MenuItem value={10}>Ten</MenuItem>
				<MenuItem value={20}>Twenty</MenuItem>
				<MenuItem value={30}>Thirty</MenuItem>
			</Select>
		</FormControl>
	<FormControl className={styles.formControl} >
		<InputLabel id="date-from-label">Date from</InputLabel>
		<Select
			label="date-from-label"
			id="date-from-select"
			className={styles.selectEmpty}
		>
			<MenuItem value={10}>Ten</MenuItem>
			<MenuItem value={20}>Twenty</MenuItem>
			<MenuItem value={30}>Thirty</MenuItem>
		</Select>
		</FormControl>
	<FormControl className={styles.formControl} >
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<Grid container justify="space-around">
				<KeyboardDatePicker
					disableToolbar
					variant="inline"
					format="MM/dd/yyyy"
					margin="normal"
					id="date-picker-inline"
					label="Date picker inline"
					value={selectedDate}
					onChange={handleDateChange}
					KeyboardButtonProps={{
						'aria-label': 'change date',
					}}
				/>
				<KeyboardDatePicker
					margin="normal"
					id="date-picker-dialog"
					label="Date picker dialog"
					format="MM/dd/yyyy"
					value={selectedDate}
					onChange={handleDateChange}
					KeyboardButtonProps={{
						'aria-label': 'change date',
					}}
				/>
			</Grid>
		</MuiPickersUtilsProvider>
	</FormControl>
		<Button />
		</div>
);

export default withStyles(styles)(QueryFilter);