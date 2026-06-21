import AboutMediaOverlay from '@/components/sections/about/AboutMediaOverlay';
import ContactCta from '@/components/sections/contact/ContactCta';
import FeaturesMediaCarousel from '@/components/sections/features/FeaturesMediaCarousel';
import FeaturesRevealCardsBento from '@/components/sections/features/FeaturesRevealCardsBento';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import MetricsFeatureCards from '@/components/sections/metrics/MetricsFeatureCards';
import PricingHighlightedCards from '@/components/sections/pricing/PricingHighlightedCards';
import TestimonialColumnMarqueeCards from '@/components/sections/testimonial/TestimonialColumnMarqueeCards';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroOverlay
      tag="Culinary Perfection"
      title="Where Taste Meets Art"
      description="Experience hand-crafted meals prepared with the freshest ingredients and passion."
      primaryButton={{
        text: "Explore Menu",
        href: "#products",
      }}
      secondaryButton={{
        text: "Contact Us",
        href: "#contact",
      }}
      imageSrc="http://img.b2bpic.net/free-photo/high-angle-arrangement-with-vegetables_23-2148494042.jpg"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutMediaOverlay
      tag="Our Story"
      title="Crafted with Passion"
      description="Our journey began with a simple belief that food should be an experience, bringing together fresh farm ingredients and expert culinary skills to delight your senses."
      primaryButton={{
        text: "Read Our Story",
        href: "#",
      }}
      imageSrc="http://img.b2bpic.net/free-photo/various-healthy-vegetables-colander-marble-tabletop_23-2147956577.jpg"
    />
    </SectionErrorBoundary>
  </div>

  <div id="features" data-section="features">
    <SectionErrorBoundary name="features">
          <FeaturesMediaCarousel
      tag="What We Offer"
      title="Signature Experiences"
      description="Discover our culinary highlights."
      items={[
        {
          title: "Fresh Pasta",
          description: "Authentic handmade recipes.",
          buttonIcon: "Utensils",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-bread-ingredients_23-2149395314.jpg",
        },
        {
          title: "Farm to Table",
          description: "Sourced locally every morning.",
          buttonIcon: "Sprout",
          imageSrc: "http://img.b2bpic.net/free-photo/tomatoes-stall-market-sanarysurmer_268835-3781.jpg",
        },
        {
          title: "Global Flavors",
          description: "International culinary techniques.",
          buttonIcon: "Globe",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-fresh-meat-slice-with-toamtoes-light-gray-background-animal-cow-chicken-meat-butcher-food-kitchen-color_179666-45992.jpg",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="products" data-section="products">
    <SectionErrorBoundary name="products">
          <FeaturesRevealCardsBento
      tag="Our Menu"
      title="Chef Specials"
      description="A curated selection of our finest dishes."
      items={[
        {
          title: "Truflle Pasta",
          description: "Rich, earthy flavors.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/salad-with-red-caviar-salmon-avocado_140725-6797.jpg",
        },
        {
          title: "Grilled Salmon",
          description: "Fresh wild-caught salmon.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-fried-eggplant-with-tomato-chopped-green-onions-rag-round-white-plate_176474-3356.jpg",
        },
        {
          title: "Ribeye Steak",
          description: "Perfectly seared to taste.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/fried-spicy-razor-clams_1203-9555.jpg",
        },
        {
          title: "Garden Salad",
          description: "Fresh seasonal greens.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-arrangement-spanish-food_23-2149157429.jpg",
        },
        {
          title: "Artisan Bread",
          description: "Freshly baked daily.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/assortment-thanksgiving-day-delicious-dinner_23-2149100164.jpg",
        },
        {
          title: "Dessert Trio",
          description: "Sweet finale of flavors.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/delicious-healthy-food-arrangement_23-2149043084.jpg",
        },
        {
          title: "Organic Wine",
          description: "Selected premium vintages.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-delicious-eggplant-rolls-with-baked-potatoes-inside-plate-dark-background-dish-meal-dinner-food-potato-vegetable_140725-116119.jpg",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="pricing" data-section="pricing">
    <SectionErrorBoundary name="pricing">
          <PricingHighlightedCards
      tag="Pricing Plans"
      title="Dinner Packages"
      description="Flexible options for every dining need."
      plans={[
        {
          tag: "Quick Meal",
          price: "$29",
          description: "Standard 2-course meal.",
          features: [
            "Starter",
            "Main Dish",
          ],
          primaryButton: {
            text: "Select",
            href: "#",
          },
        },
        {
          tag: "Full Experience",
          price: "$55",
          description: "Comprehensive tasting menu.",
          features: [
            "3-Course Meal",
            "Appetizer",
            "Wine Pairing",
            "Dessert",
          ],
          highlight: "Best Value",
          primaryButton: {
            text: "Select",
            href: "#",
          },
        },
        {
          tag: "Chef Private",
          price: "$120",
          description: "Private exclusive culinary experience.",
          features: [
            "Custom Menu",
            "Chef Interaction",
            "Premium Wine",
          ],
          primaryButton: {
            text: "Book",
            href: "#",
          },
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="metrics" data-section="metrics">
    <SectionErrorBoundary name="metrics">
          <MetricsFeatureCards
      tag="Our Stats"
      title="Culinary Excellence"
      description="Quality defined by numbers."
      metrics={[
        {
          value: "12+",
          title: "Years Experience",
          features: [
            "Expertise",
            "Tradition",
          ],
        },
        {
          value: "5k+",
          title: "Happy Diners",
          features: [
            "Satisfied",
            "Loyal",
          ],
        },
        {
          value: "100%",
          title: "Fresh Ingredients",
          features: [
            "Quality",
            "Local",
          ],
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialColumnMarqueeCards
      tag="Reviews"
      title="What Diners Say"
      description="Hear about our unique culinary journey."
      testimonials={[
        {
          name: "Alice Smith",
          role: "Food Blogger",
          quote: "The best dining experience ever!",
          imageSrc: "http://img.b2bpic.net/free-photo/happy-asian-woman-shows-thumbs-up-approves-likes-smth-good-stands-near-cafe-entrance-give-her_1258-199002.jpg",
        },
        {
          name: "John Doe",
          role: "Gourmet Critic",
          quote: "Absolutely exquisite flavors.",
          imageSrc: "http://img.b2bpic.net/free-photo/successful-young-man-stylish-hat-relaxing-alone-cozy-cafeteria-lunch-break-looking-with-happy-expression_273609-1935.jpg",
        },
        {
          name: "Maria Garcia",
          role: "Chef",
          quote: "True dedication to the craft.",
          imageSrc: "http://img.b2bpic.net/free-photo/male-local-traveler-with-camera_23-2149016703.jpg",
        },
        {
          name: "David Brown",
          role: "Traveler",
          quote: "Exceeded all my expectations.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-brunette-woman-drinks-morning-coffee-cafe_613910-12134.jpg",
        },
        {
          name: "Sophia Lee",
          role: "Local",
          quote: "My favorite spot for celebrations.",
          imageSrc: "https://storage.googleapis.com/webild/default/no-image.jpg?id=z4z6v0",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Bookings"
      text="Ready for an exquisite meal? Reserve your table today."
      primaryButton={{
        text: "Book Now",
        href: "#",
      }}
      secondaryButton={{
        text: "Contact Us",
        href: "#",
      }}
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
