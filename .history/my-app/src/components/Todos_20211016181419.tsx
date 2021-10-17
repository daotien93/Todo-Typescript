import React  from 'react'
import { useSelector } from 'react-redux'
import { todosSelector } from '../store/reducers/TodoSlice'

const Todos = () => {
    const todos = useSelector(todosSelector)
    return (
        <div className='todo-list'>
            <ul>
            {
                todos.map((todo: { title: string }) => (
                    <li>{todo.title}</li>
                ))
            }
          </ul>
        </div>
    )
}

export default Todos
