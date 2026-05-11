import { useNavigate } from "react-router-dom"
import { clearLocalStorage } from "../utils/auth"

function Navbar({ carrito = [], usuario, setUsuario, vaciarCarrito }) {
  const navigate = useNavigate()

  const handleLogout = () => {
    clearLocalStorage()
    setUsuario(null)
    vaciarCarrito()
    navigate("/")
    window.location.reload()
  }

  const handleCarrito = () => {
    navigate("/carrito")
  }

  const handleLogin = () => {
    navigate("/login")
  }

  const handleRegistro = () => {
    navigate("/registro")
  }

  const handleAdmin = () => {
    navigate("/admin")
  }

  return (

    <div className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">

      <div className="container">

        <a className="navbar-brand fw-bold" href="#inicio">
          Kefir Balance
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav ms-auto align-items-center">

            <li className="nav-item">
              <a className="nav-link" href="#beneficios">
                Beneficios
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#productos">
                Productos
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#insumo">
                Insumos
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#contacto">
                Contacto
              </a>
            </li>

            {/* CARRITO */}

            <li className="nav-item ms-3">

              <button onClick={handleCarrito} className="btn btn-success">

                🛒 Carrito ({carrito.length})

              </button>

            </li>

            {/* ADMIN Y AUTENTICACIÓN */}

            {!usuario ? (
              <>
                <li className="nav-item ms-2">
                  <button onClick={handleLogin} className="btn btn-outline-light">
                    Login
                  </button>
                </li>
                <li className="nav-item ms-2">
                  <button onClick={handleRegistro} className="btn btn-outline-success">
                    Registro
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item ms-3">
                  <span className="text-white">
                    👤 {usuario.nombre}
                  </span>
                </li>
                {usuario.isAdmin && (
                  <li className="nav-item ms-2">
                    <button onClick={handleAdmin} className="btn btn-warning">
                      Admin
                    </button>
                  </li>
                )}
                <li className="nav-item ms-2">
                  <button
                    onClick={handleLogout}
                    className="btn btn-danger"
                  >
                    Logout
                  </button>
                </li>
              </>
            )}

          </ul>

        </div>

      </div>

    </div>
  )
}

export default Navbar