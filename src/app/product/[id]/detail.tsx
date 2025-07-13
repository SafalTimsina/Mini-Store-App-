"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { toast } from "@/components/ui/sonner"
import { useCartStore } from "@/stores/store"
import type { Product } from "@/types"
import { ArrowLeft, ShoppingCart, Star } from "lucide-react"
import { useRouter } from "next/navigation"

interface ProductDetailProps {
  product: Product
}

export function ProductDetail({ product }: ProductDetailProps) {
  const addItem = useCartStore((state) => state.addItem)
  const router = useRouter()

  const handleAddToCart = () => {
    addItem(product)
    toast("Added To cart", {
      description: product.title,
      action: {
        label: "Close",
        onClick: () => console.log("Undo"),
      }
    })

  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Button variant="ghost" onClick={() => router.back()} className="mb-6">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="aspect-square relative overflow-hidden rounded-lg">
          <img
            src={product.thumbnail || "/placeholder.svg?height=600&width=600"}
            alt={product.title}
            // fill
            className="object-cover"
          />
        </div>

        <div className="space-y-6">
          <div>
            <Badge className="mb-2">{product.category}</Badge>
            <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="ml-1 font-medium">{product.rating}</span>
              </div>
              <span className="text-muted-foreground">•</span>
              <span className="font-medium">{product.brand}</span>
            </div>
            <p className="text-4xl font-bold text-primary mb-4">${product.price}</p>
          </div>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-3">Product Description</h3>
              <p className="text-muted-foreground leading-relaxed">{product.description}</p>
            </CardContent>
          </Card>

          <div className="flex items-center gap-4">
            <Badge variant={product.stock > 0 ? "default" : "destructive"} className="text-sm px-3 py-1">
              {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
            </Badge>
          </div>

          <Button size="lg" className="w-full" onClick={handleAddToCart} disabled={product.stock === 0}>
            <ShoppingCart className="h-5 w-5 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  )
}
