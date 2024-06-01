import React from 'react'
import { FILTERS_BUTTONS } from '../const'
import { FilterValue } from '../vite-env'

interface Props {
    filterSelected: FilterValue
    onFilterChange: (filter: FilterValue) => void
}
export const Filters: React.FC<Props> = ({ filterSelected, onFilterChange }) => {
  return (
        <ul className='filters'>
            {
                // ? Object.entries devuelve un array de arrays con las propiedades de un objeto
                Object.entries(FILTERS_BUTTONS).map(([key, { literal }]) => {
                  const isSelected = key === filterSelected
                  const className = isSelected ? 'selected' : ''
                  return (
                        <li key={key}>
                            <a href='#/' className={className} onClick={
                                (event) => {
                                  event.preventDefault()
                                  onFilterChange(key as FilterValue)
                                }
                            }>
                                {literal}
                            </a>
                        </li>
                  )
                })
            }
        </ul>
  )
}
