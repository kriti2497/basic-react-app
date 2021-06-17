import React from 'react'
import styles from './Card.module.css';


const Card = (props) => {
    // we want Card component to set its own styles as well as 
    // consider potential styles coming from the props
    // so we have used template literals to handle both classes
    // merging external class with internally defined class
    return (
        <div className={`${styles.card} ${props.cssClass}`}>
            {props.children}
        </div>
    )
}

export default Card
