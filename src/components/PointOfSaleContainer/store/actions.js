export const actionTypes = {
	FETCH_RETAILER_DATA: 'FETCH_RETAILER_DATA',
	FETCH_RETAILER_DATA_SUCCESS: 'FETCH_RETAILER_DATA_SUCCESS',
	FETCH_RETAILER_DATA_FAILURE: 'FETCH_RETAILER_DATA_FAILURE',
	FETCH_PRODUCT_DATA: 'FETCH_PRODUCT_DATA',
	FETCH_PRODUCT_DATA_SUCCESS: 'FETCH_PRODUCT_DATA',
	FETCH_PRODUCT_DATA_FAILURE: 'FETCH_PRODUCT_DATA_FAILURE',
};

export const fetchRetailerData = () => ({
	type: actionTypes.FETCH_RETAILER_DATA
});

export const fetchProductData = () => ({
	type: actionTypes.FETCH_PRODUCT_DATA
});

export const fetchRetailerDataSuccess = (result) => ({
	type: actionTypes.FETCH_RETAILER_DATA_SUCCESS,
	result
});

export const fetchRetailerDataFailure = (error) => ({
	type: actionTypes.FETCH_RETAILER_DATA_FAILURE,
	error
});

export const fetchProductDataSuccess = (result) => ({
	type: actionTypes.FETCH_PRODUCT_DATA_SUCCESS,
	result
});

export const fetchProductDataFailure = (error) => ({
	type: actionTypes.FETCH_PRODUCT_DATA_FAILURE,
	error
});