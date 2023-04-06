import path from "pages/paths";
import Section from "components/section/Section";
import styles from "App.module.scss";

function App() {
	
	//fix content component mapping!
	const SectionComponents = path.map(item => 
		<Section content={<item />} />
	);

  	return (
    	<div className={styles.App} data-theme="">
			<path.nav />
			<SectionComponents/>
			{/* <path.hero />
			<path.about />
			<path.experience />
			<path.contact /> */}
			{/* <Section content={ <path.hero /> } /> */}
    	</div>     
  	);
}

export default App;
