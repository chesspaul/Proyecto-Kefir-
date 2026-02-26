import insumoImg from "../assets/insumo.jpeg"
import lecheImg from "../assets/Leche.png"

const Insumo = () => {
  return (
    <section className="py-5 bg-light" id="insumo">
      <div className="container">
        <div className="row align-items-center">

          {/* Columna Carousel */}
          <div className="col-md-6 mb-4">

            <div id="insumoCarousel" className="carousel slide" data-bs-ride="carousel">

              <div className="carousel-inner rounded shadow">

                <div className="carousel-item active">
                  <img
                    src={insumoImg}
                    className="d-block w-100"
                    alt="Cultivo de kéfir"
                    style={{ height: "400px", objectFit: "cover" }}
                  />
                </div>

                <div className="carousel-item">
                  <img
                    src={lecheImg}
                    className="d-block w-100"
                    alt="Leche para fermentación"
                    style={{ height: "400px", objectFit: "cover" }}
                  />
                </div>

              </div>

              {/* Botones */}
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#insumoCarousel"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon"></span>
              </button>

              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#insumoCarousel"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon"></span>
              </button>

            </div>

          </div>

          {/* Columna Texto */}
          <div className="col-md-6">
            <h2 className="fw-bold mb-3">Nuestro Insumo</h2>

            <p className="text-muted">
              Nuestro cultivo de kéfir es 100% natural y fermentado de manera artesanal.
              Usamos leche fresca de calidad para garantizar un producto saludable
              y lleno de probióticos.
            </p>

            <ul className="list-unstyled mt-4">
              <li>Cultivo activo de kéfir</li>
              <li>Instrucciones de uso</li>
              <li>Guía de conservación</li>
              <li>Acompañamiento personalizado</li>
            </ul>

            <a href="#contacto" className="btn btn-success mt-3">
              Solicitar información
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Insumo