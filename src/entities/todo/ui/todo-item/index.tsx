import { FC } from 'react'
import { ITodo } from 'entities/todo'

interface IProps {
	todo: ITodo
}

export const TodoItem: FC<IProps> = (p) => {
	const { todo } = p

	return <li>{todo.title}</li>
}
