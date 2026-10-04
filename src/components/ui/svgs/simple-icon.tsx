import type { SVGProps } from "react";
import type { SimpleIcon } from "simple-icons";

// Near-black brand colors (e.g. Kafka) vanish in dark mode, so render them with currentColor.
const isTooDark = (hex: string) => {
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16));
  return 0.299 * r + 0.587 * g + 0.114 * b < 60;
};

export const fromSimpleIcon = (icon: SimpleIcon) => {
  const Icon = (props: SVGProps<SVGSVGElement>) => (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill={isTooDark(icon.hex) ? "currentColor" : `#${icon.hex}`}
      {...props}
    >
      <path d={icon.path} />
    </svg>
  );
  Icon.displayName = icon.title;
  return Icon;
};
