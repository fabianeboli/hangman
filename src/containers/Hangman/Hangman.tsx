import React, { useState, useEffect } from 'react';
import { Header } from '../../components/Header/Header';
import { Password } from '../Password/Password';
import { Key } from '../Key/Key';
import styles from './Hangman.module.sass';

export const Hangman: React.FC = () => {
    const selectPassword = (): string => {
        const Passwords = ['lion', 'tiger', 'leopard', 'cheetah', 'panther', 'gorilla', 'hyaena','bandicoot','walrus',"dragonfly",'caracal'];
        return Passwords[Math.floor(Math.random() * Passwords.length)]
    }
    
    const [goodKeys, setGoodKeys] = useState<string[]>([]);
    const [numberOfLives, setNumberOfLives] = useState<number>(6);
    const [disableKeys, setDisableKeys] = useState<boolean>(false);
    const [pressedKeys, setPressedKeys] = useState<string[]>([])
    const [password] = useState<string>(selectPassword());

    const generateKeyboard = (KeyboardArray: JSX.Element[] = []): JSX.Element[] => {
        for (let i = 97; i <= 122; i++) {
            KeyboardArray = [...KeyboardArray, <Key click={click} char={String.fromCharCode(i)} disabled={disableKeys} />]
        }
        return KeyboardArray;
    }

    const click = (newPressedKey: string) => {
        const uniqueCharsOfPassword = [...new Set(password)].length;
        const sortedGoodKeys = goodKeys.length;
        setPressedKeys([...pressedKeys, newPressedKey]);
        if (!findPressedInPassword(newPressedKey) && numberOfLives > 0) {
            setNumberOfLives(numberOfLives - 1);
        }
        if ((!findPressedInPassword(newPressedKey) && numberOfLives <= 1) || uniqueCharsOfPassword === sortedGoodKeys) {
            setDisableKeys(true);
        }
    }


    const findPressedInPassword = (pressedKey: string): boolean => {
        for (let charPassword of password) {
            if (charPassword === pressedKey) {
                setGoodKeys([...goodKeys, pressedKey]);
                return true;
            }
        }
        return false;
    }

    const gameState = () => {
        const uniqueCharsOfPassword = [...new Set(password)].length;
        const sortedGoodKeys = goodKeys.length;
        if (numberOfLives === 0) {
            return <div className={styles.gameState} >You lost</div>
        } else if (uniqueCharsOfPassword === sortedGoodKeys) {
            return <div className={styles.gameState}>You won!</div>
        }
    }


    return (
        <>
            <Header numberOfLives={numberOfLives} />
            {gameState()}
            <Password password={password} pressedKeys={pressedKeys} />
            <div className={styles.keyboard}>
            {generateKeyboard()}
            </div>
            <button className={styles.reset} onClick={() => window.location.reload()}>Reset</button>

     
        </>
    )
}