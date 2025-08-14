
import './App.css'
import CartaoConvite from './components/CartaoConvite'

function App() {

  const dadosConvite = {
    nome: "Bernardo",
    idade: "1 aninho",
    data: {
      dia: "07",
      mes: "09",
      ano: "2025",
      horario: "17:30"
    }
  }

  return (
    <>
      <div className="app-container">
        <CartaoConvite dados={dadosConvite} />
      </div>
    </>
  )
}

export default App
