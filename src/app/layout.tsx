import "./globals.css";
import "./reset.css";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko-KR">
      <head />
      <body>
        {children}
      </body>
    </html>
  );
}
