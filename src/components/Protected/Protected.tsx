import { Navigate } from "react-router-dom";

const Protected = ({
  isLoggedIn,
  children,
}: {
  isLoggedIn: boolean;
  children: JSX.Element;
}) => {
  if (!isLoggedIn) {
    return <Navigate to="/sign-in" replace />;
  }
  return children;
};
export default Protected;
