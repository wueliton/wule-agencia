import SolarIcons from "@iconify-json/solar/icons.json";
import type { IconProps } from "./types";

function Icon({ name, size = 32, className }: IconProps) {
  const iconList = (
    SolarIcons as { icons: { [k in string]: { body: string } } }
  ).icons;
  const iconContent = iconList[name];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      dangerouslySetInnerHTML={{
        __html: iconContent.body,
      }}
    />
  );
}

export default Icon;
