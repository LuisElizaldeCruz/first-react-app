import React from "react";

const Testimonio =()=>{
    return(
        <div className="contenedor-testimonio">
            <img 
            className="imagen-testimonio"
            src={require("../imagenes/imagen-emma.png")} 
            alt="foto de perfil"/>
            <div className="contenedor-texto-testimonio">   
                <p className="nombre-testimonio">Emma Bostian en Suecia</p>
                <p className="cargo-testimonio">Ingenieria de Software en Spotify</p>
                <p className="texto-testimonio">"Siempre me ha costado aprender JavaScript. Tomé muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como un ingeniero de software en Spotify".</p>
            </div>
        </div>
    );
}

export default Testimonio;