"use client";
import { ReactNode } from "react";
import MainLayout from "@/components/admin/layouts/MainLayout";
import LayoutContainer from "@/containers/admin/LayoutContainer";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <LayoutContainer.Provider>
      <MainLayout>{children}</MainLayout>
    </LayoutContainer.Provider>
  );
}
