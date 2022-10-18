import {
  CloseSmall as CloseIcon,
  LocalTwo as LocationIcon,
} from '@icon-park/react'

import type { FC } from 'react'
import type { Location } from '@/types/location'

const LocationAutocompleteInput: FC = () => {
  function getFormattedLocation(location: Location): string {
    if (location.city !== undefined) {
      return `${location.city}, ${location.state}`
    }

    return `${location.state}, ${location.country}`
  }

  return (
    <div className="w-80 relative flex flex-col items-center">
      <div className="relative w-full">
        <input
          type="text"
          required
          className="w-full pl-4 pr-6 py-3 border rounded-xl focus-visible:outline-primary focus-visible:outline focus-visible:outline-2"
          id="location"
          name="location"
        />
        <button
          type="button"
          className="absolute top-1/2 -translate-y-1/2 right-2"
        >
          <CloseIcon size={16} />
        </button>
      </div>

      <ul className="absolute top-full z-10 w-full max-h-52 py-3 mt-1 border rounded shadow bg-white overflow-auto">
        <li className="px-4 py-2 flex items-center gap-2 hover:bg-zinc-200 cursor-pointer">
          <LocationIcon size={20} />
          {/* {getFormattedLocation(location)} */}
        </li>
      </ul>
    </div>
  )
}

export default LocationAutocompleteInput
