import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { appAPI } from 'shared/api'

export const setupStore = () => {
	return configureStore({
		reducer: {
			[appAPI.reducerPath]: appAPI.reducer,
		},
		middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), appAPI.middleware],
		devTools: process.env.NODE_ENV === 'development',
	})
}

export const store = setupStore()
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = typeof store.dispatch
export type AppState = ReturnType<AppStore['getState']>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>
