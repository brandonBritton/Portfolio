import styles from "./Layout.module.scss";

const Layout = (props) => {
    return (
        <div className={`${styles.layout}`}>
            { props.content }
        </div>
    );
};

export default Layout;