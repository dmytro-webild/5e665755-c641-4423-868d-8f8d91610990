import FooterBasic from '@/components/sections/footer/FooterBasic';
import NavbarFloatingLogo from '@/components/ui/NavbarFloatingLogo';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "About",    "href": "#about"
  },
  {
    "name": "Menu",    "href": "#products"
  },
  {
    "name": "Pricing",    "href": "#pricing"
  },
  {
    "name": "Contact",    "href": "#contact"
  },
  {
    "name": "Hero",    "href": "#hero"
  },
  {
    "name": "Features",    "href": "#features"
  },
  {
    "name": "Metrics",    "href": "#metrics"
  }
];

  return (
    <StyleProvider buttonVariant="default" siteBackground="gridDots" heroBackground="gradientBars">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarFloatingLogo
          logo="Culinary Bliss"
          logoImageSrc="http://img.b2bpic.net/free-photo/two-white-paper-cups-against-clean-white-backdrop_187299-47607.jpg"
          ctaButton={{
            text: "Order Now",            href: "#contact"}}
          navItems={navItems}
        />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterBasic
          columns={[
            {
              title: "Explore",              items: [
                {
                  label: "About",                  href: "#about"},
                {
                  label: "Menu",                  href: "#products"},
                {
                  label: "Pricing",                  href: "#pricing"},
              ],
            },
            {
              title: "Contact",              items: [
                {
                  label: "Email",                  href: "mailto:hello@culinary.com"},
                {
                  label: "Phone",                  href: "tel:+123456789"},
              ],
            },
          ]}
          leftText="© 2024 Culinary Bliss. All rights reserved."
          rightText="Privacy Policy"
        />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
