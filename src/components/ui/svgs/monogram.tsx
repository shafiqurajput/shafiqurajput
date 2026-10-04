import type { SVGProps } from "react";

// Brands missing from simple-icons (e.g. GoHighLevel) get a rounded letter badge in their color.
export const monogram = (letters: string, color: string, title: string) => {
  const Icon = (props: SVGProps<SVGSVGElement>) => (
    <svg aria-hidden viewBox="0 0 24 24" {...props}>
      <rect width="24" height="24" rx="6" fill={color} />
      <text
        x="12"
        y="16.5"
        textAnchor="middle"
        fontSize={letters.length > 1 ? 11 : 14}
        fontWeight="700"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
        fill="#fff"
      >
        {letters}
      </text>
    </svg>
  );
  Icon.displayName = title;
  return Icon;
};
