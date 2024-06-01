export const TODO_FILTERS = {
  ALL: 'all',
  ACTIVE: 'active',
  COMPLETED: 'completed'
} as const
// ? as const es de TS, lo que hace es volver a los valores de un objeto inmutable

export const FILTERS_BUTTONS = {
  [TODO_FILTERS.ALL]: {
    literal: 'Todos',
    href: '/?fiter=all'
  },
  [TODO_FILTERS.ACTIVE]: {
    literal: 'Activos',
    href: '/?fiter=active'
  },
  [TODO_FILTERS.COMPLETED]: {
    literal: 'Completados',
    href: '/?fiter=completed'
  }
} as const
