
import DashboardLayout from "../Dashboard.jsx/DashboardLayout";
import Profilepage from "../Dashboard.jsx/Profilepage";
import LandingPages from "../pages/LandingPages";
import Signin from "../pages/SignIn";
import Signup from "../pages/SignUp";
import RatingSubmit from "../user/RatingSubmit";
import Stores from "../Owner/Stores";
import Createstore from "../Administrator/Createstore";
import CreateUser from "../Administrator/CreateUser";
import AllUser from "../Administrator/AllUser";
import AllStores from "../Administrator/AllStores";
import Allrating from "../Administrator/Allrating";
import FindStore from "../pages/FindStore";

export const routes = [
  {
    path: "/",
    element: <LandingPages />,
    public: true,
  },
  {
    path: "/signup",
    element: <Signup />,
    public: true,
  },
  {
    path: "/signin",
    element: <Signin />,
    public: true,
  },
  {
    path: "/findstores",
    element: <FindStore />,
    public: true,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    roles: ["user", "Owner", "Administrator"],
    children: [
      {
        index: true,
        element: <Profilepage />,
        roles: ["user", "Owner", "Administrator"],
      },
      {
        path: "rating",
        element: <RatingSubmit />,
        roles: ["user"],
      },
      {
        path: "store",
        element: <Stores />,
        roles: ["Owner"],
      },
      {
        path: "createStore",
        element: <Createstore />,
        roles: ["Administrator"],
      },
      {
        path: "createUser",
        element: <CreateUser />,
        roles: ["Administrator"],
      },
      {
        path: "alluser",
        element: <AllUser />,
        roles: ["Administrator"],
      },
      {
        path: "allstore",
        element: <AllStores />,
        roles: ["Administrator"],
      },
      {
        path: "allrating",
        element: <Allrating />,
        roles: ["Administrator"],
      },
    ],
  },
];
