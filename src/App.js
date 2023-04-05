import path from "pages/paths";
import "App.scss";

function App() {
  
  	return (
    	<div className="App" data-theme="">
			<path.nav />
			<path.hero />
			<path.about />
			<path.experience />
			<path.contact />
    	</div>     
  	);
}

export default App;
