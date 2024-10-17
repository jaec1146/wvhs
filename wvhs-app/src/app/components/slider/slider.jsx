import React from 'react'
import EmblaCarousel from '../carousel/EmblaCarousel'
import '../../css/base.css'
import '../../css/sandbox.css'
import '../../css/embla.css'

const OPTIONS = { dragFree: true, loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export function slides() {
  return(
    <>
      <h2>Recomendaciones</h2>
      <EmblaCarousel slides={SLIDES} options={OPTIONS}></EmblaCarousel>
    </>
  )
}

export default slides