
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home/Home'

function App() {
  

  return (
    <>
    <BrowserRouter>
      <Header/>
    <Routes>
      <Route path={"/"} exact={true} element={<Home/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

