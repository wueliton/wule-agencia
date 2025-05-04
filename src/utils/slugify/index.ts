function slufigy(title: string) {
  const stopWords = [
    "e",
    "ou",
    "mas",
    "para",
    "em",
    "com",
    "de",
    "do",
    "da",
    "no",
    "na",
    "um",
    "uma",
    "os",
    "as",
    "um",
    "uma",
    "se",
    "que",
    "por",
  ];
  const regex = new RegExp(`\\b(${stopWords.join("|")})\\b`, "gi");

  return `${title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(regex, "")
    .replace(/\s+/g, "-")}`;
}

export default slufigy;
