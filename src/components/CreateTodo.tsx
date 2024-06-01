import React, { useState } from 'react'
import { TitleTodo } from '../vite-env'

interface Props {
    saveTodo: (title: TitleTodo) => void
}

export const CreateTodo: React.FC<Props> = ({ saveTodo }) => {
  const [inputValue, setInputValue] = useState<string>('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    saveTodo({
      title: inputValue
    })
    setInputValue('')
  }
  return (
    <form onSubmit={handleSubmit}>
        <input className='new-todo' type="text" placeholder='NewTodo' autoFocus value={inputValue} onChange={ (event) => setInputValue(event.target.value) } />
    </form>
  )
}
