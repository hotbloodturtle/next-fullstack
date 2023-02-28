import { createContainer } from "unstated-next";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const LayoutContainerHook = () => {
  const useHeaderTitle = () => {
    const [title, setTitle] = useState<string>("");
    const pathname = usePathname();

    const getPageTitle = () => {
      if (pathname === "/") return "Home";
      return "Neubility";
    };
    useEffect(() => {
      setTitle(getPageTitle());
    }, []);
    return { title };
  };
  return { useHeaderTitle };
};

export default createContainer(LayoutContainerHook);
