import React from 'react'
import { TitleTodo } from '../vite-env'
import { CreateTodo } from './CreateTodo'

interface Props {
    saveTodo: (title: TitleTodo) => void
}

export const Header: React.FC<Props> = ({ saveTodo }) => {
  return (
    <header className='header'>
        <h1>Todo</h1>

        <CreateTodo saveTodo={ saveTodo }></CreateTodo>
    </header>
  )
}
