import Link from 'next/link'
import React from 'react'

import { ImageContainer, SuccessContainer } from '@/styles/pages/success'

export default function Success() {
  return (
    <SuccessContainer>
      <h1>Compra Efetuada!</h1>

      <ImageContainer></ImageContainer>

      <p>
        Uhuul <strong>Diego Fernandes</strong>, sua{' '}
        <strong>Camiseta nome da camisa</strong> já está a caminho de sua casa.
      </p>

      <Link href="/">Voltar ao Catálogo</Link>
    </SuccessContainer>
  )
}
