//testing
import { useState } from 'react';
import { createContext } from 'react';

import Nav from 'components/Nav';
import Hero from 'pages/Hero';
import 'App.scss';

export const ThemeContext = createContext(null);

function App() {

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={ theme }>
        <Nav />
        <Hero />
      </div>     
    </ThemeContext.Provider>
  );
}

export default App;
