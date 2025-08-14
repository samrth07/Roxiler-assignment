import React from "react";
import SidebarMenu from "../Dashboard.jsx/SidebarMenu";

const Ownerdashboard = () => {
  const userData = [{ label: "store", path: "store" }];
  return (
    <div>
      <SidebarMenu userData={userData} />
    </div>
  );
};

export default Ownerdashboard;
