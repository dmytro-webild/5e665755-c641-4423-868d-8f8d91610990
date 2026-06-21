import { ShieldCheck, Award, Star } from "lucide-react";
import TextAnimation from "@/components/ui/TextAnimation";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function CredibilitySection() {
  return (
    <section data-webild-section="credibility" id="credibility" className="relative w-full py-24 bg-background">
      <div className="w-content-width mx-auto">
        <div className="text-center mb-16">
          <ScrollReveal variant="fade">
            <span className="inline-block py-1 px-3 rounded-full bg-card text-foreground text-sm font-medium mb-4">
              Awards & Recognition
            </span>
          </ScrollReveal>
          <TextAnimation
            text="Recognized for Excellence"
            variant="fade-blur"
            tag="h2"
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
            gradientText={false}
          />
          <ScrollReveal variant="fade" delay={0.2}>
            <p className="text-lg text-accent max-w-2xl mx-auto">
              We hold ourselves to the highest standards of quality, safety, and hygiene to ensure you have the best experience possible.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: ShieldCheck,
              title: "100% Health Rating",
              description: "Consistently maintaining perfect 'A' scores in state health and safety inspections."
            },
            {
              icon: Award,
              title: "Best Local Business 2023",
              description: "Voted #1 by the community for outstanding quality and service."
            },
            {
              icon: Star,
              title: "Featured in Local Media",
              description: "Recognized by top lifestyle and local media for our exceptional offerings."
            }
          ].map((feature, index) => {
            const Icon = feature.icon;
            return (
              <ScrollReveal variant="fade" key={index} delay={0.1 * index}>
                <div className="card p-8 rounded-lg flex flex-col items-center text-center h-full">
                  <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-accent">{feature.description}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}