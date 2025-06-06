import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import SmoothScroll from './components/SmoothScroll'


const App = () => {
  return (
   <SmoothScroll>
     <Home/>
   </SmoothScroll>
  )
}

export default App