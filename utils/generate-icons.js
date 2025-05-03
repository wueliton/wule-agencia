import fs from "fs";
import solarIcons from "../node_modules/@iconify-json/solar/icons.json" with { type: "json" };

const iconNames = Object.keys(solarIcons.icons);

// Ou gerar um tipo TypeScript
const typeDef = `// AUTO-GERADO a partir de @iconify-json/solar
export type SolarIconName =
${iconNames.map((name) => `  | "${name}"`).join("\n")};
`;

fs.writeFileSync("src/types/solar-icon-names.d.ts", typeDef, "utf-8");

console.log("✅ Nomes de ícones extraídos e tipagem gerada!");
