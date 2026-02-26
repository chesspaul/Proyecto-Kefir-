import producto1 from "../assets/producto1.jpeg"
import producto2 from "../assets/producto2.jpeg"
import producto3 from "../assets/producto3.jpeg"
import producto4 from "../assets/producto4.avif"

function Productos() {
  return (
    <section id="productos" className="py-5 bg-light">
      <div className="container">

        <h2 className="text-center fw-bold mb-5">
          Nuestros Productos
        </h2>

        <div className="row g-4">

          {/* Producto 1 */}
          <div className="col-md-6 col-lg-3">
            <div className="card shadow-sm h-100 producto-card">
              <img src={producto1} className="card-img-top" alt="Plástico 1L" />
              <div className="card-body text-center">
                <h5 className="card-title">Botella de Plástico 1 Litro</h5>
                
                <p className="text-muted small">
                  Presentación ideal para consumir en familia.
                </p>

                <p className="text-success fw-bold fs-5">$110 MXN</p>

                <a href="#contacto" className="btn btn-success">
                  Comprar
                </a>
              </div>
            </div>
          </div>

          {/* Producto 2 */}
          <div className="col-md-6 col-lg-3">
            <div className="card shadow-sm h-100 producto-card">
              <img src={producto2} className="card-img-top" alt="Vidrio 1L" />
              <div className="card-body text-center">
                <h5 className="card-title">Botella de Vidrio 1 Litro</h5>

                <p className="text-muted small">
                  Presentación premium del kéfir. Logra conservar mejor la frescura y sabor.
                </p>

                <p className="text-success fw-bold fs-5">$150 MXN</p>

                <a href="#contacto" className="btn btn-success">
                  Comprar
                </a>
              </div>
            </div>
          </div>

          {/* Producto 3 */}
          <div className="col-md-6 col-lg-3">
            <div className="card shadow-sm h-100 producto-card">
              <img src={producto3} className="card-img-top" alt="Vidrio 500ml" />
              <div className="card-body text-center">
                <h5 className="card-title">Botella de Vidrio 500 ml</h5>

                <p className="text-muted small">
                  Tamaño individual ideal para consumo diario.
                </p>

                <p className="text-success fw-bold fs-5">$80 MXN</p>

                <a href="#contacto" className="btn btn-success">
                  Comprar
                </a>
              </div>
            </div>
          </div>

          {/* Producto 4 */}
          <div className="col-md-6 col-lg-3">
            <div className="card shadow-sm h-100 producto-card">
              <img src={producto4} className="card-img-top" alt="Plástico 500ml" />
              <div className="card-body text-center">
                <h5 className="card-title">Botella de Plástico 500 ml</h5>

                <p className="text-muted small">
                  Opción ligera y práctica para llevar y disfrutar.
                </p>

                <p className="text-success fw-bold fs-5">$65 MXN</p>

                <a href="#contacto" className="btn btn-success">
                  Comprar
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Productos