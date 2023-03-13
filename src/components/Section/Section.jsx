import styles from './section.module.css';

const Section = ({children}) => {
return (
    <div className={styles.section}> {children} </div>
)
}

export default Section;