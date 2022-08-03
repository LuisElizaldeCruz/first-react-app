import './App.css';
import Testimonio from "./componentes/Testimonio.js";

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Esto es lo que dicen nuestros alumnos acerca de freeCodeCamp</h1>
        <Testimonio
          nombre="Shawn Wang" 
          pais="Singapur"
          imagen="shawn"
          cargo="Ingeniero de software"
          empresa="Amazon"
          testimonio="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit magnam consectetur aliquam, illo ratione sit qui voluptatem, esse praesentium rem repellat impedit sed vitae eligendi fugiat. Aliquam perspiciatis dicta esse."
          />
          <Testimonio
          nombre="Sarah Chima"
          pais="Nigeria"
          imagen="sarah"
          cargo="Ingeniera de software"
          empresa="ChatDesk"
          testimonio="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit magnam consectetur aliquam, illo ratione sit qui voluptatem, esse praesentium rem repellat impedit sed vitae eligendi fugiat. Aliquam perspiciatis dicta esse."
          />
        <Testimonio
          nombre="Emma Bostian"
          pais="Suecia"
          imagen="emma"
          cargo="Ingeniero de Software"
          empresa="Spotify"
          testimonio="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit magnam consectetur aliquam, illo ratione sit qui voluptatem, esse praesentium rem repellat impedit sed vitae eligendi fugiat. Aliquam perspiciatis dicta esse."
        />
      </div>
    </div>
  );
}

export default App;
