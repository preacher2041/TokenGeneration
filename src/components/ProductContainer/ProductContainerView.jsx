import React from 'react';
import {Button, Typography} from '@material-ui/core';

const ProductContainerView = ({productName, productPrice}) => (
	<div>
		<Typography>{productName} {productPrice}</Typography>
		<Button variant="contained">Buy voucher</Button>
	</div>
);

export default ProductContainerView;