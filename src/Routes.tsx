import { BrowserRouter, Routes, Route } from 'react-router-dom'

const defaultElemnt = () => {
  return (
      <div>Online</div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={defaultElemnt()}></Route>
      </Routes>
    </BrowserRouter>
  )
}