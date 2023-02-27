import PageTitle from "@/components/admin/layouts/PageTitle";
import MobileSideBarToggle from "@/components/admin/layouts/MobileSideBarToggle";
import ButtonNotification from "@/components/admin/layouts/ButtonNotification";
import ButtonUserProfile from "@/components/admin/layouts/ButtonUserProfile";

const Header = () => {
  return (
    <div className="navbar  flex justify-between bg-base-100  z-10 shadow-md ">
      <div className="">
        <MobileSideBarToggle />
        <PageTitle />
      </div>
      <div className="order-last">
        <ButtonNotification />
        <ButtonUserProfile />
      </div>
    </div>
  );
};

export default Header;
