import { getCollection, type CollectionEntry } from "astro:content";
import { DEFAULT_LOCALE, type Locale } from "./i18n";

export type BlogEntry = CollectionEntry<"blog">;

/** One entry per article (grouped by `articleId`), localized to `lang`
 * (falling back to the default locale, then to whatever locale is
 * available) and sorted newest first. Used to render the blog index. */
export async function getArticlesForLocale(lang: Locale): Promise<BlogEntry[]> {
  const all = await getCollection("blog", ({ data }) => !data.draft);
  const byArticle = new Map<string, BlogEntry[]>();

  for (const entry of all) {
    const versions = byArticle.get(entry.data.articleId) ?? [];
    versions.push(entry);
    byArticle.set(entry.data.articleId, versions);
  }

  const result: BlogEntry[] = [];
  for (const versions of byArticle.values()) {
    const match =
      versions.find((v) => v.data.lang === lang) ??
      versions.find((v) => v.data.lang === DEFAULT_LOCALE) ??
      versions[0];
    result.push(match);
  }

  result.sort((a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime());
  return result;
}

/** Every (slug, lang) route param pair to statically generate — one per
 * localized markdown file in the collection. */
export async function getAllSlugLangPairs(): Promise<{ slug: string; lang: Locale }[]> {
  const all = await getCollection("blog", ({ data }) => !data.draft);
  return all.map((entry) => ({ slug: entry.data.articleId, lang: entry.data.lang }));
}
