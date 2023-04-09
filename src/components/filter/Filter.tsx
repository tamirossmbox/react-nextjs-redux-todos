import React, { useEffect, useState } from 'react'
import { BsSortUp, BsSortDown, BsCheck2Square } from 'react-icons/bs';
import { TfiSave as SaveIcon } from 'react-icons/tfi';
import { BiSelectMultiple } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { checkAll } from '@/features/TodoSlice';
import { RootState } from '@/app/store';
import { saveToLocalStorage } from '@/features/FilterSlice';
import styles from '../../styles/Filter.module.scss';

const Filter = () => {
    const [isDisabled, setIsDisabled] = useState(false);
    const dispatch = useDispatch();

    const state = useSelector((state: RootState) => state.todos);
    const iconColor = isDisabled ? 'lightgrey' : '#333';

    useEffect(() => {
        if (state.todos.length === 0) {
            setIsDisabled(true)
        } else (
            setIsDisabled(false)
        )
    }, [state.todos])

    const handleCheckAll = () => {
        if (isDisabled) return;

        dispatch(checkAll())
    }

    return (
        <div className={styles.filter}>
            <BiSelectMultiple onClick={handleCheckAll} color={iconColor} />
            <BsSortUp color={iconColor} />
            <BsSortDown color={iconColor}/>
            <BsCheck2Square color={iconColor}/>
            <SaveIcon color={iconColor} onClick={() => dispatch(saveToLocalStorage(state))}/>
        </div>
    )
}

export default Filter