import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PageAuthRst } from './pages/PageAuthRst'
import {PageLogin} from './pages/PageLogin'

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PageLogin/>}></Route>
        <Route path='/auth/in' element={<PageLogin/>}></Route>
        <Route path='/auth/Up' element={<PageLogin/>}></Route>
        <Route path='/auth/rst' element={<PageAuthRst/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}