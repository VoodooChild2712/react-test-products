import React from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import mapProducts from "../utilities/mapProducts";

const AddProduct = (addProducts) => {
	const [product, setProduct] = useState({
		SKU: "",
		name: "",
		price: "",
		type: "",
		size: ["", "", ""],
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!product.SKU.trim() || !product.name.trim() || !product.price.trim()) {
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: "Complete all inputs!",
			});
			return;
		}
		addProducts({
			SKU: product.SKU,
			name: product.name,
			price: product.price,
			type: product.type,
			size: product.size,
			id: Date.now(),
		});
		Swal.fire({
			position: "center",
			icon: "success",
			title: "Product added!",
			showConfirmButton: false,
			timer: 1500,
		});
		console.log("si");
	};
	const handleChange = (e) => {
		{
			setProduct({ ...product, [e.target.name]: e.target.value });
		}
	};

	const handleForms = (e) => {
		if (e.target.value === "DVD") {
			document.querySelector("#type-label").classList.add("d-none");
			document.querySelector(".dvd-form").classList.remove("d-none");
			document.querySelector(".book-form").classList.add("d-none");
			document.querySelector(".furniture-form").classList.add("d-none");
		}
		if (e.target.value === "Furniture") {
			document.querySelector("#type-label").classList.add("d-none");
			document.querySelector(".furniture-form").classList.remove("d-none");
			document.querySelector(".dvd-form").classList.add("d-none");
			document.querySelector(".book-form").classList.add("d-none");
		}
		if (e.target.value === "Book") {
			document.querySelector("#type-label").classList.add("d-none");
			document.querySelector(".book-form").classList.remove("d-none");
			document.querySelector(".furniture-form").classList.add("d-none");
			document.querySelector(".dvd-form").classList.add("d-none");
		}
	};

	return (
		<>
			<form onSubmit={handleSubmit} id="product_form" className="p-3">
				<div className="data-form">
					<label className="mb-2">SKU</label>
					<input
						type="text"
						className="form-control mb-3 w-auto"
						name="SKU"
						placeholder="Write the unique SKU for the product"
						value={product.SKU}
						onChange={handleChange}
					/>
					<label className="mb-2">Name</label>
					<input
						type="text"
						className="form-control mb-3 w-auto"
						name="name"
						placeholder="Write the product name"
						value={product.name}
						onChange={handleChange}
					/>
					<label className="mb-2">Price ($)</label>
					<input
						type="number"
						className="form-control mb-3 w-auto"
						name="price"
						placeholder="Write the product price"
						value={product.price}
						onChange={handleChange}
					/>
					<label>Choose product type</label>
					<select
						className="form-select w-auto"
						id="type-selector"
						placeholder="Choose product type"
						onChange={handleForms}
					>
						<optgroup label="Select a product type"></optgroup>
						<option id="type-label">Choose a product type</option>
						<option value="DVD">DVD</option>
						<option value="Furniture">Furniture</option>
						<option value="Book">Book</option>
					</select>
				</div>
				<div className="dynamic-form d-flex flex-column mt-3">
					<div className="dvd-form mb-3 d-none">
						<label>Size (MB)</label>
						<input
							type="number"
							name="size"
							id="size"
							className="form-control w-auto mt-2 mb-3"
							placeholder="Size"
							onChange={handleChange}
						/>
						<h5 className="fs-6 mt-3">Please, provide DVD size in MegaBytes</h5>
					</div>
					<div className="furniture-form mb-3 d-none">
						<label>Height (CM)</label>
						<input
							type="number"
							name="height"
							id="height"
							className="form-control w-auto mt-2 mb-3"
							placeholder="Height"
							onChange={handleChange}
						/>
						<label>Width (CM)</label>
						<input
							type="number"
							name="width"
							id="width"
							className="form-control w-auto mb-3"
							placeholder="Width"
							onChange={handleChange}
						/>
						<label>Lenght (CM)</label>
						<input
							type="number"
							name="lenght"
							id="lenght"
							className="form-control w-auto mt-2 mb-3"
							placeholder="Lenght"
							onChange={handleChange}
						/>
						<h5 className="fs-6 mt-3">
							Please, provide the product measurements in centimeters
						</h5>
					</div>
					<div className="book-form d-none">
						<label>Weight (KG)</label>
						<input
							type="number"
							name="weight"
							id="weight"
							className="form-control w-auto mt-2 mb-3"
							placeholder="Weight"
							onChange={handleChange}
						/>
						<h5 className="fs-6 mt-3">
							Please, provide the product weight in kilograms
						</h5>
					</div>
				</div>
				<button className="btn btn-dark" onClick={handleSubmit}>
					Submit
				</button>
			</form>
		</>
	);
};

export default AddProduct;
