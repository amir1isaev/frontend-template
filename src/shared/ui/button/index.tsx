import clsx from 'clsx';
import { ComponentProps, ElementType, ReactNode } from 'react';
import styles from './styles.module.scss';

const element = 'button';

type ButtonOwnProps<E extends ElementType = ElementType> = {
	children: ReactNode;
	as?: E;
};

type ButtonProps<E extends ElementType> = ButtonOwnProps<E> &
	Omit<ComponentProps<E>, keyof ButtonOwnProps>;

export function Button<E extends ElementType = typeof element>(
	p: ButtonProps<E>
): JSX.Element {
	const { children, as = element, ...otherProps } = p;

	const TagName = as;

	return (
		<TagName {...otherProps} className={clsx(styles.button, p.className)}>
			{children}
		</TagName>
	);
}
