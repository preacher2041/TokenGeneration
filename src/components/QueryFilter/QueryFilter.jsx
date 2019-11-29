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


const QueryFilter = ({selectedDateFrom, handleDateChangeFrom, selectedDateTo, handleDateChangeTo, handleSubmit}) => (
	<div>
	<FormControl className={styles.formControl} >
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<Grid container justify="space-around">
				<KeyboardDatePicker
					format="MM/dd/yyyy"
					margin="normal"
					id="date-picker-from"
					label="Date from"
					value={selectedDateFrom}
					onChange={handleDateChangeFrom}
					KeyboardButtonProps={{
						'aria-label': 'change date',
					}}
				/>
				<KeyboardDatePicker
					margin="normal"
					id="date-picker-to"
					label="Date to"
					format="MM/dd/yyyy"
					value={selectedDateTo}
					onChange={handleDateChangeTo}
					KeyboardButtonProps={{
						'aria-label': 'change date',
					}}
				/>
			</Grid>
		</MuiPickersUtilsProvider>
	</FormControl>
		<Button variant="contained" color="primary" onClick={handleSubmit} type="submit">Submit</Button>
		</div>
);

export default withStyles(styles)(QueryFilter);