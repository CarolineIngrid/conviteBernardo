import React, { useRef, useState } from 'react'
import folhasTopo from '/plantaestrela.svg'
import carroAnimais from '/carrinho.png'
import bebe from '/Bernardo.svg'
import footerImg from '/image-removebg-preview (2).png'
import zebra from '/zebra.png' // coloque sua imagem da zebra na pasta public e ajuste o caminho
import ModalPresentes from './ModalPresentes'
import ModalConfirmacao from './ModalConfirmacao'

const CirculoData = ({ valor }) => (
  <div className="w-14 h-16 rounded-full bg-[#7fc6d6] flex items-center justify-center shadow-md">
    <span className="text-white text-lg font-bold">{valor}</span>
  </div>
)

const CartaoConvite = ({ dados }) => {
  const audioRef = useRef(null)
  const [tocando, setTocando] = useState(false)
  const [modalAberto, setModalAberto] = useState(false)
  const [modalConfirmarAberto, setModalConfirmarAberto] = useState(false)

  const tocarMusica = () => {
    if (audioRef.current) {
      audioRef.current.play()
      setTocando(true)
    }
  }

  const pararMusica = () => {
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
      setTocando(false)
    }
  }

  return (
    <>
      <audio ref={audioRef} src="/musica.mp3" loop />
      {!tocando && (
        <button
          onClick={tocarMusica}
          className="fixed top-4 right-4 z-50 bg-[#b6e0ea] text-[#24706b] px-4 py-2 rounded-full font-bold shadow"
        >
          Tocar música
        </button>
      )}
      {tocando && (
        <button
          onClick={pararMusica}
          className="fixed top-4 right-4 z-50 bg-[#fca5a5] text-[#991b1b] px-4 py-2 rounded-full font-bold shadow"
        >
          Parar música
        </button>
      )}
      <ModalPresentes aberto={modalAberto} aoFechar={() => setModalAberto(false)} />
      <ModalConfirmacao aberto={modalConfirmarAberto} aoFechar={() => setModalConfirmarAberto(false)} />
      <div
        className="w-full max-w-[550px] mx-auto min-h-screen flex flex-col items-center relative overflow-hidden px-2 sm:px-0 pb-32 rounded-3xl"
        style={{
          backgroundImage: `linear-gradient(to bottom, #fff7ec 70%)`
        }}
      >
        {/* Topo com folhas */}
        <img
          src={folhasTopo}
          alt="Folhas e estrelas"
          className="absolute top-0 left-0 w-full object-contain z-0"
        />

        {/* Carrinho com animais */}
        <div className="mt-12 z-10">
          <img
            src={carroAnimais}
            alt="Carrinho com animais"
            className="w-20 sm:w-30 mx-auto"
          />
        </div>

        {/* Nome e idade */}
        <div className="text-center mt-4 z-10">
          <h1
            className="text-[#f6a623] text-6xl sm:text-5xl"
            style={{ fontFamily: "'Londrina Solid', Arial, sans-serif" }}
          >
            {dados.nome}
          </h1>
          <h2
            className="text-green-700 text-3xl sm:text-3xl font-bold"
            style={{ fontFamily: "'Londrina Solid', Arial, sans-serif" }}
          >
            {dados.idade}
          </h2>
          <h2
            className="text-green-700 text-1xl sm:text-1xl"
            style={{ fontFamily: "'Londrina Solid', Arial, sans-serif" }}
          >
            <span style={{ whiteSpace: 'pre-line' }}>{dados.text}</span>
          </h2>
        </div>

        {/* Foto do bebê */}
        <div className="mt-4 z-10 flex flex-col items-center">
          <img src={bebe} alt="Bebê" className="w-40 mx-auto" />
          {/* Sombra no pé da foto */}
          <div
            className="w-28 h-2 mx-auto rounded-full"
            style={{
              marginTop: '-12px',
              marginLeft: '18px', // desloca a sombra para a direita
              background: 'radial-gradient(ellipse at 60% 60%, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.05) 80%, rgba(0,0,0,0) 100%)',
              filter: 'blur(3px)',
              opacity: 0.7,
            }}
          />
        </div>

        {/* Data */}
        <div className="flex gap-4 mt-6 z-10">
          <CirculoData valor={dados.data.dia} />
          <CirculoData valor={dados.data.mes} />
          <CirculoData valor={dados.data.ano} />
        </div>

        {/* Horário */}
        <div className="mt-2 z-10">
          <p
            className="text-4xl font-bold text-green-700"
            style={{ fontFamily: "'Londrina Solid', Arial, sans-serif" }}
          >
            {dados.data.horario}
          </p>
        </div>

        {/* Botões interativos + Zebra */}
        <div className="w-5/6 mt-10 z-10 flex flex-row items-center justify-center relative">
          {/* Botões em coluna */}
          <div className="flex flex-col gap-3 flex-1 max-w-[180px]">
            <a
              href="#"
              onClick={e => { e.preventDefault(); setModalConfirmarAberto(true) }}
              className="bg-[#b6e0ea] rounded-lg py-4 px-1 text-[#24706b] text-md font-bold shadow text-left"
              style={{ fontFamily: "'Londrina Solid', Arial, sans-serif" }}
            >
              CONFIRME SUA PRESENÇA
            </a>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Espaço+Prime,+Av.+Pres.+Getúlio+Vargas,+215+-+Cerâmica,+Janaúba+-+MG,+39440-000"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#b6e0ea] rounded-lg py-3 px-2 text-[#24706b] text-lg font-bold shadow text-left"
              style={{ fontFamily: "'Londrina Solid', Arial, sans-serif" }}
            >
              LOCAL
            </a>
            <a
              // href={dados.linkPresentes}
              href="#"
              onClick={e => { e.preventDefault(); setModalAberto(true) }}
              className="bg-[#b6e0ea] rounded-lg py-4 px-1 text-[#24706b] text-md font-bold shadow text-left"
              style={{ fontFamily: "'Londrina Solid', Arial, sans-serif" }}
            >
              SUGESTÃO DE PRESENTES
            </a>
          </div>
          {/* Imagem da zebra sobrepondo os botões */}
          <div className="flex-1 flex justify-center items-center">
            <img 
              src={zebra} 
              alt="Zebra fofa" 
              className="w-64 sm:w-70 absolute right-[-60px] top-1/2 -translate-y-1/2 z-20 drop-shadow-lg"
              style={{ pointerEvents: 'none' }}
            />
          </div>
        </div>

        {/* Rodapé */}
        <img
          src={footerImg}
          alt="Cenário infantil"
          className="absolute bottom-0 left-0 w-full object-cover z-0"
        />

        {/* Poema */}
        <div className="mt-20 mb-40 text-[#075a3a] z-10 text-justify font-medium px-3 leading-tight">
          <p>
            Bernardo... <br />
            Sou bebê puro e sorridente, amo a natureza intensamente.<br />
            O verde das árvores me faz sonhar, o balançar das folhas me faz encantar.<br /><br />
            Gosto de brincar na terra macia, engatinhar pelo quintal é só alegria!<br />
            Mas o que eu amo, de verdade e sem demora, é a água fresquinha que me diverte toda hora!<br /><br />
            Meu tesouro é o controle da TV da vovó, os fios e as vasilhas da mamãe, ô só!<br />
            Meu mundo é diversão e emoção, com meu tetê, sinto proteção.<br /><br />
            E quando estou com meu papai curto o cruzeiro, brincar de bola é meu passatempo certeiro!
          </p>
        </div>
      </div>
    </>
  )
}

export default CartaoConvite
