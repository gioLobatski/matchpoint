import { ReactNode } from "react";

/**
 * (minor) Route Group Layout
 *
 * Shared layout for minor/utility pages (Thank You, Coming Soon, Maintenance).
 * Minimal chrome — pages control their own Header/Footer visibility.
 */
export default function MinorLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
