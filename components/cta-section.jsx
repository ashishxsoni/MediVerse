import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";



export default function CTASection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <Card className="bg-gradient-to-r from-emerald-900/30 to-emerald-950/20 border-emerald-800/20">
          <CardContent className="p-8 md:p-12 lg:p-16 relative overflow-hidden">
            <div className="max-w-2xl relative">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Take charge of your health, today
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Sign up in minutes and start consulting with verified doctors from anywhere. Book appointments, chat live, and access care on your terms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-emerald-600 text-white hover:bg-emerald-700"
                >
                  <Link href="/sign-up">Join Now</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-emerald-700/30 hover:bg-muted/80"
                >
                  <Link href="#pricing">See Plans</Link>
                </Button>
              </div>
            </div>

            {/* Decorative green blobs */}
            <div className="absolute right-0 top-0 w-[300px] h-[300px] bg-emerald-800/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
            <div className="absolute left-0 bottom-0 w-[200px] h-[200px] bg-emerald-700/10 rounded-full blur-3xl -ml-10 -mb-10"></div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
