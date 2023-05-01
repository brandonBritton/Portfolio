import path from "utils/paths";
import Layout from "components/Layout";
import styles from "App.module.scss";

function App() {

  	return (
    	<div className={styles.App} data-theme="">
			<path.nav />
			<Layout content={ <path.hero /> }/>
			<Layout content={ <path.about /> } />
			<Layout content={ <path.experience /> } />
			<Layout content={ <path.contact /> } />
    	</div>     
  	);
}

export default App;
