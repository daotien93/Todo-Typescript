import React  from 'react'
import { useSelector } from 'react-redux'
import { todosSelector } from '../store/reducers/TodoSlice'
import TodoForm from './TodoForm'

const Todos = () => {
    const todos = useSelector(todosSelector)
    const onToggleChane = () => {

    }
    return (
        <div className='todo-list'>
            <TodoForm/>
            <ul>
            {
                todos.map((todo: { title: string, id: number, completed: boolean }) => (
                    <li key={todo.id} className={todo.completed ? 'completed' : ''}>
                        {todo.title}
                        <input type="checkbox"
                            checked={todo.completed}
                            onChange = {() => onToggleChange}
                        
                        />
                    </li>
                ))
            }
          </ul>
        </div>
    )
}

export default Todos
