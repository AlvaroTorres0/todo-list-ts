import React from 'react'
import { Todo } from '../vite-env'

interface Props extends Todo {
    onRemoveTodo: (id: Pick <Todo, 'id'>) => void
    onToogleCompleted: ({ id, completed }: Pick<Todo, 'id' | 'completed'>) => void
}

const TodoItem: React.FC<Props> = ({ id, title, completed, onRemoveTodo, onToogleCompleted }) => {
  const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onToogleCompleted({ id, completed: event.target.checked })
  }

  return (
    <div className='view'>
      <input className='toggle' type='checkbox' checked={completed} onChange={handleChangeCheckbox} />
      <label htmlFor="">{title}</label>

      <button className='destroy' onClick={() => onRemoveTodo({ id })}></button>
    </div>
  )
}

export default TodoItem
