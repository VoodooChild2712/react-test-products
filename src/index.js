import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import NavProvider from "./context/NavigationContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<NavProvider>
			<RouterProvider router={router} />
		</NavProvider>
	</React.StrictMode>
);
