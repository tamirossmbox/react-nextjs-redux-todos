import React, { FormEvent, useState } from 'react'
import Input from '../input/Input'
import styles from './Form.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, clearAll } from '@/features/TodoSlice';
import { RootState } from '@/app/store';


const Form = () => {
    const todos = useSelector((state: RootState) => state.todos);
    const dispatch = useDispatch();
    const [value, setValue] = useState('');
    const [isDisabled, setIsDisabled] = useState(false);

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
            <button onClick={handleAddClick} disabled={!value} className={`${styles.btn} ${styles['add-btn']}`}>Add</button>
            <button onClick={handleClearClick} disabled={todos.todos.length === 0} className={`${styles.btn} ${styles['clear-btn']}`}>Clear All</button>
        </form>
    )
}

export default Form