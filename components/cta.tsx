"use client";

import { Button } from "@/components/ui/button";
import { memo } from "react";

const CTA = memo(function CTA() {
  return (
    <section
      id="contact"
      className="py-20 lg:py-32 bg-gradient-to-br from-primary via-primary/90 to-accent relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-50 animate-blob-float" />
      <div className="absolute inset-0 bg-gradient-to-tl from-primary/30 to-transparent opacity-40 animate-blob-float-reverse" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 reveal-on-scroll">
          Ready to Discuss Your Legal Matter?
        </h2>
        <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed reveal-on-scroll animation-delay-200">
          Schedule a confidential consultation to discuss how I can assist with
          your legal needs. Serving Rawalpindi, Islamabad, and beyond with
          professional expertise and dedication.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center reveal-on-scroll animation-delay-400">
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-gray-100 transition-all hover:shadow-2xl hover:shadow-white/20 font-semibold relative overflow-hidden group hover:scale-105 active:scale-95"
          >
            <span className="relative z-10">Schedule Consultation</span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/20 bg-transparent transition-all hover:shadow-xl hover:scale-105 active:scale-95"
          >
            Contact Directly
          </Button>
        </div>
      </div>
    </section>
  );
});

export default CTA;
