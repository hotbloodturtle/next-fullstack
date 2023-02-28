import TopLogo from "@/components/layouts/TopLogo";
import SideMultiMenu from "@/components/layouts/SideMultiMenu";
import SideSingleMenu from "@/components/layouts/SideSingleMenu";
import {
  ChartBarIcon,
  CircleStackIcon,
  EyeIcon,
  MapPinIcon,
  Squares2X2Icon,
  TruckIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const LeftSideBar = () => {
  return (
    <div className="drawer-side ">
      <label htmlFor="left-sidebar-drawer" className="drawer-overlay"></label>
      <ul className="menu pt-2 w-80 bg-base-100 text-base-content">
        <TopLogo />
        <SideMultiMenu
          title="SideMultiMenu1"
          icon={<ChartBarIcon className="h-6 w-6 inline" />}
          subMenu={[
            {
              icon: <EyeIcon className="h-5 w-5" />,
              title: "sub1",
              link: "/",
            },
            {
              icon: <CircleStackIcon className="h-5 w-5" />,
              title: "sub2",
              link: "/",
            },
          ]}
        />
        <SideMultiMenu
          title="SideMultiMenu2"
          icon={<ChartBarIcon className="h-6 w-6 inline" />}
          subMenu={[
            {
              icon: <TruckIcon className="h-5 w-5" />,
              title: "sub1",
              link: "/",
            },
            {
              icon: <MapPinIcon className="h-5 w-5" />,
              title: "sub2",
              link: "/",
            },
            {
              icon: <UserGroupIcon className="h-5 w-5" />,
              title: "sub3",
              link: "/",
            },
          ]}
        />
        <SideSingleMenu
          icon={<Squares2X2Icon className="h-6 w-6" />}
          title="SideSingleMenu"
          link="/"
        />
      </ul>
    </div>
  );
};

export default LeftSideBar;
