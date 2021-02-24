const initialState = {
  pokemons: [],
  detail: [],
  loading: true,
  error: null
}

function pokemonReducer(state = initialState, action) {
  switch(action.type) {
    case "SET_POKEMONS":
      return { ...state, pokemons: action.pokemons}
    case "SET_DETAIL":
      return { ...state, detail: action.detail}
    case "SET_LOADING":
      return { ...state, loading: action.loading}
    case "SET_ERROR":
      return { ...state, pokemons: action.error}
    default :
      return state
  }
}

export default pokemonReducer