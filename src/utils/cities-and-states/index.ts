import citiesAndStates from './cities-and-states.json'

export function getStatesOptions() {
  return citiesAndStates.map((state) => ({
    label: state.name,
    value: state.initials
  }))
}

export function getStateByInitials(stateInitials: string) {
  const stateIndex = citiesAndStates.findIndex(
    (item) => item.initials === stateInitials
  )
  const currentState = citiesAndStates[stateIndex]

  return {
    label: currentState.name,
    value: currentState.initials
  }
}

export function getCityOptionsByState(stateInitials: string | number) {
  const stateIndex = citiesAndStates.findIndex(
    (item) => item.initials === stateInitials
  )
  const currentState = citiesAndStates[stateIndex]

  return currentState.cities.map((city) => ({
    label: city,
    value: city
  }))
}
