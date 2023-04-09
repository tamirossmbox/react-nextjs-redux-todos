import React from 'react';
import styles from './ListItem.module.css';
import { useDispatch } from 'react-redux';
import { changeIsDone, deleteTodo } from '@/features/TodoSlice';
import { BsTrash } from 'react-icons/bs';
import { RiCheckboxBlankCircleLine, RiCheckboxCircleFill } from 'react-icons/ri'
import { AiOutlineCopy } from 'react-icons/ai';
import { copyToClipboard } from '@/app/utils';

interface ListItemProps {
    id: number | string;
    text: string;
    isDone?: boolean;
}

const ListItem = ({ id, text, isDone }: ListItemProps) => {
    const dispatch = useDispatch();

    const handleDeleteTodo = () => {
        dispatch(deleteTodo(id))
    }

    const handleClick = () => {
        dispatch(changeIsDone({ id, isDone }))
    }

    const handleCopyClick = () => {
        copyToClipboard(text)
    }

    return (
        <li key={id} className={styles['list-item']}>

            <span className={styles.text} onClick={handleClick}>
                {isDone ? <RiCheckboxCircleFill color='green'/> : <RiCheckboxBlankCircleLine />}
                {text}
            </span>

            <div className={styles['action-box']}>
                <AiOutlineCopy onClick={handleCopyClick}/>
                <BsTrash onClick={handleDeleteTodo} className={`${styles.icon} ${styles['delete-icon']}`} />
            </div>
        </li>
    )
}

export default ListItem