import { useEffect, useState } from "react"
import { getAuthHeader } from "../utils/auth"

import producto1 from "../assets/producto1.jpeg"
import producto2 from "../assets/producto2.jpeg"
import producto3 from "../assets/producto3.jpeg"
import producto4 from "../assets/Producto4.avif"
import defaultImg from "../assets/default.jpg"

const imagenes = [
  producto1,
  producto2,
  producto3,
  producto4
]

function Productos({ agregarAlCarrito, usuario }) {
  const [productos, setProductos] = useState([])

  useEffect(() => {

    fetch("https://kefir-backend.onrender.com/api/productos")
      .then(res => res.json())
      .then(data => setProductos(data))
      .catch(error => console.log(error))

  }, [])

  const eliminarProducto = async (id) => {

    const confirmar = window.confirm(
      "¿Seguro que deseas eliminar este producto?"
    )

    if (!confirmar) return

    try {

      const respuesta = await fetch(
        `https://kefir-backend.onrender.com/api/productos/${id}`,
        {
          method: "DELETE",
          headers: getAuthHeader()
        }
      )

      if (!respuesta.ok) {
        const errorData = await respuesta.json()
        throw new Error(errorData.message || `Error ${respuesta.status}`)
      }

      setProductos(
        productos.filter(
          producto => producto._id !== id
        )
      )

      alert("Producto eliminado ✅")

    } catch (error) {

      console.log(error)
      alert("Error: " + error.message)
    }
  }

  return (

    <section id="productos" className="py-5 bg-light">

      <div className="container">

        <h2 className="text-center fw-bold mb-5">
          Nuestros Productos
        </h2>

        <div className="row g-4">

          {productos.map((producto, index) => (

            <div
              key={producto._id}
              className="col-md-6 col-lg-3"
            >

              <div className="card shadow-sm h-100 producto-card">

                <img
                  src={imagenes[index] || defaultImg}
                  className="card-img-top"
                  alt={producto.nombre}
                />

                <div className="card-body text-center">

                  <h5 className="card-title">
                    {producto.nombre}
                  </h5>

                  <p className="text-muted small">
                    Material: {producto.material}
                  </p>

                  <p className="text-muted small">
                    Volumen: {producto.volumen}
                  </p>

                  <p className="text-success fw-bold fs-5">
                    ${producto.precio} MXN
                  </p>
                  <button
                     className="btn btn-success"
                      onClick={() => agregarAlCarrito(producto)}
                  >
                     Comprar
                  </button>
                  {usuario?.isAdmin && (
                    <button
                      className="btn btn-danger mt-2"
                      onClick={() => eliminarProducto(producto._id)}
                    >
                      Eliminar
                    </button>
                  )}

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Productos

