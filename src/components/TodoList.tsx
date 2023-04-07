import React from 'react'
import styles from './TodoList.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store';


const TodoList = () => {
    const allTodos = useSelector((state: RootState) => state.todos);

    console.log('allTodos', allTodos.todos);
    
    return (
        <div className={styles.list}>
            {allTodos.todos.map(item => {
                return (
                    <li key={item.id}>
                        <span className={styles.text}>{item.text}</span>
                        <button>Delete</button>
                    </li>
                )
            })}
        </div>
    )
}

export default TodoList