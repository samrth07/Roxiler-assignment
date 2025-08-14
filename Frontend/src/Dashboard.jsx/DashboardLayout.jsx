import { Outlet } from "react-router-dom";
import UserdashBoard from "../user/UserdashBoard";
import Ownerdashboard from "../Owner/Ownerdashboard";
import AdministratorDashboard from "../Administrator/AdministratorDashboard";
import { useAuth } from "../context/Authcontext";
const DashboardLayout = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  let SidebarComponent = <div>No user</div>;

  if (user?.role === "user") {
    SidebarComponent = <UserdashBoard />;
  } else if (user?.role === "Owner") {
    SidebarComponent = <Ownerdashboard />;
  } else if (user?.role === "Administrator") {
    SidebarComponent = <AdministratorDashboard />;
  }

  return (
    <div className="flex min-h-screen">
      {SidebarComponent}

      <div className="ml-56 w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
