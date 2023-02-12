import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//import Home from '../../Pages/Home/index'
import Home from '../Components/Pages/Home/index'
import Harry from '../Components/Pages/HarryPages/index'
import About from '../Components/Pages/About/index'
import ErrorFunc from '../Components/Pages/Erro'
import Desenho from '../Components/Pages/Desenho/index'

export default function Rotas() {
    return(
        <Router>            
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/harry-potter' element={<Harry/>} />
                <Route path='/sobre' element={<About/>} />
                <Route path='/error' element={<ErrorFunc/>} />
                <Route path='/desenho' element={<Desenho/>} />
            </Routes>
            
        </Router>
    )
}