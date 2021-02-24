import React from 'react'
import { useSelector } from 'react-redux'

function Favorite() {
  const myPokemon = useSelector(state => state.favoriteReducer.favorites)
  return (
    <>
        <div className="App">
          <div className="container mt-3">
            <h1>My Pokemon</h1>
              <table className="table" style={{ marginTop: "40px"}}>
                <thead>
                  <tr className="table-dark">
                    <th scope="col">No</th>
                    <th scope="col">Nickname</th>
                  </tr>
                </thead>
                {
                  myPokemon.map((pokemon, index) => {
                    return (
                      <tbody key={index} >
                        <tr>
                          <th scope="row">{index + 1 }</th>
                          <td>{pokemon}</td>
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

export default Favorite