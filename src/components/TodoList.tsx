import React from 'react'
import styles from './TodoList.module.css';

interface TodosProps {
    todos: any[]
}
const TodoList = ({ todos }: TodosProps) => {
    return (
        <div className={styles.list}>{todos.map(item => {
            return <li key={item.id}>
                <span className={styles.text}>{item.text}</span>
                <button>Delete</button>
                </li>
        })}</div>
    )
}

export default TodoList