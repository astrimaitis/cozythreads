export enum ECurrency {
    USD = 'usd',
    EUR = 'eur',
}

export interface IPriceData {
    price_data: {
      currency: ECurrency,
      product_data: {
        name: string,
      },
      unit_amount: number,
    },
    quantity: number,
}