"use client";

import { useState } from "react";
import Image from "next/image";

/* ─── Unsplash photo IDs matched to products ─── */

const img = (id: string, w = 800, h = 800) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

/* ─── Data ─── */

const categories = [
  { name: "Electronics", emoji: "🖥", image: img("1550009158-9ebf69173e03", 600, 450) },
  { name: "Fashion", emoji: "👕", image: img("1445205170230-053b83016050", 600, 450) },
  { name: "Home & Kitchen", emoji: "🏠", image: img("1556909114-f6e7ad7d3136", 600, 450) },
  { name: "Books", emoji: "📚", image: img("1512820790803-83ca734da794", 600, 450) },
  { name: "Toys & Games", emoji: "🎮", image: img("1612287230202-1ff1d85d1bdf", 600, 450) },
  { name: "Sports", emoji: "⚽", image: img("1461896836934-bd08f7546a31", 600, 450) },
  { name: "Beauty", emoji: "✨", image: img("1596462502278-27bfdc403348", 600, 450) },
  { name: "Grocery", emoji: "🛒", image: img("1542838132-92c53300491e", 600, 450) },
  { name: "Automotive", emoji: "🚗", image: img("1492144534655-ae79c964c9d7", 600, 450) },
  { name: "Pet Supplies", emoji: "🐾", image: img("1587300003388-59208cc962cb", 600, 450) },
];

const heroSlides = [
  {
    title: "New arrivals in electronics",
    subtitle: "Discover the latest gadgets and devices",
    cta: "Shop now",
    image: img("1468495244123-6c6c332eeece", 1400, 600),
  },
  {
    title: "Spring fashion edit",
    subtitle: "Fresh styles for the new season",
    cta: "Explore",
    image: img("1490481651871-ab68de25d43d", 1400, 600),
  },
  {
    title: "Up to 40% off home essentials",
    subtitle: "Refresh your space for less",
    cta: "See deals",
    image: img("1484101403633-562f891dc89a", 1400, 600),
  },
];

const deals = [
  { title: "Wireless Earbuds Pro", price: "$49.99", original: "$89.99", discount: "44% off", rating: 4.5, reviews: 12847, image: img("1590658268037-6bf12f032f4c") },
  { title: "Organic Cotton Tee", price: "$18.00", original: "$35.00", discount: "49% off", rating: 4.3, reviews: 3291, image: img("1521572163474-6864f9cf17ab") },
  { title: 'Cast Iron Skillet 12"', price: "$29.99", original: "$54.99", discount: "45% off", rating: 4.8, reviews: 45102, image: img("1585515320754-7a72b55e1da6") },
  { title: "Bestselling Novel 2026", price: "$14.99", original: "$27.99", discount: "46% off", rating: 4.6, reviews: 8934, image: img("1544947950-fa07a98d237f") },
  { title: "Yoga Mat Premium", price: "$24.99", original: "$49.99", discount: "50% off", rating: 4.4, reviews: 6721, image: img("1601925260368-ae2f83cf8b7f") },
  { title: "Vitamin C Serum", price: "$12.99", original: "$24.99", discount: "48% off", rating: 4.7, reviews: 21093, image: img("1620916566398-39f1143ab7be") },
];

const recommended = [
  { title: "Mechanical Keyboard", price: "$79.99", rating: 4.6, reviews: 5420, image: img("1618384887929-16ec33fab9ef") },
  { title: "Desk Lamp LED", price: "$34.99", rating: 4.4, reviews: 2103, image: img("1507473885765-e6ed057ab13c") },
  { title: "Laptop Stand Aluminum", price: "$42.99", rating: 4.7, reviews: 8901, image: img("1527864550417-7fd91fc51a46") },
  { title: "USB-C Hub 7-in-1", price: "$29.99", rating: 4.5, reviews: 15230, image: img("1625723044792-44de16ccb4e9") },
  { title: "Noise Cancelling Headphones", price: "$149.99", rating: 4.8, reviews: 32100, image: img("1505740420928-5e560c06d30e") },
  { title: "Webcam 4K HDR", price: "$89.99", rating: 4.3, reviews: 4512, image: img("1587826080692-f439cd0b70a4") },
  { title: "Portable Charger 20000mAh", price: "$24.99", rating: 4.6, reviews: 19800, image: img("1609091839311-d5365f9ff1c5") },
  { title: "Monitor Light Bar", price: "$39.99", rating: 4.5, reviews: 7654, image: img("1593062096033-9a26b09da705") },
];

const recentlyViewed = [
  { title: "Running Shoes", price: "$119.99", rating: 4.5, reviews: 8730, image: img("1542291026-7eec264c27ff") },
  { title: "Coffee Maker Drip", price: "$64.99", rating: 4.3, reviews: 11200, image: img("1517701604599-bb29b565090c") },
  { title: "Backpack 30L", price: "$49.99", rating: 4.6, reviews: 5600, image: img("1553062407-98eeb64c6a62") },
  { title: "Bluetooth Speaker", price: "$39.99", rating: 4.4, reviews: 14300, image: img("1608043152269-423dbba4e7e1") },
  { title: "Plant Pot Set", price: "$22.99", rating: 4.2, reviews: 3400, image: img("1485955900006-d5666a8b4cc2") },
  { title: "Cookbook Italian", price: "$19.99", rating: 4.7, reviews: 2100, image: img("1466637574441-749b8f19452f") },
];

/* ─── Helpers ─── */

function Stars({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return (
    <span className="text-[13px] text-text-secondary tracking-tight">
      {"★".repeat(full)}
      {half && "½"}
      {"☆".repeat(5 - full - (half ? 1 : 0))}
    </span>
  );
}

function ProductImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 200px"
      className={`object-cover transition-transform duration-300 group-hover:scale-105 ${className}`}
    />
  );
}

/* ─── Page ─── */

export default function AmazonCosmos() {
  const [heroIndex, setHeroIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ─── Header ─── */}
      <header className="sticky top-0 z-50 bg-background border-b border-border-custom">
        <div className="h-[82px] flex items-center gap-6 px-[var(--page-padding)]">
          <button className="shrink-0 text-lg font-light tracking-tight">
            niagra
          </button>

          <div className="flex-1 max-w-2xl relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search everything..."
              className="w-full h-[46px] bg-surface rounded-2xl pl-4 pr-12 text-sm placeholder:text-text-tertiary outline-none focus:ring-2 focus:ring-foreground/10 transition-all duration-150"
            />
            <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-tertiary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <button className="text-[13px] font-medium text-text-secondary hover:text-foreground transition-colors duration-75">
              Account
            </button>
            <button className="text-[13px] font-medium text-text-secondary hover:text-foreground transition-colors duration-75">
              Orders
            </button>
            <button className="relative text-[13px] font-medium text-text-secondary hover:text-foreground transition-colors duration-75">
              Cart
              <span className="absolute -top-1.5 -right-3 bg-foreground text-background text-[10px] font-medium w-4 h-4 rounded-full flex items-center justify-center">
                3
              </span>
            </button>
          </div>
        </div>

        <div className="flex gap-1 px-[var(--page-padding)] pb-3 overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.name}
              className="shrink-0 text-[13px] font-medium text-text-secondary hover:text-foreground bg-surface hover:bg-foreground hover:text-background rounded-full px-3.5 py-1.5 transition-colors duration-75"
            >
              {cat.emoji} {cat.name}
            </button>
          ))}
        </div>
      </header>

      <main className="px-[var(--page-padding)] pb-24">
        {/* ─── Hero Carousel ─── */}
        <section className="pt-8 pb-12 md:pt-12 md:pb-16">
          <div className="relative rounded-[22px] sm:rounded-[27px] overflow-hidden h-[280px] sm:h-[360px] lg:h-[420px]">
            <Image
              src={heroSlides[heroIndex].image}
              alt={heroSlides[heroIndex].title}
              fill
              priority
              sizes="100vw"
              className="object-cover transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute inset-0 flex items-end p-8 sm:p-12 z-10">
              <div>
                <h2 className="text-[clamp(28px,4vw,48px)] font-light leading-[1.1] tracking-tight text-white mb-2">
                  {heroSlides[heroIndex].title}
                </h2>
                <p className="text-sm text-white/70 mb-5">
                  {heroSlides[heroIndex].subtitle}
                </p>
                <button className="text-[13px] font-medium bg-white text-black rounded-full px-5 py-2.5 hover:bg-white/90 transition-colors duration-75">
                  {heroSlides[heroIndex].cta}
                </button>
              </div>
            </div>

            <div className="absolute bottom-6 right-8 flex gap-2 z-10">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setHeroIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === heroIndex ? "bg-white/80 w-6" : "bg-white/30 w-2 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ─── Today's Deals ─── */}
        <section className="mb-14 md:mb-20">
          <div className="flex items-baseline justify-between mb-6">
            <h3 className="text-sm font-medium">Today&apos;s deals</h3>
            <button className="text-[13px] text-text-tertiary hover:text-foreground transition-colors duration-75">
              See all
            </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-[30px]">
            {deals.map((deal, i) => (
              <button
                key={deal.title}
                className="group text-left animate-fade-in-up"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <div className="aspect-square rounded-[22px] bg-surface mb-3 relative overflow-hidden group-hover:scale-[0.98] transition-transform duration-300">
                  <ProductImage src={deal.image} alt={deal.title} />
                </div>
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="text-[11px] font-medium bg-foreground text-background rounded-full px-2 py-0.5">
                    {deal.discount}
                  </span>
                </div>
                <h4 className="text-[13px] font-medium leading-snug mb-1 group-hover:text-text-secondary transition-colors duration-75">
                  {deal.title}
                </h4>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-[15px] font-medium">{deal.price}</span>
                  <span className="text-xs text-text-tertiary line-through">{deal.original}</span>
                </div>
                <div className="flex items-center gap-1 mt-1">
                  <Stars rating={deal.rating} />
                  <span className="text-[11px] text-text-tertiary">{(deal.reviews / 1000).toFixed(1)}K</span>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* ─── Shop by Category ─── */}
        <section className="mb-14 md:mb-20">
          <h3 className="text-sm font-medium mb-6">Shop by category</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-[30px]">
            {categories.map((cat, i) => (
              <button
                key={cat.name}
                className="group animate-fade-in-up"
                style={{ animationDelay: `${i * 40}ms` }}
              >
                <div className="aspect-[4/3] rounded-[22px] bg-surface relative overflow-hidden mb-3 group-hover:scale-[0.98] transition-transform duration-300">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 20vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-200" />
                  <span className="absolute bottom-3 left-3 text-white text-[13px] font-medium z-10">
                    {cat.name}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* ─── Recommended ─── */}
        <section className="mb-14 md:mb-20">
          <div className="flex items-baseline justify-between mb-6">
            <h3 className="text-sm font-medium">Recommended for you</h3>
            <button className="text-[13px] text-text-tertiary hover:text-foreground transition-colors duration-75">
              See all
            </button>
          </div>
          <div className="flex gap-4 sm:gap-[30px] overflow-x-auto no-scrollbar pb-2">
            {recommended.map((item, i) => (
              <button
                key={item.title}
                className="group shrink-0 w-[166px] sm:w-[200px] text-left animate-fade-in-up"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <div className="aspect-square rounded-[22px] bg-surface mb-3 relative overflow-hidden group-hover:scale-[0.98] transition-transform duration-300">
                  <ProductImage src={item.image} alt={item.title} />
                </div>
                <h4 className="text-[13px] font-medium leading-snug mb-1 group-hover:text-text-secondary transition-colors duration-75">
                  {item.title}
                </h4>
                <span className="text-[15px] font-medium">{item.price}</span>
                <div className="flex items-center gap-1 mt-1">
                  <Stars rating={item.rating} />
                  <span className="text-[11px] text-text-tertiary">{(item.reviews / 1000).toFixed(1)}K</span>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* ─── Recently Viewed ─── */}
        <section className="mb-14 md:mb-20">
          <div className="flex items-baseline justify-between mb-6">
            <h3 className="text-sm font-medium">Recently viewed</h3>
            <button className="text-[13px] text-text-tertiary hover:text-foreground transition-colors duration-75">
              Your history
            </button>
          </div>
          <div className="flex gap-4 sm:gap-[30px] overflow-x-auto no-scrollbar pb-2">
            {recentlyViewed.map((item, i) => (
              <button
                key={item.title}
                className="group shrink-0 w-[166px] sm:w-[200px] text-left animate-fade-in-up"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <div className="aspect-square rounded-[22px] bg-surface mb-3 relative overflow-hidden group-hover:scale-[0.98] transition-transform duration-300">
                  <ProductImage src={item.image} alt={item.title} />
                </div>
                <h4 className="text-[13px] font-medium leading-snug mb-1 group-hover:text-text-secondary transition-colors duration-75">
                  {item.title}
                </h4>
                <span className="text-[15px] font-medium">{item.price}</span>
                <div className="flex items-center gap-1 mt-1">
                  <Stars rating={item.rating} />
                  <span className="text-[11px] text-text-tertiary">{(item.reviews / 1000).toFixed(1)}K</span>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* ─── Promo Banner ─── */}
        <section className="mb-14 md:mb-20">
          <div className="rounded-[22px] sm:rounded-[27px] bg-surface p-8 sm:p-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="text-[clamp(22px,3vw,30px)] font-light tracking-tight leading-tight mb-2">
                Free delivery on your first order
              </h3>
              <p className="text-sm text-text-secondary">
                Sign up for a free account and get free shipping on orders over $25.
              </p>
            </div>
            <button className="shrink-0 text-[13px] font-medium bg-foreground text-background rounded-full px-6 py-3 hover:bg-button-hover transition-colors duration-75">
              Sign up free
            </button>
          </div>
        </section>
      </main>

      {/* ─── Footer ─── */}
      <footer className="border-t border-border-custom px-[var(--page-padding)] py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {[
            { title: "Get to know us", links: ["Careers", "About", "Sustainability", "Press Center", "Investor Relations"] },
            { title: "Make money with us", links: ["Sell products", "Sell on Business", "Sell apps", "Become an Affiliate", "Advertise"] },
            { title: "Payment products", links: ["Business Card", "Shop with Points", "Reload Your Balance", "Currency Converter"] },
            { title: "Let us help you", links: ["Your Account", "Your Orders", "Shipping Rates", "Returns", "Help"] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="text-[13px] font-medium mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <button className="text-[13px] text-text-tertiary hover:text-foreground transition-colors duration-75">
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between pt-8 border-t border-border-custom">
          <span className="text-lg font-light tracking-tight">
            niagra
          </span>
          <span className="text-xs text-text-tertiary">&copy; 2026</span>
        </div>
      </footer>
    </div>
  );
}
