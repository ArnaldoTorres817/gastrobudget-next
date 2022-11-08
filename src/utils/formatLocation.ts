import { Location } from '@/types/location'

export function formatLocation(location: Location): string {
  if (location.city) {
    return `${location.city}, ${location.state || location.dependency}`
  }

  return `${location.state}, ${location.country}`
}
