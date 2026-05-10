import { useState } from "react"

import {
  Routes,
  Route
} from "react-router-dom"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Logotipo from "./components/Logotipo"
import Beneficios from "./components/Beneficios"
import Productos from "./components/Productos"
import Insumo from "./components/Insumo"
import Contacto from "./components/Contacto"
import Footer from "./components/Footer"
import Admin from "./components/Admin"

function App() {

  const [carrito, setCarrito] = useState([])

  const agregarAlCarrito = (producto) => {

    setCarrito([
      ...carrito,
      producto
    ])

    alert("Producto agregado 🛒")
  }

  return (

    <Routes>

      <Route
        path="/"
        element={
          <>
            <Navbar carrito={carrito} />

            <Hero />

            <Logotipo />

            <Beneficios />

            <Productos
              agregarAlCarrito={agregarAlCarrito}
            />

            <Insumo />

            <Contacto />

            <Footer />
          </>
        }
      />

      <Route
        path="/admin"
        element={<Admin />}
      />

    </Routes>
  )
}

export default App