import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkSide from "./Hooks/useDarkSide";

export default function Switcher() {
	const [colorTheme, setTheme] = useDarkSide();
	const [darkSide, setDarkSide] = useState(
		colorTheme === "light" ? true : false
	);

	const toggleDarkMode = (checked) => {
		setTheme(colorTheme);
		setDarkSide(checked);
	};

	return (
		<>
			<div style={{ display: "flex",  }}>
  <DarkModeSwitch
    className=" mb-5"
    checked={darkSide}
    onChange={toggleDarkMode}
    size={35}
  />
  <button
    onClick={toggleDarkMode}
    className="bg-green-200 p-2 rounded-3xl  mr-4 mb-5"
  >
    {darkSide ? "Dark Mode" : "Light Mode"}
  </button>
</div>

			
		</>
	);
}
