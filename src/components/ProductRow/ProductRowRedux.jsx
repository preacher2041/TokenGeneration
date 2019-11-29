import React from 'react';
import {connect} from 'react-redux';
import ProductRowContainer from './ProductRowContainer';
import {postTokenData} from './store/actions';

const ProductRowRedux = ({productData, postTokenData, retailerID}) => (
	<ProductRowContainer productData={productData} postTokenData={postTokenData} retailerID={retailerID}/>
);

const mapStateToProps = state => ({
	productData: state.RetailerProductReducer.productData,
});

const mapDispatchToProps = dispatch => ({
	postTokenData: (typeID, retailerID) => dispatch(postTokenData(typeID, retailerID)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductRowRedux);