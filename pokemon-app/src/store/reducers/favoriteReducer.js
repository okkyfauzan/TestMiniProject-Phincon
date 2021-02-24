const initialState = {
  favorites: []
}

function favoriteReducer(state = initialState, action) {
  switch(action.type) {
    case "ADD_FAVORITE":
      return { ...state, favorites: state.favorites.concat(action.payload)}
    default :
      return state
  }
}

console.log(initialState.favorites, "favredux");

export default favoriteReducer