import React from "react";

const Card = () => {
	return (
		<>
			<div className="container d-flex flex-column align-items-center border border-dark mx-3 p-3">
				<input
					type="checkbox"
					name="delete"
					className="delete-checkbox form-check-input align-self-start"
				/>
				<div className="card-body d-flex flex-column text-center">
					<h4 id="sku">SKU</h4>
					<h4 id="name">Product Name</h4>
					<h4 id="price">Product Price</h4>
					<h4 id="description">Product size</h4>
				</div>
			</div>
		</>
	);
};

export default Card;
