import React, { useEffect, useState } from 'react'
import { BsSortAlphaUpAlt, BsSortAlphaDown } from 'react-icons/bs';
import { TfiSave as SaveIcon } from 'react-icons/tfi';
import { BiSelectMultiple } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import { changeIsMarkAll, saveToLocalStorage } from '@/features/FilterSlice';
import { markAllAsDone, sortTodos } from '@/features/TodoSlice';
import styles from './Filter.module.scss';

enum SortDirection {
    Asc = 'asc',
    Dsc = 'dsc'
}

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

    const handleSortClick = (dir: SortDirection = SortDirection.Asc) => {
        dispatch(sortTodos(dir))
    }

    return (
        <div className={styles.filter}>
            <BiSelectMultiple onClick={handleCheckAll} color={iconColor} />
            <BsSortAlphaUpAlt color={iconColor} onClick={() => handleSortClick()}/>
            <BsSortAlphaDown color={iconColor} onClick={() => handleSortClick(SortDirection.Dsc)}/>
            <SaveIcon color={iconColor} onClick={() => dispatch(saveToLocalStorage(state))} />
        </div>
    )
}

export default Filter