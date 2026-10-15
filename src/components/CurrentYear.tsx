"use client";

import { useEffect, useRef } from "react";

export function CurrentYear() {
  const yearRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (yearRef.current) {
      yearRef.current.textContent = String(new Date().getFullYear());
    }
  }, []);

  return <span ref={yearRef} />;
}
