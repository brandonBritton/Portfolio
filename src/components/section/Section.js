import styles from "./Section.module.scss";

export default function Section(props) {
    return (
        <div className={`${styles.section}`}>
            { props.content }
        </div>
    );
};