'use client'
import {React, useState, useEffect} from 'react'

export function CircleMovie(){
  const [movieList,setMovieList] = useState([])

  const getMovie = () =>{
    fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=f0566de30adc1dae427ebb2fbc472ad8')
    .then(res => res.json())
    .then(json => setMovieList(json.results))
  }

  useEffect(()=>{
    getMovie()
  },[])
  
  console.log(movieList)

  return(
    <>
      {movieList.map((movie)=>(
        <div className='movie-container'>
          <img className='movie-image' src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}/>
        </div>
      ))}
    </>
  )
}

export default CircleMovie