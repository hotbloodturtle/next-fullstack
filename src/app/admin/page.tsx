"use client";
import TokenContainer from "@/containers/TokenContainer";
import { useEffect } from "react";

const PageAdminHome = () => {
  const { accessToken } = TokenContainer.useContainer();
  useEffect(() => {
    console.log(document.cookie);
  }, []);
  return (
    <div>
      <h1>Admin</h1>
      <p>Restricted area! Only users with the admin role are authorized.</p>
      <p>accessToken: {accessToken}</p>
    </div>
  );
};

export default PageAdminHome;
