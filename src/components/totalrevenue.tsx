
'use client'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useOrderStore } from "@/stores/useOrderStore"
import { DollarSign } from "lucide-react"

const TotalRevenue=()=>{
  const {  getTotalRevenue } = useOrderStore()


    return (
         <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${getTotalRevenue().toFixed(2)||0.0}</div>
          </CardContent>
        </Card>

    )
}
export default TotalRevenue