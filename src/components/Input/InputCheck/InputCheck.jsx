import styles from './InputCheck.module.css'

const InputCheck = (props) => {
    const {header, paragraph} = props;
    return (
        <div className={styles.inputDiv}>
            <h1 className={styles.header}>{header}</h1>
            <input className={styles.input} type='checkbox' />
            <p className={styles.paragraph}>{paragraph}</p>
        </div>
        
    )
    
}

export { InputCheck }