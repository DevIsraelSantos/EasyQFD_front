import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {PageLogin} from './pages/PageLogin'

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={PageLogin()}></Route>
      </Routes>
    </BrowserRouter>
  )
}