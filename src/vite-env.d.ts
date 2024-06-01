/// <reference types="vite/client" />
import { TODO_FILTERS } from './const'

type IDTodo = `${string}-${string}-${string}-${string}-${string}`;

export interface Todo{
    id: IDTodo;
    title: string;
    completed: boolean;
}

// ? Algo que se considera buena práctica, sería que cualquier tipo de dato, que sea del negocio, podemos exportar el tipo.
// ? Pick nos permite seleccionar un subconjunto de propiedades de un tipo.
export type TitleTodo = Pick<Todo, 'title'>;
export type CompletedTodo = Pick<Todo, 'completed'>;

// ! También podemos utilizar Omit para omitir propiedades de un tipo.
export type TodoWithoutId = Omit<Todo, 'id'>;

export type ListOfTodos = Todo[];

// * typeof TODO_FILTERS[keyof typeof TODO_FILTERS]: es como decir, cualquier key del objeto TODO_FILTERS
export type FilterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS];
