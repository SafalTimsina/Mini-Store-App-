'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useOrderStore } from "@/stores/useOrderStore"


const RecentOrders = () => {
  const { order } = useOrderStore()
  const getOrderTotal = (items: { quantity: number; price: number }[]) => {
    return items.reduce((acc, item) => acc + item.quantity * item.price, 0)
  }

  return (
    <Card>Admin
      <CardHeader>
        <CardTitle>Recent Orders</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {order && order.slice(0, 5).map((order) => (
            <div key={order.id} className="flex justify-between items-center">
              <div>
                <p className="font-medium">{order.customer.name}</p>
                

                <p className="text-sm text-muted-foreground">
                  {new Date(order.createdAt).toLocaleDateString()}
                </p>
              </div>
              <div className="text-right">
                <p className="font-medium">
                  ${getOrderTotal(order.items).toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default RecentOrders
