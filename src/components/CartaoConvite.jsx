import folhasTopo from '/plantaestrela.svg'
import carroAnimais from '/carrinho.png'
import bebe from '/Bernardo.svg'
import footerImg from '/backfooter.jpg'

const CirculoData = ({ valor }) => (
  <div className="w-14 h-14 rounded-full bg-[#7fc6d6] flex items-center justify-center shadow-md">
    <span className="text-white text-lg font-bold">{valor}</span>
  </div>
)

const BotaoLink = ({ texto, cor = "#7fc6d6", href, target = "_blank" }) => (
  <a
    href={href}
    target={target}
    rel="noopener noreferrer"
    className="block w-full my-2 py-3 rounded-lg text-center text-[#24706b] text-lg shadow transition hover:brightness-95"
    style={{ 
      background: cor,
      fontFamily: "'Londrina Solid', Arial, sans-serif"
    }}
  >
    {texto}
  </a>
)

const CartaoConvite = ({ dados }) => {
  return (
    <div
      className="w-[450px] mx-auto min-h-screen flex flex-col items-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to bottom, #fff7ec 75%, #c9e7f5 100%)`
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
          className="w-40 mx-auto"
        />
      </div>

      {/* Nome e idade */}
      <div className="text-center mt-4 z-10">
        <h1
          className="text-[#f6a623] text-5xl"
          style={{ fontFamily: "'Londrina Solid', Arial, sans-serif" }}
        >
          {dados.nome}
        </h1>
        <h2
          className="text-green-700 text-3xl font-bold"
          style={{ fontFamily: "'Londrina Solid', Arial, sans-serif" }}
        >
          {dados.idade}
        </h2>
      </div>

      {/* Foto do bebê */}
      <div className="mt-4 z-10">
        <img src={bebe} alt="Bebê" className="w-40 mx-auto" />
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
          className="text-3xl font-bold text-green-700"
          style={{ fontFamily: "'Londrina Solid', Arial, sans-serif" }}
        >
          {dados.data.horario}
        </p>
      </div>

      {/* Botões interativos */}
      <div className="w-4/5 mt-4 z-10 flex flex-col gap-2">
        <BotaoLink
          texto="confirme sua presença"
          href={`https://wa.me/+5538988537275?text=${encodeURIComponent("Olá, quero confirmar minha presença pro aniversário do Bê!")}`}
        />
        <BotaoLink
          texto="local"
          href={dados.linkMaps}
        />
        <BotaoLink
          texto="sugestão de presente"
          href={dados.linkPresentes}
        />
      </div>

      {/* Poema */}
      <div className="mt-4 px-6 text-[#24706b] text-base z-10 text-left font-medium">
        <p>
          Bernardo... <br />
          Sou bebê puro e sorridente,<br />
          amo a natureza intensamente.<br />
          O verde das árvores me faz sonhar,<br />
          o balançar das folhas me faz encantar.<br /><br />
          Gosto de brincar na terra macia,<br />
          engatinhar pelo quintal é só alegria!<br />
          Mas o que eu amo, de verdade e sem demora,<br />
          é a água fresquinha que me diverte toda hora!<br /><br />
          Meu tesouro é o controle da TV da vovó,<br />
          os fios e as vasilhas da mamãe, ó só!<br />
          Meu mundo é diversão e emoção,<br />
          com meu tetê, sinto proteção.<br /><br />
          E quando estou com meu papai curto o cruzeiro,<br />
          brincar de bola é meu passatempo certeiro!
        </p>
      </div>

      {/* Rodapé */}
      <img
        src={footerImg}
        alt="Cenário infantil"
        className="absolute bottom-0 left-0 w-full object-cover z-0"
      />
    </div>
  )
}

export default CartaoConvite
