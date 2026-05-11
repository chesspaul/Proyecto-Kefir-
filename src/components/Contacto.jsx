import { useState } from "react"

const Contacto = () => {

  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")
  const [mensaje, setMensaje] = useState("")

  const handleSubmit = async (e) => {

    e.preventDefault()

    const nuevoContacto = {
      nombre,
      email,
      mensaje
    }

    try {

      const respuesta = await fetch(
        "https://kefir-backend.onrender.com/api/contactos",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(nuevoContacto)
        }
      )

      const data = await respuesta.json()

      console.log(data)

      alert("Mensaje enviado correctamente ")

      setNombre("")
      setEmail("")
      setMensaje("")

    } catch (error) {

      console.log(error)

      alert("Hubo un error ")
    }
  }

  return (
    <section className="py-5" id="contacto">

      <div className="container">

        <h2 className="text-center fw-bold mb-5">
          Contáctanos
        </h2>

        <div className="row justify-content-center">

          <div className="col-md-8">

            <form
              className="shadow p-4 rounded bg-light"
              onSubmit={handleSubmit}
            >

              <div className="mb-3">

                <label className="form-label">
                  Nombre
                </label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Tu nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />

              </div>

              <div className="mb-3">

                <label className="form-label">
                  Correo electrónico
                </label>

                <input
                  type="email"
                  className="form-control"
                  placeholder="tucorreo@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

              </div>

              <div className="mb-3">

                <label className="form-label">
                  Mensaje
                </label>

                <textarea
                  className="form-control"
                  rows="4"
                  placeholder="Escribe tu mensaje..."
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
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
