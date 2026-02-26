function Navbar() {
  return (
    <div className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
            <a className="navbar-brand fw-bold" href="inicio">
                Kefir Balance
            </a>
            <button
                className="navbar-toggler"  
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#beneficios">Beneficios</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#productos">Productos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#insumos">Insumos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contacto">Contacto</a>

                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar