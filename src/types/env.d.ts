declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production'
      YELP_API_KEY: string
      GEOAPIFY_API_KEY: string
    }
  }
}

export {}
