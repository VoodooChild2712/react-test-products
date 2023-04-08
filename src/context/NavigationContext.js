import { createContext, useState } from "react";
export const NavContext = createContext("");
const NavProvider = ({ children }) => {
	const [navigater, setNavigater] = useState({
		state: false,
	});

	return (
		<NavContext.Provider value={{ navigater, setNavigater }}>
			{children}
		</NavContext.Provider>
	);
};

export default NavProvider;
