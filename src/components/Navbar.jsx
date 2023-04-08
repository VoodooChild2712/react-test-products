import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavProvider, { NavContext } from "../context/NavigationContext";

const Navbar = () => {
	useContext(NavContext);
	const { navigater, setNavigater } = useContext(NavContext);
	const navigate = useNavigate();
	const handleNav = () => {
		setNavigater({ ...navigater, state: !navigater.state });
	};

	useEffect(() => {
		if (!navigater.state) {
			navigate("/");
		}
	}, [navigater.state]);
	return (
		<div className="navbar navbar-dark bg-dark">
			<div className="container justify-content-between">
				{navigater.state === true ? (
					<>
						<h1 className="title text-light">Product Add</h1>
						<div className="d-flex flex-row align-items-center justify-content-end">
							<Link className="btn btn-dark border-light me-2">
								SAVE
							</Link>
							<Link onClick={handleNav} to="/" className="btn btn-light">
								CANCEL
							</Link>
						</div>
					</>
				) : (
					<>
						<h1 className="title text-light">Product List</h1>

						<div className="d-flex flex-row align-items-center justify-content-end">
							<Link
								onClick={handleNav}
								to="/addproduct"
								className="btn btn-dark border-light me-2"
							>
								ADD
							</Link>
							<button className="btn btn-light" id="delete-product-btn">MASS DELETE</button>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default Navbar;
