import { useState } from 'react';
import Nav from 'components/Nav';
import Hero from 'pages/Hero';
import 'App.scss';

function App() {

  const [theme, setTheme] = useState("light");
  
  
  return (
    <div className="App" data-theme={ theme }>
       <Nav />
      <Hero />
    </div>     
  );
}

export default App;
