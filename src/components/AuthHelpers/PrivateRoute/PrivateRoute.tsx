import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { Navigate, Outlet, useLocation } from "react-router-dom";

function PrivateRoute({ redirect = "/login" }) {
  const { auth } = useSelector((state: RootState) => state.auth);
  const location = useLocation();
  
  if (!auth) {
    return <Navigate to={redirect} state={{ location }} />;
  }
  return <Outlet />;
}

export default PrivateRoute;
