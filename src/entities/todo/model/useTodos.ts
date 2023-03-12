import { ITodo, useGetTodosQuery } from 'entities/todo'

export const useTodos = (): ITodo[] => {
	const { data } = useGetTodosQuery()

	const todos = data ?? []

	return todos
}
