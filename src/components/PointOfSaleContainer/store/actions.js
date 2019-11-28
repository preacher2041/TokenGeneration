export const actionTypes = {
	FETCH_APPLICATION_DATA: 'FETCH_APPLICATION_DATA',
	FETCH_APPLICATION_DATA_SUCCESS: 'FETCH_APPLICATION_DATA_SUCCESS',
	FETCH_APPLICATION_DATA_FAILURE: 'FETCH_APPLICATION_DATA_FAILURE',
};

export const fetchApplicationData = () => ({
	type: actionTypes.FETCH_APPLICATION_DATA
});

export const fetchApplicationDataSuccess = (result) => ({
	type: actionTypes.FETCH_APPLICATION_DATA_SUCCESS,
	result
});

export const fetchApplicationDataFailure = (error) => ({
	type: actionTypes.FETCH_APPLICATION_DATA_FAILURE,
	error
});