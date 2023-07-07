export function addToPriority (chore) {
  return {
    type: 'ADD_TO_PRIORITY',
    payload: chore
  }
}

export function removeFromPriority (choreId) {
  return {
    type: 'REMOVE_FROM_PRIORITY',
    payload: choreId
  }
}
