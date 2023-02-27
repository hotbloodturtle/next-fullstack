import { FC, ReactNode } from "react";
import Header from "@/components/admin/layouts/Header";

type PageContentProps = {
  children: ReactNode;
};

const PageContent: FC<PageContentProps> = ({ children }) => {
  return (
    <div className="drawer-content flex flex-col ">
      <Header />
      <div className="flex flex-col flex-1 overflow-y-auto">
        <main className="flex-1 overflow-y-auto pt-8 px-6  bg-base-200">
          {children}
        </main>
      </div>
    </div>
  );
};
export default PageContent;
