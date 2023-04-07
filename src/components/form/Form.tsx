import React, { useState } from 'react'
import Input from '../input/Input'
import styles from './Form.module.css';

interface FormProps {
    //
}

const Form = () => {
    const [value, setValue] = useState('')

    const handleInputChange = (e: any) => {
      setValue(e.target.value)
    }

    return (
        <div className={styles['form-wrapper']}>
            <Input value={value} onChange={handleInputChange} />
            <button className={styles['add-btn']}>Add</button>
        </div>
    )
}

export default Form