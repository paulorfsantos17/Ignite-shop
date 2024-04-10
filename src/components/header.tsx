import React from 'react'

import logo from '@/assets/logo.svg'
import { HeaderContainer } from '@/styles/pages/header'
import Image from 'next/image'

export default function Header() {
  return (
    <HeaderContainer>
      <Image src={logo} alt="" />
    </HeaderContainer>
  )
}
