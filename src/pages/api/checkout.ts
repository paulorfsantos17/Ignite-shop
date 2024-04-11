import { NextApiRequest, NextApiResponse } from 'next'

import { stripe } from '@/lib/stripe'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const successUrl = ` ${process.env.NEXT_URL}/success`
  const cancelUrl = ` ${process.env.NEXT_URL}/`
  const priceId = ''
  const checkoutSession = await stripe.checkout.sessions.create({
    cancel_url: cancel,
    success_url: successUrl,
    mode: 'payment',
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
  })

  return res.status(201).json({
    checkoutUrl: checkoutSession.url,
  })
}
