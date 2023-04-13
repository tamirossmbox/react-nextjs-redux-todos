import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import { updateTodos } from '@/features/TodoSlice';
import ListItem from './list-item/ListItem';
import styles from './TodoList.module.scss';


const TodoList = () => {
    const allTodos = useSelector((state: RootState) => state.todos);


    const dispatch = useDispatch();

    useEffect(() => {
        const savedItems = localStorage.getItem('todos');
        if (savedItems) {
            dispatch(updateTodos(JSON.parse(savedItems)))
        }
    }, [dispatch])

    return (
        <>
            <div className={styles.list}>
                {allTodos.todos.map(item =>
                    <ListItem key={item.id} id={item.id} text={item.text} isDone={item.isDone} />
                )}
            </div>
            {allTodos.todos.length === 0 && <h2 className={styles['no-todo-msg']}>Nice! Nothing left todo :)</h2>}
        </>
    )
}

export default TodoList