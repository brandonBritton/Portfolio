import styles from "styles/App.module.scss";
import {
  Layout,
  Nav,
  Footer,
  Hero,
  About,
  Contact,
  Experience,
} from "components";

function App() {
  return (
    <div className={styles.App} data-theme="">
      <Nav />
      <Layout content={<Hero />} />
      <Layout content={<About />} />
      <Layout content={<Experience />} />
      <Layout content={<Contact />} />
      <Footer />
    </div>
  );
}

export default App;
