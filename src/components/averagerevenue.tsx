
'use client'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useOrderStore } from "@/stores/useOrderStore"
import { TrendingUp } from "lucide-react"

const AverageRevenue=()=>{
  const {  getTotalRevenue,order } = useOrderStore()
const totalOrder=order?.length

    return (
       <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Order Value</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${totalOrder > 0 ? (getTotalRevenue() / totalOrder).toFixed(2) : "0.00"}
            </div>
          </CardContent>
        </Card>

    )
}
export default AverageRevenue