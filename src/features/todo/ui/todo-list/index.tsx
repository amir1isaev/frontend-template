import { FC } from 'react'
import { ITodo, TodoItem } from 'entities/todo'
import styles from './styles.module.scss'

interface IProps {
	todos: ITodo[]
}

export const TodoList: FC<IProps> = (p) => {
	const { todos } = p

	return (
		<ul className={styles['todo-list']}>
			{todos.map((todo) => (
				<TodoItem key={todo.id} todo={todo} />
			))}
		</ul>
	)
}
