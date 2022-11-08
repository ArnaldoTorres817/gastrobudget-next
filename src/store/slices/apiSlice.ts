import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { BusinessesSearchParams } from '@/types/businessesSearchParams'
import type { Business } from '@/types/business'
import type { Location } from '@/types/location'

const BASE_PATH = '/api'

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: BASE_PATH }),
  endpoints: (builder) => ({
    businessesSearch: builder.query<Business[], BusinessesSearchParams>({
      query: ({ category, priceLevel, location }) => ({
        url: '/businesses/search',
        params: {
          categories: category,
          location: location,
          price: priceLevel,
        },
        headers: {
          authorization: `Bearer ${process.env.NEXT_PUBLIC_YELP_API_KEY}`,
        },
      }),
      transformResponse: (res: { businesses: Business[] }) => res.businesses,
    }),
    locationAutocomplete: builder.query<Location[], string>({
      query: (text) => ({
        url: '/geocode/autocomplete',
        params: {
          text: text.normalize(),
          type: 'city',
          lang: 'en',
          format: 'json',
          filter: 'countrycode:pr,us',
          apiKey: process.env.NEXT_PUBLIC_GEOAPIFY_API_KEY,
        },
      }),
      transformResponse: (res: { results: Location[] }) => res.results,
    }),
  }),
})

export const {
  useLazyBusinessesSearchQuery,
  useLazyLocationAutocompleteQuery,
} = api
