
'use client'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useOrderStore } from "@/stores/useOrderStore"
import { ShoppingCart } from "lucide-react"

const TotalOrder=()=>{
  const {  getTotalOrders } = useOrderStore()


    return (
            <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{getTotalOrders()||0}</div>
          </CardContent>
        </Card>

    )
}
export default TotalOrder