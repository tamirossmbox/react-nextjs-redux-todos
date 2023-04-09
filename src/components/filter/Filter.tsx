import React, { useEffect, useState } from 'react'
import { BsSortUp, BsSortDown } from 'react-icons/bs';
import { TfiSave as SaveIcon } from 'react-icons/tfi';
import { BiSelectMultiple } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import { changeIsMarkAll, saveToLocalStorage } from '@/features/FilterSlice';
import styles from '../../styles/Filter.module.scss';
import { markAllAsDone } from '@/features/TodoSlice';

const Filter = () => {
    const [isDisabled, setIsDisabled] = useState(false);
    const [isAllMArked, setIsAllMarked] = useState(false);

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

        setIsAllMarked(!isAllMArked)

        dispatch(markAllAsDone(isAllMArked))
        dispatch(changeIsMarkAll(isAllMArked))
    }

    return (
        <div className={styles.filter}>
            <BiSelectMultiple onClick={handleCheckAll} color={iconColor} />
            <BsSortUp color={iconColor} />
            <BsSortDown color={iconColor} />
            <SaveIcon color={iconColor} onClick={() => dispatch(saveToLocalStorage(state))} />
        </div>
    )
}

export default Filter