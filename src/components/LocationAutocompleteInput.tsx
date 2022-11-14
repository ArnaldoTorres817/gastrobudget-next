import { useState, useRef, useEffect, useMemo, useCallback } from 'react'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { useLazyLocationAutocompleteQuery } from '@/store/slices/apiSlice'
import {
  reset as resetLocation,
  update as updateLocation,
  selectLocation,
} from '@/store/slices/locationSlice'

import { debounce } from '@/utils/debounce'
import { formatLocation } from '@/utils/formatLocation'

import {
  CloseSmall as CloseIcon,
  LocalTwo as LocationIcon,
} from '@icon-park/react'

import type { FC, ChangeEvent, FocusEvent } from 'react'
import type { Location } from '@/types/location'

const LocationAutocompleteInput: FC = () => {
  const location = useAppSelector(selectLocation)
  const dispatch = useAppDispatch()
  const [trigger, result] = useLazyLocationAutocompleteQuery()

  const [showSuggestions, setShowSuggestions] = useState(false)

  const shouldLocationsBeHidden =
    isEmpty(location) || !showSuggestions || result.isFetching || !result.data

  const locationsJsx = result.data?.map((location) => (
    <li
      key={location.place_id}
      className="px-4 py-2 flex items-center gap-2 hover:bg-zinc-200 cursor-pointer"
      onClick={() => handleSelect(location)}
    >
      <LocationIcon size={20} />
      {formatLocation(location)}
    </li>
  ))

  function isEmpty(s: string) {
    return s === ''
  }

  function openSuggestions() {
    setShowSuggestions(true)
  }

  function closeSuggestions() {
    setShowSuggestions(false)
  }

  const fetchSuggestions = useCallback(
    async (text: string) => {
      if (isEmpty(text)) {
        return
      }

      await trigger(text).unwrap()

      openSuggestions()
    },
    [trigger]
  )

  const fetchSuggestionsDebounced = useMemo(
    () => debounce(fetchSuggestions),
    [fetchSuggestions]
  )

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    dispatch(updateLocation(e.currentTarget.value))
    fetchSuggestionsDebounced(e.currentTarget.value)
  }

  function handleFocus(e: FocusEvent<HTMLInputElement>) {
    fetchSuggestionsDebounced(e.currentTarget.value)
  }

  function handleBtnClearClick() {
    dispatch(resetLocation())
  }

  function handleSelect(selectedLocation: Location) {
    const formatted = formatLocation(selectedLocation)

    dispatch(updateLocation(formatted))

    closeSuggestions()
  }

  return (
    <div className="w-full sm:w-1/2 relative flex flex-col items-center">
      <div className="relative w-full">
        <input
          type="text"
          value={location}
          onChange={handleChange}
          onFocus={handleFocus}
          placeholder="Enter a location."
          required
          className="w-full pl-4 pr-6 py-3 border rounded-xl focus-visible:outline-primary focus-visible:outline focus-visible:outline-2"
          id="location"
          name="location"
        />
        <button
          type="button"
          name="clear"
          className="absolute top-1/2 -translate-y-1/2 right-2"
          onClick={handleBtnClearClick}
        >
          <CloseIcon size={16} />
        </button>
      </div>

      <ul
        className={`${
          shouldLocationsBeHidden && 'hidden'
        } absolute top-full z-10 w-full max-h-52 py-3 mt-1 border rounded shadow bg-white overflow-auto`}
      >
        {locationsJsx}
        {result.isError && (
          <li className="px-4 py-2 flex items-center gap-2 hover:bg-zinc-200">
            An error occurred.
          </li>
        )}
      </ul>
    </div>
  )
}

export default LocationAutocompleteInput
