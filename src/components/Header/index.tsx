import { Scroll, Timer } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import IgniteLogoPath from '../../assets/ignite-logo.svg'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img
        src={IgniteLogoPath}
        alt="Dois triângulos verdes claro em 45°, sendo um menor que o outro e o maior sobrepondo o menor em seu meio, dando a sensação de movimento"
        title="Ignite Timer"
      />

      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
