import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/dist/query/react'
import { API_URL } from 'shared/config'

export enum API_TAGS {
	TODOS = 'TODOS',
	TODO = 'TODO',
}

export const appAPI = createApi({
	baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
	reducerPath: 'app-api',
	tagTypes: [API_TAGS.TODO, API_TAGS.TODOS],
	endpoints: () => ({}),
})
