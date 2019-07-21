import React, {useState} from 'react';
import styles from './Key.module.sass'

interface IProps {
    char: string, 
    click: any,
    disabled: boolean
}

export const Key = (props: IProps) => {
    const [pressed, setPressed] = useState<boolean>(false);
    const keyAvailability = pressed ? styles.disabled : styles.enabled;

    const handleClick = () => {
        setPressed(true)
        props.click(props.char)
    }

    return (
        <>
        <button onClick={() => handleClick()} className={keyAvailability} disabled={props.disabled}>{props.char}</button>
        </>
    )
}