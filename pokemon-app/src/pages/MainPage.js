import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { fetchPokemon } from '../store/actions/pokemonAction'

function MainPage() {
  const dispatch = useDispatch()
  const history = useHistory()
  const { pokemons, loading, error } = useSelector(state => state.pokemonReducer)

  useEffect(() => {
    dispatch(fetchPokemon(`https://pokeapi.co/api/v2/pokemon`))
  }, [dispatch])

  function goDetail(id) {
    history.push(`/detail/${id}`)
  }

  function goFavorite() {
    history.push("/favorite")
  }

  if(loading) {
    return <h3>Please wait...</h3>
  } else if(error) {
    return <h3>400 Bad Request</h3>
  } else {
    return (
      <>
        <div className="App">
          <div className="container mt-3">
            <h1>List of Pokemon</h1>
            <h5>Total Pokemon: {pokemons.results.length}</h5>
            <button className="btn btn-warning btn-sm" onClick={() => goFavorite()}>My Pokemon</button>
              <table className="table" style={{ marginTop: "40px"}}>
                <thead>
                  <tr className="table-dark">
                    <th scope="col">No</th>
                    <th scope="col">Name</th>
                    <th scope="col">Description</th>
                  </tr>
                </thead>
                {
                  pokemons.results.map((pokemon, index) => {
                    return (
                      <tbody key={index} >
                        <tr>
                          <th scope="row">{index + 1 }</th>
                          <td>{pokemon.name}</td>
                          <td><button onClick={(e) => goDetail(pokemon.url.split("/")[pokemon.url.split("/").length - 2])} 
                            type="button" 
                            className="btn btn-info btn-sm">
                            <i className='fas fa-search'></i> details</button>
                          </td>
                          
                        </tr>
                      </tbody>
                      
                    )
                  })
                  
                }
              </table>
          </div>
        </div>
      </>
    )
  }
}

export default MainPage