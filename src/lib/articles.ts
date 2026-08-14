import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import html from "remark-html";

const articlesDirectory = path.join(process.cwd(), "content/articles");

export interface SectionImage {
  url: string;
  alt: string;
  caption: string;
  after: string;
  credit?: string;
}

/**
 * Fournisseur cité comme source vérifiée dans un article.
 *
 * Ce n'est pas un encart publicitaire : le bloc affiche l'entreprise auprès
 * de laquelle les tarifs de l'article ont été relevés, avec la date du
 * relevé. Le lecteur sait d'où vient le chiffre et où s'adresser.
 *
 * Le champ `after` fonctionne comme celui des images : le bloc s'insère
 * juste avant le titre de section indiqué.
 */
export interface Fournisseur {
  nom: string;
  activite: string;
  implantation: string;
  logo: string;
  /** Fond sombre derrière le logo, pour les logos en blanc sur transparent */
  logoFondSombre?: boolean;
  site?: string;
  email?: string;
  telephone?: string;
  /** Période du relevé de tarifs, affichée au lecteur */
  dateVerification: string;
  after: string;
}

export interface ArticleMeta {
  title: string;
  slug: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
  imageCredit?: string;
  readTime: string;
  tags: string[];
  sectionImages?: SectionImage[];
  fournisseurs?: Fournisseur[];
  priority?: number;
}

export interface Article extends ArticleMeta {
  contentHtml: string;
}

export function getAllArticles(): ArticleMeta[] {
  const fileNames = fs.readdirSync(articlesDirectory);
  const articles = fileNames
    .filter((f) => f.endsWith(".md"))
    .map((fileName) => {
      const fullPath = path.join(articlesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);
      return data as ArticleMeta;
    });

  return articles.sort((a, b) => {
    const priorityA = a.priority || 99;
    const priorityB = b.priority || 99;
    if (priorityA !== priorityB) return priorityA - priorityB;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const fileNames = fs.readdirSync(articlesDirectory);
  const fileName = fileNames.find((f) => {
    const fullPath = path.join(articlesDirectory, f);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);
    return data.slug === slug;
  });

  if (!fileName) return null;

  const fullPath = path.join(articlesDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(remarkGfm).use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    ...(data as ArticleMeta),
    contentHtml,
  };
}

export function getAllSlugs(): string[] {
  const fileNames = fs.readdirSync(articlesDirectory);
  return fileNames
    .filter((f) => f.endsWith(".md"))
    .map((fileName) => {
      const fullPath = path.join(articlesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);
      return data.slug;
    });
}
