import "./Header.css"

function Header () {
    return (
        <div>
            <div class="logo">
                <img class="logo-superior" src={require("../../imagenes/descarga.png")} alt="logo de la renga"/>
            </div>
            <h1>
                LA RENGA
            </h1>
            <h2>
                Los Mismos De Siempre
            </h2>
        </div>
    )
}

export default Header