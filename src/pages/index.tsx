import { Routes, Route } from 'react-router-dom'
import AccountantPage from './AccountantPage'
import Page2 from './page2'

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<AccountantPage />}></Route>
      <Route path="/page2" element={<Page2 />}></Route>
    </Routes>
  )
}
