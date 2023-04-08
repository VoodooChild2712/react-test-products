import React from "react";

const mapProducts = (products) => {
	products.map((product) => {
		console.log(product.sku);
	});
	return;
};

export default mapProducts;
