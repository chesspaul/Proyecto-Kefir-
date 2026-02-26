import logo from "../assets/Logo.jpeg"

function Logotipo() {
  return (
    <section className="py-5 bg-light text-center">
      <div className="container">
        <img
          src={logo}
          alt="Logo Kefir"
          className="mb-4"
          style={{ maxWidth: "180px" }}
        />

        <h2 className="fw-bold mb-3">Nuestra Marca</h2>

        <p className="text-muted mx-auto" style={{ maxWidth: "700px" }}>
          En Kefir Balance elaboramos productos artesanales ricos en probióticos,
          ideales para fortalecer tu sistema digestivo y mejorar tu bienestar
          general. Calidad, frescura y salud en cada botella.
        </p>
      </div>
    </section>
  )
}

export default Logotipo