import { useState } from "react";
import { ReactComponent as Icon } from "assets/theme-button.svg";

const ThemeToggle = () => {

    const [theme, setTheme] = useState("light");
    const toggleTheme = (curr) => {
        
    }

    return (
        <div>
            <Icon />
        </div>
    );
};

export default ThemeToggle;