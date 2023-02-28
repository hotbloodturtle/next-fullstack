import { usePathname } from "next/navigation";
import { FC, ReactNode } from "react";

type SideSingleMenuProps = {
  icon: ReactNode;
  title: string;
  link: string;
};

const SideSingleMenu: FC<SideSingleMenuProps> = ({ icon, title, link }) => {
  const pathname = usePathname();
  return (
    <li>
      <span
        className={
          pathname === link ? "font-semibold bg-base-200" : "font-normal"
        }
      >
        {icon}
        {title}
        {pathname === link && (
          <span
            className="absolute inset-y-0 left-0 w-1 rounded-tr-md rounded-br-md bg-primary "
            aria-hidden="true"
          ></span>
        )}
      </span>
    </li>
  );
};

export default SideSingleMenu;
