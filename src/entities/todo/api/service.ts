import { ITodo } from 'entities/todo'
import { appAPI, API_TAGS } from 'shared/api'

export const todoAPI = appAPI.injectEndpoints({
	endpoints: (build) => ({
		getTodos: build.query<ITodo[], void>({
			query: () => ({
				url: `/todos/`,
			}),
			providesTags: () => [API_TAGS.TODOS],
		}),
	}),
	overrideExisting: false,
})

export const { useGetTodosQuery } = todoAPI
