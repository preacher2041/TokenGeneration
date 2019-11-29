import React from 'react';
import {connect} from 'react-redux';
import ProductRowContainer from './ProductRowContainer';
import {postTokenData} from './store/actions';

const ProductRowRedux = ({productData, postTokenData, retailerID, errorHandling}) => (
	<ProductRowContainer productData={productData} postTokenData={postTokenData} retailerID={retailerID} errorHandling={errorHandling}/>
);

const mapStateToProps = state => ({
	productData: state.RetailerProductReducer.productData,
});

const mapDispatchToProps = dispatch => ({
	postTokenData: (typeID, retailerID, errorHandling) => dispatch(postTokenData(typeID, retailerID, errorHandling)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductRowRedux);