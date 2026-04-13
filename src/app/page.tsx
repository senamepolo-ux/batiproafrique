import Hero from "@/components/Hero";
import ArticleCard from "@/components/ArticleCard";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import NewsletterSection from "@/components/NewsletterSection";
import AdSlot from "@/components/AdSlot";
import ScrollReveal from "@/components/ScrollReveal";
import { getAllArticles } from "@/lib/articles";

export default function HomePage() {
  const articles = getAllArticles();

  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Ad Banner sous le hero */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* GOOGLE ADSENSE : Banner horizontal header */}
        <AdSlot id="ad-header-banner" type="banner" />
      </div>

      {/* Articles Section */}
      <section id="articles" className="py-20 bg-white-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-terracotta font-semibold text-sm uppercase tracking-widest">
                Blog
              </span>
              <h2 className="font-heading text-3xl lg:text-5xl text-mocha-dark mt-3">
                Nos derniers articles
              </h2>
              <p className="text-cement-gray mt-4 max-w-2xl mx-auto">
                Des guides complets et des analyses détaillées pour vous accompagner
                dans votre projet de construction.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {articles.map((article, index) => (
              <ScrollReveal key={article.slug} delay={index * 150}>
                <ArticleCard article={article} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* About Section */}
      <AboutSection />

      {/* Newsletter Section */}
      <NewsletterSection />
    </>
  );
}
