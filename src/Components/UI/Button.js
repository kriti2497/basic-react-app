import React from 'react';
import styles from './Button.module.css';

const Button = (props) => {
    return (
        // fallback button type given below
        <button type={props.type || 'button'} onClick={props.onBtnClick} className={styles.button}>
            {props.children}
        </button>
    )
}

export default Button
