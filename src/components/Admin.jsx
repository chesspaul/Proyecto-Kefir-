import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getAuthHeader, getUserFromLocalStorage } from "../utils/auth"

const Admin = () => {
  const navigate = useNavigate()
  const usuario = getUserFromLocalStorage()

  // Validar que el usuario sea admin
  useEffect(() => {
    if (!usuario || !usuario.isAdmin) {
      navigate("/")
    }
  }, [usuario, navigate])

  const [productos, setProductos] = useState([])

  const [nombre, setNombre] = useState("")
  const [precio, setPrecio] = useState("")
  const [material, setMaterial] = useState("")
  const [volumen, setVolumen] = useState("")
  const [stock, setStock] = useState("")

  const obtenerProductos = async () => {

    try {

      const respuesta = await fetch(
        "https://kefir-backend.onrender.com/api/productos"
      )

      const data = await respuesta.json()

      setProductos(data)

    } catch (error) {

      console.log(error)
    }
  }

  useEffect(() => {

    obtenerProductos()

  }, [])

  const agregarProducto = async (e) => {

    e.preventDefault()

    const nuevoProducto = {
      nombre,
      precio,
      material,
      volumen,
      stock
    }

    try {

      const respuesta = await fetch(
        "https://kefir-backend.onrender.com/api/productos",
        {
          method: "POST",
          headers: getAuthHeader(),
          body: JSON.stringify(nuevoProducto)
        }
      )

      if (!respuesta.ok) {
        const errorData = await respuesta.json()
        throw new Error(errorData.message || `Error ${respuesta.status}`)
      }

      const data = await respuesta.json()

      setProductos([...productos, data])

      alert("Producto agregado ✅")

      setNombre("")
      setPrecio("")
      setMaterial("")
      setVolumen("")
      setStock("")

    } catch (error) {

      console.log(error)
      alert("Error: " + error.message)
    }
  }

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

    <section className="container py-5">

      <h2 className="text-center mb-5 fw-bold">
        Panel Administrador
      </h2>

      <a 
        href="/Proyecto-Kefir-/" 
        className="btn btn-dark mb-4"
      >
        ← Volver a la tienda
      </a>

      <form
        className="card p-4 shadow mb-5"
        onSubmit={agregarProducto}
      >

        <div className="row g-3">

          <div className="col-md-4">

            <input
              type="text"
              className="form-control"
              placeholder="Nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />

          </div>

          <div className="col-md-2">

            <input
              type="number"
              className="form-control"
              placeholder="Precio"
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
            />

          </div>

          <div className="col-md-2">

            <input
              type="text"
              className="form-control"
              placeholder="Material"
              value={material}
              onChange={(e) => setMaterial(e.target.value)}
            />

          </div>

          <div className="col-md-2">

            <input
              type="text"
              className="form-control"
              placeholder="Volumen"
              value={volumen}
              onChange={(e) => setVolumen(e.target.value)}
            />

          </div>

          <div className="col-md-2">

            <input
              type="number"
              className="form-control"
              placeholder="Stock"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
            />

          </div>

        </div>

        <button
          className="btn btn-success mt-4"
          type="submit"
        >
          Agregar Producto
        </button>

      </form>

      <div className="table-responsive">

        <table className="table table-striped table-hover">

          <thead className="table-dark">

            <tr>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Stock</th>
              <th>Eliminar</th>
            </tr>

          </thead>

          <tbody>

            {productos.map((producto) => (

              <tr key={producto._id}>

                <td>{producto.nombre}</td>

                <td>${producto.precio}</td>

                <td>{producto.stock}</td>

                <td>

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() =>
                      eliminarProducto(producto._id)
                    }
                  >
                    Eliminar
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </section>
  )
}

export default Admin
