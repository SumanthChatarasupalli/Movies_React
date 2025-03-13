import "./App.css"
import Home from './Pages/Home'
import { Routes,Route } from 'react-router-dom'
import Favourites from './Pages/Favourites'
import { useNavigate } from 'react-router-dom'
import Navbar from './Components/Navbar'
import { MovieProvider } from "./context/MovieContext"
function App() {
  const navigate =useNavigate();
 
  return (
    <MovieProvider>
      <Navbar />
    <main className='main-content'>
      {/* <button onClick={showfavs} >Favourites</button> */}
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/favourites" element={<Favourites/>}/>
     </Routes>
    </main>
    </MovieProvider>  )
}

export default App
