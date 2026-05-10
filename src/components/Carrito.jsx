function Carrito({ carrito, eliminarDelCarrito }) {

  const total = carrito.reduce(
    (acc, producto) => acc + producto.precio,
    0
  )

  return (

    <section className="py-5 bg-light" style={{ minHeight: "100vh", marginTop: "80px" }}>

      <div className="container">

        <h2 className="fw-bold mb-4">
          🛒 Carrito de Compras
        </h2>

        {
          carrito.length === 0 ? (
            <div className="alert alert-info">
              <p>No hay productos en el carrito</p>
              <a href="/" className="btn btn-primary">Volver a la tienda</a>
            </div>
          ) : (
            <>
              {
                carrito.map((producto, index) => (

                  <div
                    key={index}
                    className="d-flex justify-content-between align-items-center border p-3 mb-3 rounded bg-white"
                  >

                    <div>
                      <h5>{producto.nombre}</h5>
                      <p className="mb-0 text-muted">
                        Material: {producto.material} | Volumen: {producto.volumen}
                      </p>
                      <p className="mb-0 text-success fw-bold">
                        ${producto.precio} MXN
                      </p>
                    </div>

                    <button
                      className="btn btn-danger"
                      onClick={() => eliminarDelCarrito(index)}
                    >
                      ❌ Eliminar
                    </button>

                  </div>
                ))
              }

              <div className="card p-4 mt-4 bg-success text-white">
                <h4>
                  Total: ${total} MXN
                </h4>
                <button className="btn btn-light mt-3">
                  Proceder al Pago
                </button>
              </div>
            </>
          )
        }

      </div>

    </section>
  )
}

export default Carrito