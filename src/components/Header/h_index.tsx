import { NavLink } from 'react-router-dom'
import { HeaderContainer } from './h_styles'

import logo from './../../assets/coffee_logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="Delevery coffee logo - One cup" />
      <nav>
        <div>
          <MapPin size={24} />
          <span>Porto Alegre, RS</span>
        </div>
        <NavLink to="/checkout">
          <ShoppingCart size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
