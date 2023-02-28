"use client";

import "./reset.css";
import "./globals.css";
import { ReactNode } from "react";
import TokenContainer from "@/containers/TokenContainer";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko-KR">
      <head />
      <body>
        <TokenContainer.Provider>{children}</TokenContainer.Provider>
      </body>
    </html>
  );
}
