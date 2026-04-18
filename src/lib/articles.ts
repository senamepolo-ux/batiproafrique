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
