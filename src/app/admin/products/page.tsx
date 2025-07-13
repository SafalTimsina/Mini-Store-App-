import Image from "next/image"
import { getProducts } from "@/lib/api"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

export default async function AdminProductsPage() {
  const products = await getProducts()

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Products</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product._id}>
            <CardHeader className="pb-4">
              <div className="aspect-square relative overflow-hidden rounded-md mb-4">
                <Image
                  src={product.image || "/placeholder.svg?height=200&width=200"}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardTitle className="line-clamp-2">{product.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <p className="text-muted-foreground text-sm line-clamp-2">{product.description}</p>

                <div className="flex items-center gap-2">
                  <Badge>{product.category}</Badge>
                  <Badge variant="outline">{product.brand}</Badge>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">${product.price}</span>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="ml-1 text-sm">{product.rating}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <Badge variant={product.stock > 0 ? "default" : "destructive"}>
                    {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {products.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No products available.</p>
        </div>
      )}
    </div>
  )
}
