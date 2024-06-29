
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Home from './Pages/Home'
import About from './Pages/About'
import Team from './Pages/Team'

function App() {


  return (
    <>
        <Routes>

            <Route path='/' element={<Layout />}>

                    <Route index element={<Home />} />
                    <Route path='/About' element={<About />} />
                    <Route path='/OurTeam' element={<Team />} />

            </Route>

        </Routes>
    </>
  )
}

export default App
