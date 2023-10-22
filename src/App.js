
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import SocialLinks from "./components/SocialLinks";
import { useState, useEffect  } from "react";



function App() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if(window.matchMedia('prefers-color-schema: dark').matches){
      setTheme('dark');
    }
    else{
      setTheme('light');
    }
  }, [])

  useEffect(() => {
    if(theme === "dark"){
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
 } , [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (

   <div>
  
    <NavBar/>
   
    <Home />
    <SocialLinks />
    <About />
    <Experience/>
    <Skills />
    <Contact />
   </div>
  );
}

export default App;
