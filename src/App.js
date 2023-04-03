import { useState } from "react";
import path from "pages/paths";
import "App.scss";

function App() {

  	const [theme, setTheme] = useState("light");
  
  	return (
    	<div className="App" data-theme={ theme }>
			<path.nav />
			<path.hero />
			<path.about />
			<path.experience />
			<path.contact />
    	</div>     
  	);
}

export default App;
