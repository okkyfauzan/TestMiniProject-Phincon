export const fetchPokemon = (url) => {
  return ( dispatch, getState ) => {
    fetch(url)
    .then(res => res.json())
    .then(data => {
      setTimeout(() => {
        dispatch({
          type: "SET_POKEMONS",
          pokemons: data
        })
        dispatch({
          type: "SET_LOADING",
          loading: false 
        })
      }, 500)
    })
    .catch(err => {
      dispatch({
        type: "SET_ERROR",
        error: err 
      })
    })
  }
}

export const fetchDetail = (url) => {
  return ( dispatch, getState ) => {
    fetch(url)
    .then(res => res.json())
    .then(data => {
      setTimeout(() => {
        const ability = data.abilities.map((e) => e.ability.name)
        const move = data.moves.map((e) => e.move.name)
        const value = {
          name: data.name,
          height: data.height,
          weight: data.weight,
          abilities: ability.join(", "),
          moves: move.slice(0, 10).join(", "),
          types: data.types.map((e) => e.type.name),
          img: data.sprites.other.dream_world.front_default
        }
        // console.log(), 'INI<<')
        dispatch({
          type: "SET_DETAIL",
          detail: value
        })
        dispatch({
          type: "SET_LOADING",
          loading: false 
        })
      }, 500)
    })
    .catch(err => {
      dispatch({
        type: "SET_ERROR",
        error: err 
      })
    })
  }
}