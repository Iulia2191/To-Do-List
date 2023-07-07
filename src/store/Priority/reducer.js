export const initialState = {
  chores: []
}

export function priorityReducer (state, action) {
  switch (action.type) {
    case 'ADD_TO_PRIORITY': {
      const foundChore = state.chores.find(
        chore => chore.id === action.payload.id
      )

      if (foundChore) {
        return state
      } else {
        return {
          chores: [...state.chores, action.payload]
        }
      }
    }
    case 'REMOVE_FROM_PRIORITY': {
      const filteredChores = state.chores.filter(
        chore => chore.id !== action.payload
      )
      return {
        chores: filteredChores
      }
    }
    default: {
      return state
    }
  }
}
