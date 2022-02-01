import styles from './Button.module.css'

const Button = (props) => {
    const {name = "Button"} = props;
    return (
        <button className={styles.button}>
            {name}
        </button>
    )
}

export { Button }

