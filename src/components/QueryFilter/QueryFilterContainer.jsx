    import React, {useState, useEffect} from 'react';
    import QueryFilter from './QueryFilter';
    import ResultsContainer from '../../components/ResultsContainer';
    import {withStyles, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography} from '@material-ui/core';
    import {styles} from './QueryFilterStyle';
    import Loader from './Loader';
    import Container from '@material-ui/core/Container';
    import * as moment  from 'moment';

    const Pickers = ({fetchReportData}) => {
        // The first commit of Material-UI
        const [selectedDateFrom, setSelectedDateFrom] = useState(moment(new Date(Date.now())).subtract(3, 'months').toISOString());
        const [selectedDateTo, setSelectedDateTo] = useState(moment(new Date(Date.now())).toISOString());
        const [reportData, setReportData] = useState(null);
        const [loading, setLoading] = useState(false);

        const handleDateChangeFrom = date => {
            setSelectedDateFrom(moment(date).toISOString());
        };

        const handleDateChangeTo = date => {
            setSelectedDateTo(moment(date).toISOString());

        };

        const handleSubmit = () => {
            fetchReportData(selectedDateFrom, selectedDateTo);
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