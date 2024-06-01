import React, { useState } from 'react'
import Todos from './components/Todos'
import { FilterValue, TitleTodo, Todo } from './vite-env'
import { TODO_FILTERS } from './const'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

const mockTodos: Todo[] = [
  { id: 'hatvawtd-dawdawd-awd-awd-awda', title: 'Learn React', completed: true },
  { id: 'awd-wadawd-ad-345345-3453', title: 'Learn TypeScript', completed: true },
  { id: 'awdawd-awd-awdawd-eqwda-awdawd', title: 'Learn Vite', completed: false }
]

// ? Por defecto TypeScript infiere correctamente que los componentes de React son funciones que devuelven un elemento de JSX.

// * React.FC es un tipo genérico que recibe un tipo de objeto que representa las propiedades que recibe el componente (Functional Component).
const App: React.FC = (): React.JSX.Element => {
  const [todos, setTodos] = useState(mockTodos)
  // ! Usamos los diamantes para especificar que tenemos cualquier valor de FilterValue
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)

  const handleRemoveTodos = ({ id }: Pick <Todo, 'id'>): void => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }

  const handleOnToggleCompleted = ({ id, completed }: Pick<Todo, 'id' | 'completed'>): void => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }
      return todo
    })
    setTodos(newTodos)
  }

  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter)
  }

  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.length - activeCount

  const filteredTodos = todos.filter((todo) => {
    if (filterSelected === TODO_FILTERS.ACTIVE) {
      return !todo.completed
    }
    if (filterSelected === TODO_FILTERS.COMPLETED) {
      return todo.completed
    }
    return todos
  })

  const handleOnClearCompleted = () => {
    const newTodos = todos.filter((todo) => !todo.completed)
    setTodos(newTodos)
  }

  const handleSaveTodo = ({ title }: TitleTodo): void => {
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      completed: false
    }

    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
  }

  return (
    <div className='todoapp'>
      <Header saveTodo={handleSaveTodo}></Header>
      <Todos todos={filteredTodos} onRemoveTodos = {handleRemoveTodos} onToogleCompleted = {handleOnToggleCompleted} />

      <Footer
      activeCount={ activeCount}
      completedCount={ completedCount }
      filterSelected={filterSelected}
      onClearCompleted={handleOnClearCompleted}
      handleFilterChange={handleFilterChange}/>
    </div>
  )
}

export default App
