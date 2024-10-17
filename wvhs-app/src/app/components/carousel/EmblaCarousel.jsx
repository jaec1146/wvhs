'use client'

import {React,useState, useEffect} from 'react'
import { DotButton, useDotButton } from './EmblaCarouselDotButton.jsx'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons.jsx'
import useEmblaCarousel from 'embla-carousel-react'

const EmblaCarousel = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)


  // the movie db favorite movies

  const [movieList,setMovieList] = useState([])

  const getMovie = () =>{
    fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=f0566de30adc1dae427ebb2fbc472ad8')
    .then(res => res.json())
    .then(json => setMovieList(json.results))
  }

  useEffect(()=>{
    getMovie()
  },[])

  console.log(movieList)

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {movieList.map( movie => ( 
            <div className="embla__slide" key={movie.id}>
              <div className="embla__slide__number">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel
