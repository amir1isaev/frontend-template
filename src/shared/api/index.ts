import {fetchBaseQuery, createApi} from '@reduxjs/toolkit/dist/query/react'
import {API_URL} from 'shared/config'

export enum API_TAGS {
    TODOS = 'TODOS',
    TODO = 'TODO',
}

const TAGS:string[] = Object.keys(API_TAGS);


export const appAPI = createApi({
    baseQuery: fetchBaseQuery({baseUrl: API_URL}),
    reducerPath: 'app-api',
    tagTypes: TAGS,
    endpoints: () => ({}),
})
