import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header/h_index'

import { DefaultLayoutContainer } from './df_styles'

export function DefaultLayout() {
  return (
    <DefaultLayoutContainer>
      <Header />
      <Outlet />
    </DefaultLayoutContainer>
  )
}
