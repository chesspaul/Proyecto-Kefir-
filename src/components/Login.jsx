import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { loginUser, saveUserToLocalStorage } from "../utils/auth"

const Login = ({ setUsuario }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      const data = await loginUser(email, password)
      
      saveUserToLocalStorage(data.token, data.nombre, data.email, data.isAdmin)
      
      setUsuario({
        token: data.token,
        nombre: data.nombre,
        email: data.email,
        isAdmin: data.isAdmin
      })
      
      alert("¡Login exitoso! ✅")
      navigate("/")
      
    } catch (err) {
      setError(err.message)
      alert("Error: " + err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-5" style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow p-5">
              <h2 className="text-center mb-4 fw-bold">Login</h2>

              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="tucorreo@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Contraseña</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Tu contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-success w-100"
                  disabled={loading}
                >
                  {loading ? "Cargando..." : "Ingresar"}
                </button>
              </form>

              <p className="text-center mt-3">
                ¿No tienes cuenta? <a href="/registro">Regístrate aquí</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login
