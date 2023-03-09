import { FC } from 'react';
import { useRoutes } from 'react-router-dom';
import { HomePage } from 'pages/home';
import { browserPaths } from 'shared/config';

export const Pages: FC = () => {
	const routes = useRoutes([
		{
			path: browserPaths.ROOT,
			element: <HomePage />,
		},
	]);

	return routes;
};
