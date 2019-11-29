import React, {Fragment} from 'react';
import ProductRowView from './ProductRowView';

const ProductRowContainer = ({productData, postTokenData, retailerID, errorHandling}) => {
	
	const handleClick = (typeID) => {
		postTokenData(typeID, retailerID, errorHandling);
	};
	
	return (
		<Fragment>
			{productData.map((rowData, i) => {
				return (
					<ProductRowView
						key={i}
						rowData={rowData}
						handleClick={handleClick}
					/>
				)
			})}
		</Fragment>
	)
};

export default ProductRowContainer;