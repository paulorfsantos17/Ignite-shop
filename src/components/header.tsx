import React from 'react'

import logo from '@/assets/logo.svg'
import { HeaderContainer } from '@/styles/pages/header'

export default function Header() {
  return (
    <HeaderContainer>
      <img src={logo.src} alt="logo" />
    </HeaderContainer>
  )
}
