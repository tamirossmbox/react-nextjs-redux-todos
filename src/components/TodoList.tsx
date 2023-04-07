import React from 'react'
import styles from './TodoList.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import ListItem from './list-item/ListItem';


const TodoList = () => {
    const allTodos = useSelector((state: RootState) => state.todos);

    return (
        <>
            <div className={styles.list}>
                {allTodos.todos.map(item =>
                    <ListItem key={item.id} id={item.id} text={item.text} isDone={item.isDone} />
                )}
            </div>
            {allTodos.todos.length === 0 && <h2>Nice! Nothing left todo :)</h2>}
        </>
    )
}

export default TodoList