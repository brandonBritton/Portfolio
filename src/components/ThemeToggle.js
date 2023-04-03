import ThemeButton from "assets/theme-button-light.svg";

const ThemeToggle = () => {

    const defaultTheme = localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark").matches ? "dark" : "light");
    if (defaultTheme) document.documentElement.setAttribute("data-theme", defaultTheme);

    const toggle = () => {
        let currentTheme = document.documentElement.getAttribute("data-theme");
        let targetTheme = "light";
    
        if (currentTheme === "light") {
            targetTheme = "dark";
        }
    
        document.documentElement.setAttribute('data-theme', targetTheme)
        localStorage.setItem('theme', targetTheme);
    };

    return (
        <div>
            <img 
                className="theme"
                src={ThemeButton} 
                alt="Change theme"
                onClick={toggle}
            />
        </div>
    );
};

export default ThemeToggle;