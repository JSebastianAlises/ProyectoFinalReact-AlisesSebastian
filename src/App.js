import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import NavBar from './components/NavBar/navBar';
import ContenedorDeTarjetas from "./components/ItemListContainer/ContenedorDeTarjetas";

function App() {
    return (
        <div className="App">
            <header>
                <div class="logo">
                    <img class="logo-superior" src={require("./imagenes/descarga.png")} alt="logo de la renga"/>
                </div>
                <h1>
                    LA RENGA
                </h1>
                <h2>
                    Los Mismos De Siempre
                </h2>
                <NavBar />
            </header>
            <main>
                <ContenedorDeTarjetas />
            </main>
        </div>
    );
}

export default App;
