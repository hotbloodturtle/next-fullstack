import "./globals.css";
import "./reset.css";
import { ReactNode } from "react";
import ReactQueryProvider from "@/containers/ReactQueryProvider";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko-KR">
      <head />
      <body>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
