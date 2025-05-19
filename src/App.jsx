import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
  )
}

export default App