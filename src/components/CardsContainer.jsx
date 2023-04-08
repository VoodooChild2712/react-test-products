import React from "react";
import Card from "./Card";

const CardsContainer = (props) => {
	const { products, deleteProduct } = props;
        console.log(products)
	return (
		<>
			<div className="container p-4 d-flex flex-row">
				{/* {products.length === 0 ? (
					<div className="border border-dark border-opacity-25">
						<p className="text-center">No products</p>
					</div>
				) : (
					products.map((item) => (
						<Card key={item.id} item={item} deleteProduct={deleteProduct} />
					))
				)} */}
			</div>
		</>
	);
};

export default CardsContainer;
