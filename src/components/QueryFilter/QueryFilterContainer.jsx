import React, {useState, useEffect} from 'react';
import QueryFilter from './QueryFilter';
import ResultsContainer from '../../components/ResultsContainer';
import {withStyles, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography} from '@material-ui/core';
import {styles} from './QueryFilterStyle'
import * as moment  from 'moment';

const Pickers = () => {
    // The first commit of Material-UI
    const [selectedDateFrom, setSelectedDateFrom] = useState(moment(new Date(Date.now())).toISOString());
    const [selectedDateTo, setSelectedDateTo] = useState(moment(new Date(Date.now())).toISOString());
    let [reportData] = useState();

    const handleDateChangeFrom = date => {
        setSelectedDateFrom(moment(date).toISOString());
    };

    const handleDateChangeTo = date => {
        setSelectedDateTo(moment(date).toISOString());

    };

    const handleSubmit = async () => {
        const response = await fetch('https://httpbin.org/anything', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({"query": "{ getReport(fromCreationDate: " + selectedDateFrom + ", toCreationDate:" + selectedDateTo + ") { voucherTypeId retailerId count } }"}),
        });
            const json = await response.json();
            reportData = json.data;
            console.log(reportData);
    };

    return (
        <div className={styles.root}>
            <QueryFilter selectedDateFrom={selectedDateFrom} handleDateChangeFrom={handleDateChangeFrom} selectedDateTo={selectedDateTo} handleDateChangeTo={handleDateChangeTo} handleSubmit={handleSubmit}  />
            <ResultsContainer reportData={reportData} />
        </div>
    )
};

export default withStyles(styles)(Pickers);