import { useEffect, useState } from 'react';

const THEME_KEY = 'theme';

enum ETheme {
	dark = 'dark',
	light = 'light',
}

export const useTheme = () => {
	const [theme, setTheme] = useState<ETheme>(localStorage.theme);
	const colorTheme = theme === ETheme.dark ? ETheme.light : ETheme.dark;

	useEffect(() => {
		const root = window.document.documentElement;
		root.classList.remove(colorTheme);
		root.classList.add(theme);

		localStorage.setItem(THEME_KEY, theme);
	}, [colorTheme, setTheme, theme]);

	return { theme: colorTheme, setTheme };
};
