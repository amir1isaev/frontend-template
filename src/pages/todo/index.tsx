import { FC } from 'react'
import { TodoList } from 'features/todo'
import { useTodos } from 'entities/todo'

export const TodoPage: FC = () => {
	const todos = useTodos()

	return (
		<div className="p-2">
			<TodoList todos={todos} />
		</div>
	)
}
