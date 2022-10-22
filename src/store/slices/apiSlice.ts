import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BusinessesSearchParams } from '@/types/businessesSearchParams'
import type { Business } from '@/types/business'

const BASE_URL = 'http://localhost:3000/api'

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    businessesSearch: builder.query<Business[], BusinessesSearchParams>({
      query: ({ category, priceLevel, location }) => ({
        url: '/businesses/search',
        params: {
          categories: category,
          location: location,
          price: priceLevel,
        },
      }),
      transformResponse: (res: { businesses: Business[] }) => res.businesses,
    }),
  }),
})

export const { useLazyBusinessesSearchQuery } = api
