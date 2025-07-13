import { getProducts } from "@/lib/api"
import { ProductCard } from "@/components/product/card"

export default async function HomePage() {
  const products = await getProducts()
  console.log(products,'sdfdsf');
  

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to MiniStore</h1>
        <p className="text-muted-foreground text-lg">Discover amazing products at great prices</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products && products?.length>0 &&products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {products.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No products available at the moment.</p>
        </div>
      )}
    </div>
  )
}
