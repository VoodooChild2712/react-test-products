import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
	return <>
        <Navbar />
        <hr />
        <Outlet />
        <hr />
        <h3 className="text-center fs-4 fw-lighter mb-4">Scandiweb Test assignment</h3>
    </>;
};

export default Layout;
