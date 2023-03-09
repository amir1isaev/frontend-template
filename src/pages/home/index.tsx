import { FC } from 'react';
import { Button } from 'shared/ui';

export const HomePage: FC = () => (
	<div className="p-12 flex flex-col gap-12">
		<h1 className="text-3xl font-bold underline">Hello world!</h1>
		<Button>Название кнопки</Button>
	</div>
);
