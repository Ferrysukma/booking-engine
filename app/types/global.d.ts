export {}

declare global {
  interface GuestCheckoutInterface {
    id: number
    name: string
    bed: string
    category: string
    guest_maximum: number
    images: Array<string>
    subtotal?: number
    packages: Array<PackagesCartCheckoutInterface>
    details: Array<PackagesCartCheckoutInterface>
  }

  interface PackagesCartCheckoutInterface {
    breakfast: boolean
    cancelation: boolean
    id: number
    initial_price: number
    name: string
    quantity: number
    price: number
    stock: number
    tax: boolean

    children?: number
    booking?: number
    cartId?: string
    adults?: number
    capacity?: number
    guest?: Array<{
      id: string
      first_name: string
      last_name: string
    }>
    arrival_time?: string
    special_request?: string
  }
}
