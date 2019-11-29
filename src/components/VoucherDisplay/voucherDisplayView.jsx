import React from 'react';
import { Typography } from '@material-ui/core';

const VoucherDisplayView = ({voucherCode}) => (
	<div>
		<Typography>Voucher Code: {voucherCode}</Typography>
	</div>
);

export default VoucherDisplayView;