import "./App.css";
import Home from "./components/Home";

function App() {
  const nombre = "santi";
  const edad = 20;
  const myH1 = <h1>hola me llamo jozelui</h1>;
  const Josito = "es un máquina (calvo)";

  return (
    <div className="App">
      <h1>
        Hola mundo me llamo {nombre}
        {edad > 30
          ? `y tengo más de 30 años: ${edad}`
          : `y tengo menos de 30 años: ${edad}`}
      </h1>
      {myH1}
      <Home clave={Josito} color="brown" ojos={5} imagen="http://images3.memedroid.com/images/UPLOADED220/5bb60b8852dfc.jpeg"/>
      {/* Angular <app-home [clave]="Josito"></app-home> */}
    </div>
  );
}

export default App;
