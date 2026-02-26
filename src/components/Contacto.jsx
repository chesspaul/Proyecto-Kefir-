const Contacto = () => {
  return (
    <section className="py-5" id="contacto">
      <div className="container">

        <h2 className="text-center fw-bold mb-5">
          Contáctanos
        </h2>

        <div className="row justify-content-center">
          <div className="col-md-8">

            <form className="shadow p-4 rounded bg-light">

              <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Tu nombre"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Correo electrónico</label>
                <input 
                  type="email" 
                  className="form-control" 
                  placeholder="tucorreo@email.com"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Mensaje</label>
                <textarea 
                  className="form-control" 
                  rows="4"
                  placeholder="Escribe tu mensaje..."
                ></textarea>
              </div>

              <div className="text-center">
                <button 
                  type="submit" 
                  className="btn btn-success px-4"
                >
                  Enviar mensaje
                </button>
              </div>

            </form>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Contacto