import { useAuth } from "../../context/authContext";
import { Navigate } from "react-router";

const ProjectedRoute =({ children })=> {
  const { user, loading } = useAuth();

  if (loading) return ;
  if (!user) return <Navigate to={"/"} />;

  return <>{children}</>;
}

export default ProjectedRoute;