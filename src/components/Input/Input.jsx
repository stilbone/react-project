import styles from './Input.module.css'

const Input = (props) => {
    const {header, type = 'text', paragraph} = props;
    return (
        <div className={styles.inputDiv}>
            <h1 className={styles.header}>{header}</h1>
            <input className={styles.input} type={type} />
            <p className={styles.paragraph}>{paragraph}</p>
        </div>
        
    )
    
}

export { Input }