import React from 'react';
import generate from '@babel/generator';
import styles from './Password.module.sass'

type passwordChar = {
    character: string, 
    visible: boolean 
}

interface IProps {
    password: string,
    pressedKeys: string[],
}

export const Password = (props: IProps) => {
    const uuid = require('uuid/v4');
    const castIntoPassword = (password: string): passwordChar[] => {
        let convertedPassword: passwordChar[] = [];
        for(let el of password) {
            convertedPassword = [...convertedPassword, { character: el, visible: false }];
        }
        return convertedPassword;
    }

    const revealPasswordChars = (password: passwordChar[] = castIntoPassword(props.password)): passwordChar[] => {
        for(let char of password) {
            if(checkKey(char)) {
                char.visible = true;
            }
        }
        return password
    }

    const checkKey = (pressedKey: passwordChar): boolean => {
        for(let el of props.pressedKeys) {
            if(el === pressedKey.character) { 
                return true;
            }
        }
        return false;
    }


    const generatePasswordPuzzle = (): JSX.Element[] => {
        const password = revealPasswordChars();
        let revealedPassword: string[] = [];
        for(let el of password) {
            if(el.visible === true) {
                revealedPassword = [...revealedPassword, el.character]
            } else {
                revealedPassword = [...revealedPassword, '_']
            }
        }
        return revealedPassword.map(el => <span key={uuid()} className={styles.passwordChar} >{el}</span>)
    }

  
    return (
        <div className={styles.password}>
        {generatePasswordPuzzle()}
        </div>
    )
}