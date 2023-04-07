import React, { FormEvent, useState } from 'react'
import Input from '../input/Input'
import styles from './Form.module.css';
import { useDispatch } from 'react-redux';
import { addTodo, clearAll } from '@/features/TodoSlice';


const Form = () => {
    const [value, setValue] = useState('')

    const dispatch = useDispatch();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        console.log('SUBMIT');

        e.preventDefault();
        e.stopPropagation();
        dispatch(addTodo(value));
        setValue('')
    }

    const handleInputChange = (e: any) => {
        setValue(e.target.value)
    }

    const handleAddClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation()
        dispatch(addTodo(value));
        setValue('')
    }

    const handleClearClick = (e:any) => {
        e.preventDefault();
        e.stopPropagation()
        dispatch(clearAll());
        setValue('')
    }

    return (
        <form className={styles['form-wrapper']} onSubmit={handleSubmit}>
            <Input value={value} onChange={handleInputChange} />
            <button onClick={handleAddClick} className={`${styles.btn} ${styles['add-btn']}`}>Add</button>
            <button onClick={handleClearClick} className={`${styles.btn} ${styles['clear-btn']}`}>Clear All</button>
        </form>
    )
}

export default Form