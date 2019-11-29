import React from 'react';
import {connect} from 'react-redux';
import VoucherDisplayView from './voucherDisplayView';

const VoucherDisplayRedux = ({voucherCode}) => {
	
	return(
		<VoucherDisplayView voucherCode={voucherCode}/>
	)
};

const mapStateToProps = state => ({
	voucherCode: state.TokenReducer.tokenData.code,
});

export default connect(mapStateToProps)(VoucherDisplayRedux);