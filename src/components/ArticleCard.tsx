import Link from "next/link";
import type { ArticleMeta } from "@/lib/articles";

const categoryColors: Record<string, { bg: string; text: string }> = {
  "Coûts & Budget": { bg: "bg-sand-gold/20", text: "text-sand-gold" },
  "Matériaux": { bg: "bg-terracotta/15", text: "text-terracotta" },
  "Guide Pratique": { bg: "bg-earth-green/15", text: "text-earth-green" },
  "Réglementation": { bg: "bg-mocha/20", text: "text-mocha-dark" },
};

export default function ArticleCard({ article }: { article: ArticleMeta }) {
  const cat = categoryColors[article.category] || categoryColors["Guide Pratique"];

  return (
    <Link href={`/articles/${article.slug}/`} className="block group">
      <article className="card-3d bg-white-cream rounded-2xl overflow-hidden shadow-md border border-concrete-light/50">
        {/* Image */}
        <div className="relative h-52 overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-mocha-deep/40 to-transparent" />
          {/* Category Badge */}
          <div className={`absolute top-4 left-4 ${cat.bg} ${cat.text} px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm`}>
            {article.category}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="font-heading text-xl text-mocha-dark leading-snug mb-3 group-hover:text-terracotta transition-colors">
            {article.title}
          </h3>
          <p className="text-cement-gray text-sm leading-relaxed mb-4 line-clamp-2">
            {article.excerpt}
          </p>
          <div className="flex items-center justify-between text-xs text-mocha-light">
            <span>{new Date(article.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}</span>
            <span className="flex items-center space-x-1">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{article.readTime}</span>
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
