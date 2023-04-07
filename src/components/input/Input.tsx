import React from 'react'
import styles from './Input.module.css';

interface InputProps {
    value: string;
    onChange: (e: any) => void;
}

const Input = ({ value, onChange }: InputProps) => {
  return (
    <input value={value} onChange={onChange} type="text" placeholder='What todo ?' className={styles.input}/>
  )
}

export default Input