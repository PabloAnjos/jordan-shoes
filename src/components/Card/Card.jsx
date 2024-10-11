import "../Card/Card.scss"



export function Card({ image, nomeTenis, modeloTenis, valorTenis}) {
    return (
        <>
            <div className="card">
                    <div className="container-image">
                        <img src={image} alt="Imagem tênis Jordan" />
                    </div>

                    <h1>{nomeTenis}</h1>
                    <h2>{modeloTenis}</h2>
                    <p>{valorTenis}</p>
            </div>
        </>
    )
}