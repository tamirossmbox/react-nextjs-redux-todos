import React, { useState } from 'react'
import Input from '../input/Input'
import styles from './Form.module.css';
import { useDispatch } from 'react-redux';
import { addTodo } from '@/features/TodoSlice';


const Form = () => {
    const [value, setValue] = useState('')

    const dispatch = useDispatch();

    const handleInputChange = (e: any) => {
        setValue(e.target.value)
    }

    return (
        <div className={styles['form-wrapper']}>
            <Input value={value} onChange={handleInputChange} />
            <button onClick={() => dispatch(addTodo(value))} className={styles['add-btn']}>Add</button>
        </div>
    )
}

export default Form