import { Layout, Nav, Footer, Hero, About, Contact, Experience } from "components";
import styles from "styles/App.module.scss";


function App() {

  	return (
    	<div className={styles.App} data-theme="">
			<Nav />
			<Layout content={ <Hero /> }/>
			<Layout content={ <About /> } />
			<Layout content={ <Experience /> } />
			<Layout content={ <Contact /> } />
			<Footer />
    	</div>     
  	);
}

export default App;
