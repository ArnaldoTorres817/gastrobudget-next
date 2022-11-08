export interface Location {
  dependency: string
  datasource: Datasource
  city: string
  county: string
  state: string
  postcode: string
  country: string
  country_code: string
  lon: number
  lat: number
  state_code: string
  formatted: string
  address_line1: string
  address_line2: string
  category: string
  result_type: string
  rank: Rank
  place_id: string
  bbox: Bbox
}

interface Datasource {
  sourcename: string
  attribution: string
  license: string
  url: string
}

interface Rank {
  importance: number
  confidence: number
  confidence_city_level: number
  match_type: string
}

interface Bbox {
  lon1: number
  lat1: number
  lon2: number
  lat2: number
}
