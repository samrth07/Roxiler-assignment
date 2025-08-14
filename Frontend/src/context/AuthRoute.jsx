import { Navigate } from "react-router-dom";
import { useAuth } from "./Authcontext";

const AuthRoute = ({ children, requiredRoles }) => {
  const { user, loading } = useAuth();
  if (loading) {
    return <div>Loading...</div>; 
  }

  
  if (!user) {
    return <Navigate to="/" replace />;
  }

  if(!user.role || !requiredRoles?.includes(user.role)){
    return <Navigate to="/" replace/>
  }

  return children;
};

export default AuthRoute;