import 'app/styles/global.scss';
import { withProviders } from 'app/providers';
import { Pages } from 'pages';

export const App = withProviders(() => <Pages />);
