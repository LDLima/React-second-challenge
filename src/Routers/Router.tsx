import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from '../layouts/DefaultLayout/df_index'
import { Home } from '../pages/Home/h_index'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        {/* CheckoutRoute */}
        {/* Sucess Route */}
      </Route>
    </Routes>
  )
}
