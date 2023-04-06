import styles from "./Section.module.scss";

export default function Section({ content }) {
    return (
        <div className={styles.section}>
            { content }
        </div>
    );
};