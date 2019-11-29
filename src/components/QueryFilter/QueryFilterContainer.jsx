    import React, {useState, useEffect} from 'react';
    import QueryFilter from './QueryFilter';
    import ResultsContainer from '../../components/ResultsContainer';
    import {withStyles, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography} from '@material-ui/core';
    import {styles} from './QueryFilterStyle';
    import Loader from './Loader';
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
            /*const response = await fetch('https://lpm7jw3h9f.execute-api.eu-west-1.amazonaws.com/dev/graphql', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({"query": "{ getReport(fromCreationDate: " + selectedDateFrom + ", toCreationDate:" + selectedDateTo + ") { voucherTypeId retailerId count } }"}),
            });
                const json = await response.json();
                reportData = json.data;
                setReportData(json.data);
             setLoading(false);
                */
                const mockJson = {"data":{"getReport":[{"voucherTypeId":"SCEE-XX-S0035764","retailerId":"AMA","count":1},{"voucherTypeId":"SCEE-XX-S0035765","retailerId":"TES","count":10}, {"voucherTypeId":"SCEE-XX-S0035766","retailerId":"GAM","count":20}]}};

            setTimeout(() =>{
                    setReportData(mockJson.data.getReport);
                    setLoading(false);
            }, 1000);

        };

        return (
            <div className={styles.root}>
                <QueryFilter selectedDateFrom={selectedDateFrom} handleDateChangeFrom={handleDateChangeFrom} selectedDateTo={selectedDateTo} handleDateChangeTo={handleDateChangeTo} handleSubmit={handleSubmit}  />
                {reportData !== null ? <ResultsContainer reportData={reportData} /> : null}
                {loading ? <Loader  /> : null}
            </div>
        )
    };

    export default withStyles(styles)(Pickers);