import { Metadata } from "next";
import { getArticleBySlug, getAllSlugs, getAllArticles } from "@/lib/articles";
import { notFound } from "next/navigation";
import AdSlot from "@/components/AdSlot";
import ArticleCard from "@/components/ArticleCard";
import Link from "next/link";
import type { SectionImage } from "@/lib/articles";

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const article = await getArticleBySlug(params.slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.excerpt,
    keywords: article.tags,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.date,
      images: [{ url: article.image, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
    },
  };
}

function ImmersiveImage({ img }: { img: SectionImage }) {
  return (
    <div className="relative w-full h-[60vh] min-h-[400px] overflow-hidden">
      <img
        src={img.url}
        alt={img.alt}
        className="w-full h-full object-cover object-center"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-mocha-deep/70 via-mocha-deep/20 to-transparent" />
      {img.caption && (
        <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-10">
          <div className="max-w-4xl mx-auto">
            <p className="text-white-cream font-heading text-lg lg:text-2xl leading-snug">
              {img.caption}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default async function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const article = await getArticleBySlug(params.slug);
  if (!article) notFound();

  const allArticles = getAllArticles();
  const related = allArticles
    .filter((a) => a.slug !== article.slug)
    .slice(0, 2);

  const sectionImages = article.sectionImages || [];

  // Split content at h2 boundaries
  const sections = article.contentHtml.split(/(?=<h2)/);

  // Build render list
  type RenderItem =
    | { type: "html"; html: string }
    | { type: "image"; index: number }
    | { type: "ad" };

  const renderItems: RenderItem[] = [];
  let paragraphCount = 0;
  let adInserted = false;

  for (const section of sections) {
    // Check if an immersive image matches this section's h2
    const h2Match = section.match(/<h2[^>]*>(.*?)<\/h2>/);
    if (h2Match) {
      const h2Text = h2Match[1].replace(/<[^>]*>/g, "").trim();
      const imgIndex = sectionImages.findIndex((img) => img.after === h2Text);
      if (imgIndex !== -1) {
        renderItems.push({ type: "image", index: imgIndex });
      }
    }

    // Count paragraphs to insert ad after 3rd
    const pCount = (section.match(/<\/p>/g) || []).length;
    if (!adInserted && paragraphCount + pCount >= 3) {
      const pTags = section.split("</p>");
      const remaining = 3 - paragraphCount;
      const before = pTags.slice(0, remaining).join("</p>") + "</p>";
      const after = pTags.slice(remaining).join("</p>");
      renderItems.push({ type: "html", html: before });
      renderItems.push({ type: "ad" });
      if (after.trim()) {
        renderItems.push({ type: "html", html: after });
      }
      adInserted = true;
    } else {
      renderItems.push({ type: "html", html: section });
    }
    paragraphCount += pCount;
  }

  return (
    <>
      {/* Schema.org Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: article.title,
            image: article.image,
            datePublished: article.date,
            author: { "@type": "Organization", name: "BatiPro Afrique" },
            publisher: {
              "@type": "Organization",
              name: "BatiPro Afrique",
              logo: { "@type": "ImageObject", url: "https://batiproafrique.com/images/logo.png" },
            },
            description: article.excerpt,
          }),
        }}
      />

      {/* Schema.org BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Accueil", item: "https://batiproafrique.com" },
              { "@type": "ListItem", position: 2, name: "Articles", item: "https://batiproafrique.com/#articles" },
              { "@type": "ListItem", position: 3, name: article.title },
            ],
          }),
        }}
      />

      {/* Hero Image */}
      <div className="relative h-[60vh] min-h-[400px]">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-mocha-deep via-mocha-deep/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-12 max-w-4xl mx-auto">
          <div className="inline-block bg-terracotta/90 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
            {article.category}
          </div>
          <h1 className="font-heading text-3xl lg:text-5xl text-white-cream leading-tight">
            {article.title}
          </h1>
          <div className="flex items-center space-x-4 mt-4 text-mocha-cream text-sm">
            <span>
              {new Date(article.date).toLocaleDateString("fr-FR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
            <span>--</span>
            <span>{article.readTime} de lecture</span>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-4 py-4">
        <nav className="text-sm text-cement-gray">
          <Link href="/" className="hover:text-terracotta transition-colors">Accueil</Link>
          <span className="mx-2">/</span>
          <Link href="/#articles" className="hover:text-terracotta transition-colors">Articles</Link>
          <span className="mx-2">/</span>
          <span className="text-mocha-dark">{article.title}</span>
        </nav>
      </div>

      {/* Article Content with Immersive Images */}
      {renderItems.map((item, i) => {
        if (item.type === "image") {
          return (
            <ImmersiveImage key={`img-${i}`} img={sectionImages[item.index]} />
          );
        }
        if (item.type === "ad") {
          return (
            <div key={`ad-${i}`} className="max-w-4xl mx-auto px-4">
              <AdSlot id="ad-in-article" type="in-article" />
            </div>
          );
        }
        return (
          <div key={`html-${i}`} className="max-w-4xl mx-auto px-4">
            <div
              className="article-content"
              dangerouslySetInnerHTML={{ __html: item.html || "" }}
            />
          </div>
        );
      })}

      {/* Tags */}
      <div className="max-w-4xl mx-auto px-4 mt-12 pt-8 border-t border-concrete-light">
        <div className="flex flex-wrap gap-2 pb-8">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-mocha-cream text-mocha-dark text-sm rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* GOOGLE ADSENSE : Bas d'article */}
      <div className="max-w-4xl mx-auto px-4 pb-8">
        <AdSlot id="ad-post-article" type="in-article" />
      </div>

      {/* Related Articles */}
      {related.length > 0 && (
        <section className="bg-mocha-cream/50 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="font-heading text-2xl lg:text-3xl text-mocha-dark text-center mb-10">
              Articles recommandés
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {related.map((a) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
