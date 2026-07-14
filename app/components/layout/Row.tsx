import { ReactNode } from "react";

interface RowProps {
  children?: ReactNode;
  className?: string;
  maxWidth?: number;
  style?: React.CSSProperties;
}

/**
 * Row Component — Content width controller
 *
 * Purpose: Controls content width, alignment, and resolution.
 * - Default max-width: 1340px (matchpoint standard)
 * - Default width: 91.67% (w-11/12, ~4% margin each side)
 * - Always centered horizontally (mx-auto)
 * - Content never stretches beyond max-width on large screens
 *
 * Usage:
 * <Section bgColor="bg-black">
 *   <Row>
 *     Your content here
 *   </Row>
 * </Section>
 */
export default function Row({
  children,
  className = "",
  maxWidth = 1340,
  style: customStyle,
}: RowProps) {
  return (
    <div
      className={`block w-11/12 ${className}`}
      style={{
        maxWidth: `${maxWidth}px`,
        marginLeft: "auto",
        marginRight: "auto",
        ...customStyle,
      }}
    >
      {children}
    </div>
  );
}
