import React from 'react';
import styles from './Header.module.sass';

interface IProps {
    numberOfLives: number;
}

export const Header = (props: IProps) => {
    return (
        <div className={styles.header}>
        <h1>HANGMAN</h1>
        <p className={styles.numberOfLives}>Number Of Lives: {props.numberOfLives}</p>
        </div>
    )

}