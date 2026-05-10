import { useState, useEffect } from "react"

import {
  Routes,
  Route
} from "react-router-dom"

import { getUserFromLocalStorage } from "./utils/auth"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Logotipo from "./components/Logotipo"
import Beneficios from "./components/Beneficios"
import Productos from "./components/Productos"
import Insumo from "./components/Insumo"
import Contacto from "./components/Contacto"
import Footer from "./components/Footer"
import Admin from "./components/Admin"
import Login from "./components/Login"
import Register from "./components/Register"
import Carrito from "./components/Carrito"
import ProtectedRoute from "./components/ProtectedRoute"

function App() {

  const [carrito, setCarrito] = useState([])
  const [usuario, setUsuario] = useState(null)

  // Cargar datos al iniciar
  useEffect(() => {
    const usuarioGuardado = getUserFromLocalStorage()
    if (usuarioGuardado) {
      setUsuario(usuarioGuardado)
    }
    
    const carritoGuardado = localStorage.getItem("carrito")
    if (carritoGuardado) {
      try {
        setCarrito(JSON.parse(carritoGuardado))
      } catch (error) {
        console.log("Error al cargar carrito:", error)
        setCarrito([])
      }
    }
  }, [])

  useEffect(() => {
    const handleStorageChange = () => {
      const usuarioGuardado = getUserFromLocalStorage()
      setUsuario(usuarioGuardado)
    }
    
    window.addEventListener("storage", handleStorageChange)
    return () => window.removeEventListener("storage", handleStorageChange)
  }, [])

  // Guardar carrito en localStorage cada vez que cambie
  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito))
  }, [carrito])

  const agregarAlCarrito = (producto) => {

    setCarrito([
      ...carrito,
      producto
    ])

    alert("Producto agregado 🛒")
  }

  const eliminarDelCarrito = (index) => {
    const nuevoCarrito = carrito.filter((_, i) => i !== index)
    setCarrito(nuevoCarrito)
    alert("Producto removido del carrito ❌")
  }

  const vaciarCarrito = () => {
    setCarrito([])
  }

  return (

    <Routes>

      <Route
        path="/"
        element={
          <>
            <Navbar carrito={carrito} usuario={usuario} setUsuario={setUsuario} vaciarCarrito={vaciarCarrito} />

            <Hero />

            <Logotipo />

            <Beneficios />

            <Productos
              agregarAlCarrito={agregarAlCarrito}
              usuario={usuario}
            />

            <Insumo />

            <Contacto />

            <Footer />
          </>
        }
      />

      <Route
        path="/login"
        element={<Login setUsuario={setUsuario} />}
      />

      <Route
        path="/registro"
        element={<Register setUsuario={setUsuario} />}
      />

      <Route
        path="/carrito"
        element={
          <>
            <Navbar carrito={carrito} usuario={usuario} setUsuario={setUsuario} vaciarCarrito={vaciarCarrito} />
            <Carrito carrito={carrito} eliminarDelCarrito={eliminarDelCarrito} />
          </>
        }
      />

      <Route
        path="/admin"
        element={
          <ProtectedRoute usuario={usuario}>
            <Navbar carrito={carrito} usuario={usuario} setUsuario={setUsuario} vaciarCarrito={vaciarCarrito} />
            <Admin />
          </ProtectedRoute>
        }
      />

    </Routes>
  )
}

export default App