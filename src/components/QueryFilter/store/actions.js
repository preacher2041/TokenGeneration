export const actionTypes = {
	FETCH_REPORT_DATA: 'FETCH_REPORT_DATA',
	FETCH_REPORT_DATA_SUCCESS: 'FETCH_REPORT_DATA_SUCCESS',
	FETCH_REPORT_DATA_FAILURE: 'FETCH_REPORT_DATA_FAILURE',
};

export const fetchReportData = (selectedDateFrom, selectedDateTo) => ({
	type: actionTypes.FETCH_REPORT_DATA,
	selectedDateFrom,
	selectedDateTo
});

export const fetchReportDataSuccess = (result) => ({
	type: actionTypes.FETCH_REPORT_DATA_SUCCESS,
	result
});

export const fetchReportDataFailure = (error) => ({
	type: actionTypes.FETCH_REPORT_DATA_FAILURE,
	error
});