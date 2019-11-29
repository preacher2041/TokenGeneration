    import React, {useState, useEffect} from 'react';
    import QueryFilter from './QueryFilter';
    import ResultsContainer from '../../components/ResultsContainer';
    import {withStyles, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography} from '@material-ui/core';
    import {styles} from './QueryFilterStyle';
    import Loader from './Loader';
    import Container from '@material-ui/core/Container';
    import * as moment  from 'moment';

    const Pickers = () => {
        // The first commit of Material-UI
        const [selectedDateFrom, setSelectedDateFrom] = useState(moment(new Date(Date.now())).toISOString());
        const [selectedDateTo, setSelectedDateTo] = useState(moment(new Date(Date.now())).toISOString());
        const [reportData, setReportData] = useState(null);
        const [loading, setLoading] = useState(false);

        const handleDateChangeFrom = date => {
            setSelectedDateFrom(moment(date).toISOString());
        };

        const handleDateChangeTo = date => {
            setSelectedDateTo(moment(date).toISOString());

        };

        const handleSubmit = async () => {
            setReportData(null);
            setLoading(true);
            const response = await fetch('https://lpm7jw3h9f.execute-api.eu-west-1.amazonaws.com/dev/graphql', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({"query": "{ getReport(fromCreationDate: \"" + selectedDateFrom + "\", toCreationDate:\"" + selectedDateTo + "\") { voucherTypeId retailerId count } }"}),
            });
                const json = await response.json();
                setReportData(json.data);
                setLoading(false);

        };

        return (
            <Container maxWidth="sm">
                <QueryFilter selectedDateFrom={selectedDateFrom} handleDateChangeFrom={handleDateChangeFrom} selectedDateTo={selectedDateTo} handleDateChangeTo={handleDateChangeTo} handleSubmit={handleSubmit}  />
                {reportData !== null ? <ResultsContainer reportData={reportData} /> : null}
                {loading ? <Loader  /> : null}
            </Container>
        )
    };

    export default withStyles(styles)(Pickers);