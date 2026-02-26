function Beneficios() {
  return (
    <section id="beneficios" className="py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">
          Beneficios del Kéfir
        </h2>

        <div className="row g-4">

          <div className="col-md-4">
            <div className="card h-100 text-center shadow-sm beneficio-card">
              <div className="card-body">
                <i className="bi bi-heart-pulse fs-1 text-success mb-3"></i>
                <h5 className="card-title fw-bold">
                  Mejora la Digestión
                </h5>
                <p className="card-text text-muted">
                  Rico en probióticos naturales que equilibran la flora intestinal.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 text-center shadow-sm beneficio-card">
              <div className="card-body">
                <i className="bi bi-shield-check fs-1 text-success mb-3"></i>
                <h5 className="card-title fw-bold">
                  Fortalece el Sistema Inmune
                </h5>
                <p className="card-text text-muted">
                  Aporta bacterias beneficiosas que protegen tu organismo.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 text-center shadow-sm beneficio-card">
              <div className="card-body">
                <i className="bi bi-emoji-smile fs-1 text-success mb-3"></i>
                <h5 className="card-title fw-bold">
                  Energía Natural
                </h5>
                <p className="card-text text-muted">
                  Fuente natural de vitaminas y minerales esenciales.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Beneficios