"use client";

// import Login from './components/login'
import Estrenos  from './components/Estrenos'
import Slider from './components/slider/Slider'
import NavBar from './components/bar/navbar'


function HomePage(){
  return (
    <>
      <div className='h-full bg-tertiary flex flex-col items-center '>
        <div className='flex justify-center items-center'>
          <div className='w-24 h-24 bg-cover bg-icono-wvhs'></div>
          <h1 className='ml-5 text-default font-RockSalt text-center'>Web Video <br/>Home System</h1>
        </div>
        <Estrenos/>
        <Slider/>
        <NavBar/>  
      </div>
    </>
  )
}

export default HomePage