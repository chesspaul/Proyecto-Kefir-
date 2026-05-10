import { Navigate } from "react-router-dom"

const ProtectedRoute = ({ usuario, children }) => {
  if (!usuario) {
    return <Navigate to="/login" />
  }

  if (!usuario.isAdmin) {
    return <Navigate to="/" />
  }

  return children
}

export default ProtectedRoute
