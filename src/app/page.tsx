"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const PageHome = () => {
  const router = useRouter();
  useEffect(() => {
    router.replace("/admin");
  }, []);
  return null;
};

export default PageHome;
