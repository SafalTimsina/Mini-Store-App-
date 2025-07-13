import type { Order, OrderRequest, Product } from "../types"; // Assuming these types are declared in a separate file

export const API_BASE = "https://api.freeapi.app/api/v1"

export async function getProducts(): Promise<Product[]> {
  try {
    const options = {method: 'GET', headers: {accept: 'application/json'}};
    const response = await fetch(`${API_BASE}/public/randomproducts`, options)
    if (!response.ok) throw new Error("Failed to fetch products")
    const data = await response.json()

    return data.data.data || []
  } catch (error) {
    console.error("Error fetching products:", error)
    return []
  }
}

export async function getProduct(id: string): Promise<Product | null> {
  try {
    const response = await fetch(`${API_BASE}/public/randomproducts/${id}`, {
      cache: "no-store",
    })
    if (!response.ok) throw new Error("Failed to fetch product")
    const data = await response.json()

    return data.data || null
  } catch (error) {
    console.error("Error fetching product:", error)
    return null
  }
}

export async function createOrder(orderData: OrderRequest): Promise<Order | null> {
  try {
    const response = await fetch(`https://api.freeapi.app/api/v1/ecommerce/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    })
    if (!response.ok) throw new Error("Failed to create order")
    const data = await response.json()
    return data.data || null
  } catch (error) {
    console.error("Error creating order:", error)
    return null
  }
}

export async function getOrders(): Promise<Order[]> {
  try {
   
    // const response = await fetch(`${API_BASE}/ecommerce/profile/my-orders`, {
    //   cache: "no-store",
    // })
    // if (!response.ok) throw new Error("Failed to fetch orders")
    // const data = await response.json()
    // return data.data || []
    return []
  } catch (error) {
    console.error("Error fetching orders:", error)
    return []
  }
}
