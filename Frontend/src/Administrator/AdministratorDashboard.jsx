import React from "react";
import SidebarMenu from "../Dashboard.jsx/SidebarMenu";

const AdministratorDashboard = () => {
  const userData = [
    { label: "Users", path: "alluser" },
    { label: "Stores", path: "allstore" },
    { label: "Ratings", path: "allrating" },
    { label: "Create User", path: "createUser" },
    { label: "Create Store", path: "createStore" },
  ];
  return (
    <div>
      <SidebarMenu userData={userData} />
    </div>
  );
};

export default AdministratorDashboard;
