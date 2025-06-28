import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Badge
              variant="outline"
              className="bg-emerald-900/30 border-emerald-700/30 px-4 py-2 text-emerald-400 text-sm font-medium"
            >
              Consult with care, anytime
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Talk to a doctor <br />
              <span className="gradient-title">from the comfort of home</span>
            </h1>

            <p className="text-muted-foreground text-lg md:text-xl max-w-md">
              Our platform helps you book appointments, consult 1-on-1 via video,
              and manage your health with ease — all in one secure place.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-emerald-600 text-white hover:bg-emerald-700"
              >
                <Link href="/onboarding">
                  Start Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-emerald-700/30 hover:bg-muted/80"
              >
                <Link href="/doctors">Explore Doctors</Link>
              </Button>
            </div>
          </div>

          <div className="relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden">
            <Image
              src="/banner2.png"
              alt="Online doctor consultation"
              fill
              priority
              className="object-cover md:pt-14 rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
