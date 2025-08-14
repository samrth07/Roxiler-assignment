import React from "react";
import SidebarMenu from "../Dashboard.jsx/SidebarMenu";

const UserdashBoard = () => {
  const userdata = [
    { label: "Rating", path: "rating" },
    { label: "findSore", path: "/findstores" },
  ];
  return (
    <div>
      <SidebarMenu userData={userdata} />
    </div>
  );
};

export default UserdashBoard;
