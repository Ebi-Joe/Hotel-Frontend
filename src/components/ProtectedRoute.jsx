import { Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const ProtectedRoute = ({ children, role }) => {
  const token = localStorage.getItem('auth-token');

  if (!token) {
    return <Navigate to="/unauthorized" replace />;
  }

  try {
    const decodedToken = jwtDecode(token);
    const userRole = decodedToken.role; // Adjust this based on your token structure

    if (role && userRole !== role) {
      return <Navigate to="/unauthorized" replace />;
    }

    return children;
  } catch (error) {
    return <Navigate to="/unauthorized" replace />;
  }
};

export default ProtectedRoute;
