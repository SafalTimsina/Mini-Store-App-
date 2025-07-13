export interface ProductDetail{
  data:Product[],
  currentPageItems:number
  limit:number
  page:number
  totalItems:number
  totalPages:number
}


export interface Product {
  id: string
  title: string
  description: string
  price: number
  images: string
  category: string
  stock: number
  rating: number
  brand: string
  thumbnail?:string
}

export interface CartItem {
  product: Product
  quantity: number
}

export interface Order {
  _id: string
  customer: {
    name: string
    email: string
    address: string
  }
  items: CartItem[]
  total: number
  status: string
  createdAt: string
}

export interface OrderRequest {
  customer: {
    name: string
    email: string
    address: string
  }
  items: {
    productId: string
    quantity: number
    price: number
  }[]
  total: number
}
