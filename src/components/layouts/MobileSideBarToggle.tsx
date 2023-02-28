import { Bars3Icon } from "@heroicons/react/24/outline";

const MobileSideBarToggle = () => {
  return (
    <label
      htmlFor="left-sidebar-drawer"
      className="btn btn-ghost drawer-button lg:hidden"
    >
      <Bars3Icon className="h-5 inline-block w-5" />
    </label>
  );
};

export default MobileSideBarToggle;
