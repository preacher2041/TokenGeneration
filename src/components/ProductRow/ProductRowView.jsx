import React from 'react';
import { Button, Typography } from '@material-ui/core';

const ProductRowView = ({rowData, handleClick}) => (
	<div>
		<Typography>{rowData.productName} {rowData.productCurrency}{rowData.productPrice}</Typography>
		<Button variant="contained" onClick={handleClick}>Buy voucher</Button>
	</div>
);

export default ProductRowView;