import { Routes, Route } from 'react-router-dom'
import Bookkeeping from './bookkeeping'
import Dashboard from './dashboard'

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/bookeeping" element={<Bookkeeping />}></Route>
    </Routes>
  )
}
