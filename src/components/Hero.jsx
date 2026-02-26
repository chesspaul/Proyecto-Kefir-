import kefirImg from "../assets/kefir.jpg"

function Hero() {
    return (
        <section
         id="inicio"
         className="hero d-flex align-items-center text-white text-center"
         style={{
            backgroundImage: `url(${kefirImg})`,
         }}
        >
            <div className='container'>
                <h1 className="display-4 fw-bold">Kéfir Natural Artesanal</h1>
                <p className='lead'>
                    Probióticos naturales para tu bienestar diario
                </p>
                <a href="#productos" className='btn btn-success btn-lg mt-3'>
                    Ver Productos
                </a>
            </div>
        </section>
    )
}

export default Hero
