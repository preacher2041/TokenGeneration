export const actionTypes = {
	POST_TOKEN_DATA: 'POST_TOKEN_DATA',
	POST_TOKEN_DATA_SUCCESS: 'POST_TOKEN_DATA_SUCCESS',
	POST_TOKEN_DATA_FAILURE: 'POST_TOKEN_DATA_FAILURE',
};

export const postTokenData = (typeID, retailerID) => ({
	type: actionTypes.POST_TOKEN_DATA,
	typeID,
	retailerID
});

export const postTokenDataSuccess = (result) => ({
	type: actionTypes.POST_TOKEN_DATA_SUCCESS,
	result
});

export const postTokenDataFailure = (error) => ({
	type: actionTypes.POST_TOKEN_DATA_FAILURE,
	error
});