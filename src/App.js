import path from "utils/paths";
import Layout from "components/Layout";
import styles from "styles/App.module.scss";
import Footer from "components/Footer";

function App() {

  	return (
    	<div className={styles.App} data-theme="">
			<path.nav />
			<Layout content={ <path.hero /> }/>
			<Layout content={ <path.about /> } />
			<Layout content={ <path.experience /> } />
			<Layout content={ <path.contact /> } />
			<Footer />
    	</div>     
  	);
}

export default App;
