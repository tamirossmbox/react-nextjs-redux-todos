import React from 'react';
import styles from './ListItem.module.css';

interface ListItemProps {
    id: number | string;
    text: string;
    isDone?: boolean;
}

const ListItem = ({ id, text }: ListItemProps) => {
    return (
        <li key={id} className={styles['list-item']}>
            <span className={styles.text}>{text}</span>
            <button>Delete</button>
        </li>
    )
}

export default ListItem