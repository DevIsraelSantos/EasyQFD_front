import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PageAuthRst } from './pages/PageAuthRst'
import { PageAuthUp } from './pages/PageAuthUp'
import {PageHome} from './pages/PageHome'
import {PageLogin} from './pages/PageLogin'

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PageHome/>}></Route>
        <Route path='/auth/in' element={<PageLogin/>}></Route>
        <Route path='/auth/Up' element={<PageAuthUp/>}></Route>
        <Route path='/auth/rst' element={<PageAuthRst/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}