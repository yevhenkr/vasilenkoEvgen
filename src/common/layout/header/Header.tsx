import { Logo } from '@/common/components/ui/logo/Logo'
import { Menu } from '@/common/components/ui/menu/Menu'
import styled from 'styled-components'

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Menu />
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  position: fixed;
  z-index: 2;
  top: 0;
  right: 0;
  left: 0;

  width: 100%;
  height: var(--header-height);
  min-height: 50px;
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
  background: var(--color-dark-700);
  border-bottom: 1px solid var(--color-dark-500);
`
