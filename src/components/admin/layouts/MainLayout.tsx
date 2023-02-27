import { FC, ReactNode } from "react";
import LeftSideBar from "@/components/admin/layouts/LeftSideBar";
import PageContent from "@/components/admin/layouts/PageContent";

type MainLayoutProps = {
  children: ReactNode;
};
const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="drawer drawer-mobile">
      <input
        id="left-sidebar-drawer"
        type="checkbox"
        className="drawer-toggle"
      />
      <PageContent>{children}</PageContent>
      <LeftSideBar />
    </div>
  );
};

export default MainLayout;
