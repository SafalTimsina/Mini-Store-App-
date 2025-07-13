import { CheckCircle, Package, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

export default function CheckoutSuccessPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8 animate-scale-in">
          <CheckCircle className="h-24 w-24 text-success mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-success mb-4">Order Confirmed!</h1>
          <p className="text-xl text-muted-foreground">
            Thank you for your purchase. Your order has been received and is being processed.
          </p>
        </div>

        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="space-y-6">
              <div className="flex items-center justify-center gap-4 text-muted-foreground">
                <Package className="h-6 w-6" />
                <span className="text-lg">Order #ORD-{Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                <div>
                  <h3 className="font-semibold mb-2">Order Confirmation</h3>
                  <p className="text-sm text-muted-foreground">
                    You&apos;ll receive an email confirmation shortly with your order details.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Processing</h3>
                  <p className="text-sm text-muted-foreground">
                    Your order is being prepared for shipment. This usually takes 1-2 business days.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Shipping</h3>
                  <p className="text-sm text-muted-foreground">
                    Once shipped, you&apos;ll receive tracking information to monitor your delivery.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <div className="text-sm text-muted-foreground mb-6">
            <p>Need help with your order?</p>
            <p>Contact our support team at support@shophub.com</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gradient" size="lg" asChild>
              <Link href="/">
                <Home className="h-4 w-4 mr-2" />
                Continue Shopping
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}