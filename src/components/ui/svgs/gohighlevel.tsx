import type { SVGProps } from "react";

// HighLevel mark: three rising arrows in the brand's yellow, blue and green.
const arrow = (x: number, top: number) =>
  `M${x} ${top}l4 4.5h-2.5V22h-3V${top + 4.5}H${x - 4}z`;

export const GoHighLevel = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden viewBox="0 0 24 24" {...props}>
    <path d={arrow(4.5, 9)} fill="#FFBC00" />
    <path d={arrow(12, 2)} fill="#188BF6" />
    <path d={arrow(19.5, 6)} fill="#37CA37" />
  </svg>
);
GoHighLevel.displayName = "GoHighLevel";
