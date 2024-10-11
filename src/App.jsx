import './App.css'
import { Card } from './components/Card/Card'
import { Header } from './components/Header/Header'
import imgJordanGreen from './assets/images/jordan-green.svg'
import imgJordanGrey from './assets/images/jordan-grey.svg'
import imgJordanMid from './assets/images/jordan-mid.svg'
import imgJordanOrange from './assets/images/jordan-orange.svg'
import imgJordanPurple from './assets/images/jordan-purple.svg'
import imgJordanTropical from './assets/images/jordan-tropical.svg'


function App() {
  return (
    <>
        <Header />

        <div className='container'>
              <div className='content-text'>
                  <h1>Os melhores em só lugar</h1>
                  <p>A marca Jordan na JordanShoes é a escolha certa para os amantes de sneakers que buscam estilo e conforto.</p>
              </div>

              <div className='container-cards'>
                    <Card
                      image={imgJordanGreen}
                      nomeTenis={"Air Jordan 1 Mid Dutch Green"}
                      modeloTenis={"Tênis Air Jordan"}
                      valorTenis={"R$ 1.199,99"}
                    /> 

                    <Card
                      image={imgJordanTropical}
                      nomeTenis={"Air Jordan 1 Mid Dutch Green"}
                      modeloTenis={"Tênis Air Jordan"}
                      valorTenis={"R$ 1.199,99"}
                    />

                    <Card
                      image={imgJordanPurple}
                      nomeTenis={"Air Jordan 1 Mid Dutch Green"}
                      modeloTenis={"Tênis Air Jordan"}
                      valorTenis={"R$ 1.199,99"}
                    />

                    <Card
                      image={imgJordanGrey}
                      nomeTenis={"Air Jordan 1 Mid Dutch Green"}
                      modeloTenis={"Tênis Air Jordan"}
                      valorTenis={"R$ 1.199,99"}
                    />

                    <Card
                      image={imgJordanOrange}
                      nomeTenis={"Air Jordan 1 Mid Dutch Green"}
                      modeloTenis={"Tênis Air Jordan"}
                      valorTenis={"R$ 1.199,99"}
                    />

                    <Card
                      image={imgJordanMid}
                      nomeTenis={"Air Jordan 1 Mid Dutch Green"}
                      modeloTenis={"Tênis Air Jordan"}
                      valorTenis={"R$ 1.199,99"}
                    />
              </div>
        </div>
    </>
  )
}

export default App