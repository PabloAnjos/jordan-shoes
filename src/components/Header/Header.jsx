import "../Header/Header.scss"
import imgJordan from "../../assets/images/jordan.png"
import logoJordan from "../../assets/images/logo-jordan.png"

export function Header() {
    return (
        <>
            <header>
                    <h1>Frete grátis para todo o Brasil</h1>
                 
                    <div className="content-jordan-shoes">
                        <h2>JordanShoes</h2>
                        <h3>A melhor loja de Jordan</h3>
                        <p>O tênis Jordan é fruto de uma velha e forte
                            parceria entre a Nike e o jogador Michael Jordan.</p>
                    </div>

                    <img src={imgJordan} alt="Imagem jogador de basquete jordan" />
            </header>
        </>
    )
}