declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production'
      NEXT_PUBLIC_YELP_API_KEY: string
      NEXT_PUBLIC_GEOAPIFY_API_KEY: string
    }
  }
}

export {}
