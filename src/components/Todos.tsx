import React from 'react'
import { type ListOfTodos, Todo } from '../vite-env'
import TodoItem from './Todo'

interface Props {
  todos: ListOfTodos
  onRemoveTodos: (id: Pick <Todo, 'id'>) => void
  onToogleCompleted: ({ id, completed }: Pick<Todo, 'id' | 'completed'>) => void
}

// ? Esto sería como una forma de pasarle parámetros a los tipos
// * <Props> es un genérico, ya que pueden tomar cualquier forma
const Todos: React.FC<Props> = ({ todos, onRemoveTodos, onToogleCompleted }) => {
  return (
    <ul className='todo-list'>
        {
            todos.map((todo) => (
                <li key={todo.id} className={todo.completed ? 'completed' : ''}>
                    <TodoItem key={todo.id} id={todo.id} title={todo.title} completed = {todo.completed} onRemoveTodo = {onRemoveTodos} onToogleCompleted = {onToogleCompleted} />
                </li>
            ))
        }
    </ul>
  )
}

export default Todos
