'use client'
import { create } from "zustand"
import { persist } from "zustand/middleware"

interface OrderRequest {
    items: {
        productId: string
        quantity: number
        price: number
        
    }[]
    customer: {
        name: string
        email: string
        address: string
    },
    total:number
}

interface Order {
    id: string
    items: OrderRequest["items"]
    customer: OrderRequest["customer"]
    createdAt: string
}

interface OrderStore {
    order: Order[]
    createOrder: (orderData: OrderRequest) => Order
    clearOrders: () => void
    getTotalOrders:()=>number
    getTotalRevenue:()=>number
    
}

export const useOrderStore = create<OrderStore>()(
    persist(
        (set, get) => ({
            order: [],
            createOrder: (orderData) => {
                const newOrder: Order = {
                    id: crypto.randomUUID(),
                    items: orderData.items,
                
                    customer: orderData.customer,
                    createdAt: new Date().toISOString(),
                }

                set((state) => ({
                    order: [...state.order, newOrder],
                }))

                return newOrder
            },
            clearOrders: () => set({ order: [] }),
            getTotalOrders: () => get().order.length,
            getTotalRevenue: () =>
                get().order.reduce((total, order) => {
                    return (
                        total +
                        order.items.reduce((sum, item) => {
                            const productPrice = item.price ?? 0 
                            return sum + productPrice * item.quantity
                        }, 0)
                    )
                }, 0),
        }),
        {
            name: "order-storage",
        },
    ),
)
