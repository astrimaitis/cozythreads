import { IPriceData } from '@/public/interfaces/IPriceData';
import { NextResponse } from 'next/server';
import { ICatalogItem } from '@/public/interfaces/ICatalogItem';
import Stripe from 'stripe';

export async function POST(req: Request) {
    const key = process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY!;
    const base = (`${process.env.NEXT_PUBLIC_SUCCESS_URL}` || "http://localhost:3000");
    const successUrl = `${base}/success`;

    const stripe = new Stripe(key, {
        apiVersion: '2024-04-10',
    });

    try {
        const body = await req.json(); // Parse JSON body
        const items : ICatalogItem[] = body["items"];
        let stripeItems : IPriceData[] = [];
        items.map((item) => {
            const val = {
              price_data: {
                currency: 'usd',
                product_data: {
                  name: item.name!,
                },
                unit_amount: parseFloat((item.price * 100).toFixed(2)), // in cents
              },
              quantity: item.quantity,
            } as IPriceData;
            stripeItems = [...stripeItems, val];
        })

        const session = await stripe.checkout.sessions.create({
          mode: 'payment',
          line_items: stripeItems,
          ui_mode: 'embedded',
          return_url: successUrl,
        });

        return NextResponse.json({ secret: session.client_secret }, {status: 200});
      } catch (err) {
        return NextResponse.json({ error: err }, {status: 500});
    }
}   