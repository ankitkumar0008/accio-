import { Route, Router, Routes } from 'react-router-dom'
import Home1 from './Home1'
import About1 from './About1'
import Contact1 from './Contact1'
function Assignment1(){
    return(
        <>
        <Routes>
            <Route path='/' element={<Home1/>}/>
            <Route path='/about' element={<About1/>}/>
            <Route path='/contact' element={<Contact1/>}/>
        </Routes>
        </>
    )
}
export default Assignment1