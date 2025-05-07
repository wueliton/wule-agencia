import keywords from "@models/keywords.json";
import slufigy from "@utils/slugify";
import type { GetStaticPathsResult } from "astro";

function useGetKeywords() {
  const getKeywords = () => {
    return keywords.map((keyword) => ({
      ...keyword,
      slug: slufigy(keyword.title),
    }));
  };

  const getKeyword = (slug: string) => {
    const allKeywords = getKeywords();
    return allKeywords.find((keyword) => keyword.slug === slug);
  };

  const getHeroKeyword = () => {
    return keywords.at(0);
  };

  const getDestaqs = () => {
    return keywords.splice(1, 4);
  };

  const getRecentsKeywords = () => {
    return keywords.splice(4, 0);
  };

  const getStaticPathsKeywords = (): GetStaticPathsResult => {
    const allKeywords = getKeywords();
    return allKeywords.map(({ slug }) => ({
      params: {
        slug,
      },
    }));
  };

  return {
    getKeywords,
    getKeyword,
    getHeroKeyword,
    getDestaqs,
    getRecentsKeywords,
    getStaticPathsKeywords,
  };
}

export default useGetKeywords;
