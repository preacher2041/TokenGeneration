import React from 'react';
import {connect} from 'react-redux';
import ProductRowContainer from './ProductRowContainer';
import {postTokenData} from './store/actions';

const ProductRowRedux = ({productData, postTokenData}) => (
	<ProductRowContainer productData={productData} postTokenData={postTokenData}/>
);

const mapStateToProps = state => ({
	productData: state.RetailerProductReducer.productData,
});

const mapDispatchToProps = dispatch => ({
	postTokenData: () => dispatch(postTokenData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductRowRedux);