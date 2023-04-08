import { useEffect, useState } from "react";
import AddProduct from "./pages/AddProduct";
import CardsContainer from "./components/CardsContainer";

const initialProducts = localStorage.getItem("products")
	? JSON.parse(localStorage.getItem("productsLocal"))
	: [{SKU: "2482900",
	name: "Disc",
	price: "1.00",
	type: "DVD",
	size: ["2", "", ""],}];

function App() {
	const [products, setProducts] = useState(initialProducts);

	useEffect(() => {
		localStorage.setItem("productsLocal", JSON.stringify(products));
	}, [products]);

	const addProducts = (product) => {
		setProducts([...products, product]);
	};

	const deleteProduct = (id) => {
		const productsArrayFilt = products.filter((item) => item.id !== id);
		{
			setProducts(productsArrayFilt);
		}
	};
	console.log(prod)
	return (
		<div className="App">
			<CardsContainer products={products} deleteProduct={deleteProduct} />
			<AddProduct addProducts={addProducts} />
		</div>
	);
}

export default App;
