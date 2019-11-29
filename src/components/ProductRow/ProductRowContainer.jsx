import React, {Fragment} from 'react';
import ProductRowView from './ProductRowView';

const ProductRowContainer = ({productData, postTokenData, retailerID}) => {
	
	const handleClick = (typeID) => {
		console.log('typeID: ', typeID);
		postTokenData(typeID, retailerID);
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