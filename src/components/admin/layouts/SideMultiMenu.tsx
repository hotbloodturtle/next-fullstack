import { ChevronDownIcon } from "@heroicons/react/24/outline";
import useSideBar from "@/hooks/admin/layouts/useSideBar";
import { FC, ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type SideMultiMenuProps = {
  icon: ReactNode;
  title: string;

  subMenu: { icon: ReactNode; title: string; link: string }[];
};

const SideMultiMenu: FC<SideMultiMenuProps> = ({ icon, title, subMenu }) => {
  const { isExpanded, toggleExpanded } = useSideBar();
  const pathname = usePathname();
  return (
    <li>
      <div className="flex-col">
        <div className="w-full" onClick={toggleExpanded}>
          {icon}
          <span className="ml-2">{title}</span>
          <ChevronDownIcon
            className={`w-5 h-5 mt-1 float-right delay-400 duration-500 transition-all ${
              isExpanded ? "rotate-180" : ""
            }`}
          />
        </div>
        <div className={`w-full ${isExpanded ? "" : "hidden"}`}>
          <ul className="menu menu-compact">
            {subMenu.map((menu, idx) => {
              return (
                <li key={idx}>
                  <Link href={menu?.link}>
                    {menu?.icon}
                    {menu?.title}
                    {pathname === menu?.link && (
                      <span
                        className="absolute inset-y-0 left-0 w-1 rounded-tr-md rounded-br-md bg-primary "
                        aria-hidden="true"
                      ></span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </li>
  );
};

export default SideMultiMenu;
