import CircleMovie from "./circleMovie"

export function Estrenos(){
  return(
  <>
    <h2>Estrenos</h2>

    <article id='trendingPreview-MovieList' className="mt-3 mb-3 grid grid-cols-4 gap-3 justify-items-center">
      <CircleMovie></CircleMovie>    
    </article>
  </>
  )
}

export default Estrenos