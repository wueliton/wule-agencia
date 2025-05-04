import keywords from "@models/keywords.json";

function useGetKeywords() {
  const getKeywords = () => {
    return keywords;
  };

  const getKeyword = (slug: string) => {
    return keywords.find((item) => item.title);
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

  return {
    getKeywords,
    getKeyword,
    getHeroKeyword,
    getDestaqs,
    getRecentsKeywords,
  };
}

export default useGetKeywords;
