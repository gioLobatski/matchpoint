import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  bgColor?: string;
  bgImage?: string;
  style?: React.CSSProperties;
}

/**
 * Section Component — Full-width section container
 *
 * Purpose: Full-width container for background colors/images and visual separation.
 * - Always spans 100% viewport width
 * - Used only for backgrounds and visual containers
 * - Does not control content width (use Row for that)
 */
export default function Section({
  children,
  className = "",
  id,
  bgColor,
  bgImage,
  style: customStyle,
}: SectionProps) {
  const style: React.CSSProperties = {
    ...(bgImage && {
      backgroundImage: `url(${bgImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }),
    ...customStyle,
  };

  const finalClassName = `${bgColor ?? ""} ${className}`.trim();

  return (
    <section id={id} className={`w-full ${finalClassName}`} style={style}>
      {children}
    </section>
  );
}
