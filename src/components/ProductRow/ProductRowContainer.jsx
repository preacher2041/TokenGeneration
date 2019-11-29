import React, {Fragment} from 'react';
import ProductRowView from './ProductRowView';

const ProductRowContainer = ({productData, postTokenData}) => {
	const handleClick = () => {
		console.log('Container: API Call');
		postTokenData();
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