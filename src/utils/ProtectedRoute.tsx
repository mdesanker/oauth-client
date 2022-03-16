import { Navigate } from "react-router-dom";
import { useAppSelector } from "../store/hooks";
import { RootState } from "../store/store";

interface Props {
  children: JSX.Element;
}

const ProtectedRoute = ({ children }: Props) => {
  const { isAuthenticated } = useAppSelector((state: RootState) => state.auth);

  return isAuthenticated ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
