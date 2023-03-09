import { ReactNode, Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'

export const withRouter = (component: () => ReactNode) => () =>
	(
		<BrowserRouter>
			<Suspense fallback={<div>loading...</div>}>{component()}</Suspense>
		</BrowserRouter>
	)
