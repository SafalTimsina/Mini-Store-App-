import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function SuccessPage() {
  return (
    <div className="container mx-auto px-4 py-16 bg-background">
      <div className="max-w-md mx-auto">
        <Card className="border-border">
          <CardHeader className="text-center border-b border-border">
            <CheckCircle className="h-16 w-16 text-foreground mx-auto mb-4" />
            <CardTitle className="text-2xl">Order Placed Successfully!</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4 p-6">
            <p className="text-muted-foreground">
              Thank you for your order. We&apos;ll process it shortly and send you a confirmation email.
            </p>
            <div className="w-24 h-px bg-foreground mx-auto"></div>
            <div className="space-y-2">
              <Link href="/" className="block">
                <Button className="w-full bg-foreground text-background hover:bg-foreground/90 border border-border">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
