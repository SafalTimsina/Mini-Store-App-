import { ProductGrid } from '@/components/product/grid';
import { Search, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl bg-hero-gradient p-12 mb-12 text-center">
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
            Discover Amazing Products
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-in">
            Shop the latest trends and find everything you need in one place
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto animate-fade-in">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search products..." 
                className="pl-10 bg-white/90 border-white/20 focus:bg-white"
              />
            </div>
            <Button variant="hero" size="lg">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
      </div>

      {/* Products Section */}
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <p className="text-muted-foreground mt-2">
              Discover our handpicked selection of quality products
            </p>
          </div>
        </div>

        <ProductGrid />
      </div>
    </div>
  );
}