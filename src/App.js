import path from "pages/paths";
import Section from "components/section/Section";
import styles from "App.module.scss";

function App() {
	
	//fix content component mapping!


  	return (
    	<div className={styles.App} data-theme="">
			<path.nav />
			<Section content={ <path.hero /> } />
			<Section content={ <path.about /> } />
			<Section content={ <path.experience /> } />
			<Section content={ <path.contact /> } />
    	</div>     
  	);
}

export default App;
