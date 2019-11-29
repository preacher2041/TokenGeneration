import React from 'react';
import {connect} from 'react-redux';
import RetailerAccordionContainer from './RetailersAccordionContainer';

const RetailersAccordionRedux = ({retailerData}) => (
	<RetailerAccordionContainer retailerData={retailerData}/>
);

const mapStateToProps = state => ({
	retailerData: state.RetailerProductReducer.retailerData,
});

export default connect(mapStateToProps)(RetailersAccordionRedux);