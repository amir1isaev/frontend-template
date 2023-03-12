import { FC } from 'react'
import { useRoutes } from 'react-router-dom'
import { TodoPage } from 'pages/todo'
import { browserPaths } from 'shared/config'

export const Pages: FC = () => {
	const routes = useRoutes([
		{
			path: browserPaths.ROOT,
			element: <TodoPage />,
		},
	])

	return routes
}
