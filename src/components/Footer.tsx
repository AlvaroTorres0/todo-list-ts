import React from 'react'
import { Filters } from './Filters'
import { FilterValue } from '../vite-env'

interface Props {
    activeCount: number;
    completedCount: number;
    filterSelected: FilterValue
    onClearCompleted: () => void;
    handleFilterChange: (filter: FilterValue) => void;
}

export const Footer: React.FC<Props> = ({ activeCount, completedCount = 0, filterSelected, onClearCompleted, handleFilterChange }) => {
  return (
        <footer className='footer'>
            <span className='todo-count'>
                <strong>{activeCount}</strong> Tareas pendientes
            </span>

            <Filters filterSelected={filterSelected} onFilterChange={ handleFilterChange }></Filters>

            {
                !!completedCount && (
                    <button className='clear-completed' onClick={onClearCompleted}>
                        Limpiar completados
                    </button>
                )
            }
        </footer>
  )
}
