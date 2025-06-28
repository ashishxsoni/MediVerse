'use client';

import { Stethoscope } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import Pricing from '@/components/pricing';
import { creditBenefits } from '@/lib/data';
import Reveal from '@/components/animated/Reveal';
import { fadeUp, fadeLeft } from '@/lib/animations';

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        {/* Heading Block */}
        <div className="text-center mb-16">
          <Reveal variant={fadeUp}>
            <Badge
              variant="outline"
              className="bg-emerald-900/30 border-emerald-700/30 px-4 py-1 text-emerald-400 text-sm font-medium mb-4"
            >
              Affordable Healthcare
            </Badge>
          </Reveal>

          <Reveal variant={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Consultation Packages
            </h2>
          </Reveal>

          <Reveal variant={fadeUp}>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Flexible credit-based pricing designed for simplicity and value.
            </p>
          </Reveal>
        </div>

        {/* Pricing Table */}
        <Reveal variant={fadeUp}>
          <Pricing />
        </Reveal>

        {/* Credit System Explanation */}
        <Reveal variant={fadeUp}>
          <Card className="mt-12 bg-muted/20 border-emerald-900/30">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-white flex items-center">
                <Stethoscope className="h-5 w-5 mr-2 text-emerald-400" />
                How Our Credit System Works
              </CardTitle>
            </CardHeader>

            <CardContent>
              <ul className="space-y-3">
                {creditBenefits.map((benefit, index) => (
                  <Reveal key={index} variant={fadeLeft} delay={index}>
                    <li className="flex items-start">
                      <div className="mr-3 mt-1 bg-emerald-900/20 p-1 rounded-full">
                        <svg
                          className="h-4 w-4 text-emerald-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                      <p
                        className="text-muted-foreground"
                        dangerouslySetInnerHTML={{ __html: benefit }}
                      />
                    </li>
                  </Reveal>
                ))}
              </ul>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
