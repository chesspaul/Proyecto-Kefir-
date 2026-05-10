import { useEffect, useState } from "react"

const Admin = () => {

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
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(nuevoProducto)
        }
      )

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

      alert("Error ❌")
    }
  }

  const eliminarProducto = async (id) => {

    try {

      await fetch(
        `https://kefir-backend.onrender.com/api/productos/${id}`,
        {
          method: "DELETE"
        }
      )

      setProductos(
        productos.filter(
          producto => producto._id !== id
        )
      )

    } catch (error) {

      console.log(error)
    }
  }

  return (

    <section className="container py-5">

      <h2 className="text-center mb-5 fw-bold">
        Panel Administrador
      </h2>

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
