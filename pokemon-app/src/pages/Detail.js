import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { fetchDetail } from '../store/actions/pokemonAction'

function Detail() {
  const { id } = useParams()
  const history = useHistory()
  const dispatch = useDispatch()
  const { detail, loading, error } = useSelector(state => state.pokemonReducer)
  const [flag, setFlag] = useState(false)
  const [nickname, setNickname] = useState("")

  useEffect(() => {
    dispatch(fetchDetail(`https://pokeapi.co/api/v2/pokemon/${id}`))
  }, [id, dispatch])

  function toHome() {
    history.push('/')
  }
  function toRandom() {
    const random = Math.floor(Math.random() * Math.floor(2))
    if(+random === 1) {
      setFlag(true)
      console.log(random, "<<<")
    } else {
      setFlag(false)
      console.log("Failed to catch")
    }
    
  }

  function onSubmit (e) {
    e.preventDefault()
    console.log(nickname);
    dispatch({
      type: "ADD_FAVORITE",
      payload: nickname
    })
    setNickname("")
  }
  
  if(loading) {
    return <h3>Please wait...</h3>
  } else if(error) {
    return <h3>400 Bad Request</h3>
  } else {
    return (
      <>
        <div className="container" style={{ marginLeft: "20%"}}>
          <div className="card mt-5" style={{ height: "500px", width: "800px"}}>
            <div className="row g-0">
              <div className="col-md-6">
                <img src={detail.img} style={{ height: "500px", width: "400px", marginLeft: "-100px"}} alt="..."/>
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <h1 className="card-title"><i className='fas fa-tags' style={{color:"#e66767"}}></i> {detail.name}</h1><hr/>
                  <p className="card-text">Types: {detail.types}</p>
                  <p className="card-text">Moves: {detail.moves}</p>
                  <p className="card-text">Abilities: {detail.abilities}</p>
                  <p className="card-text">Height: {detail.height}</p>
                  <p className="card-text">Weight: {detail.weight}</p>
                  <button type="button" onClick={() => toHome()} className="btn btn-secondary btn-sm "><i className='fas fa-undo'></i> Back</button>
                  <button type="button" onClick={() => toRandom()} className="btn btn-success btn-sm ms-2"><i className='fas fa-archive'></i> Catch</button>
                  {
                    flag === true? 
                    <form className="row g-2 mt-3" >
                      <div class="mb-3">
                        <label htmlFor="nickname" className="form-label">Nickname</label>
                        <input type="text" onChange={(e) => setNickname(e.target.value) } value={ nickname } name="nickname" id="nickname" className="form-control" placeholder="input nickname you want"/>
                        
                      </div>
                      <div class="col-auto">
                        <button onClick={onSubmit} className="btn btn-primary btn-sm mb-3">Add Favorite</button>
                      </div>
                      
                    </form>
                    : 
                    <p>Try Again</p>
                  }
                  
                </div>
              </div>
              </div>
            </div>
          </div>
      </>
    )
  }
}

export default Detail