import "./styles.scss";

const NavigationBullets = () => {
    
    
    const Bullet = () => {
        return (
            <li>
                <button 
                    type="button"
                    
                    className=""
                    aria-label=""
                />
            </li>
        );
    };

    return (
        <ul>
            <Bullet />
            <Bullet />
            <Bullet />
            <Bullet />
        </ul>
    )
    
    
};

export default NavigationBullets;