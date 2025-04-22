import { Navigate } from "react-router";
import { useAuth } from "../../context/authContext";

const AuthRoute = ({ children }) => {
    const { user, loading } = useAuth();
    if (loading) return ;
    if (user) return <Navigate to={"/home"} />;
    return <>{children}</>;
  }

  export default AuthRoute;
  