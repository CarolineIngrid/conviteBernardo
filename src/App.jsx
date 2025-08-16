import './App.css'
import CartaoConvite from './components/CartaoConvite'

function App() {

  const dadosConvite = {
    nome: "Bernardo",
    idade: "FAZ 1 ANINHO",
    text: "Um ano de risadas, descobertas e muito amor.\nVenha viver esse momento doce e especial com a gente\n e tornar nosso dia ainda mais feliz!",
    data: {
      dia: "07",
      mes: "09",
      ano: "2025",
      horario: "18:00 HRS",
    }
  }

  return (
    <>
      {/* <div className="app-container"> */}
        <CartaoConvite dados={dadosConvite} />
      {/* </div> */}
    </>
  )
}

export default App
