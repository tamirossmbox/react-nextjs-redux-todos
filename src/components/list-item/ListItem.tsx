import React from 'react';
import styles from './ListItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '@/features/TodoSlice';

interface ListItemProps {
    id: number | string;
    text: string;
    isDone?: boolean;
}

const ListItem = ({ id, text }: ListItemProps) => {
    const dispatch = useDispatch();

    const handleDeleteTodo = () => {
        dispatch(deleteTodo(id))
    }
    return (
        <li key={id} className={styles['list-item']}>
            <span className={styles.text}>{text}</span>
            <button onClick={handleDeleteTodo}>Delete</button>
        </li>
    )
}

export default ListItem