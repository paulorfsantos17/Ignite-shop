import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import Stripe from 'stripe'

import { stripe } from '@/lib/stripe'
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '@/styles/pages/product'
import { FormatterPrice } from '@/utils/formatter'

interface IProductProps {
  product: {
    id: string
    name: string
    imageUrl: string
    url: string
    price: string
    description: string
    defaultPriceId: string
  }
}

export default function ProductPage({ product }: IProductProps) {
  const { isFallback } = useRouter()

  if (isFallback) {
    return <p>Loading...</p>
  }
  return (
    <ProductContainer>
      <ImageContainer>
        <Image src={product.imageUrl} width={520} height={480} alt="" />
      </ImageContainer>
      <ProductDetails>
        <h1>{product.name}</h1>
        <span>{product.price}</span>
        <p>{product.description}</p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: 'prod_PtozT8tKGCdRBd' } }],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params?.id as string

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        url: product.url,
        price: FormatterPrice.format((price.unit_amount as number) / 100),
        description: product.description,
        defaultPriceId: price.id,
      },
    },
    revalidate: 60 * 60 * 1, // 1 hour,
  }
}
