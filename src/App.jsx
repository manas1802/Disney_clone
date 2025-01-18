import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Slider from './Components/Slider'
import ProductionHouse from './Components/ProductionHouse'
import GenreMovieList from './Components/GenreMovieList'
import MovieList from './Components/MovieList'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <h1 className="-white">
      <Header />
      <Slider/>
      <ProductionHouse/>
      <GenreMovieList/>
    </h1>
       
    </>
  )
}

export default App
