"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function Fader({ children }: { children: React.ReactNode }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 30);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(80px)",
        transition: "opacity 1.2s ease, transform 1.2s ease",
      }}
    >
      {children}
    </div>
  );
}

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return <Fader key={pathname}>{children}</Fader>;
}
