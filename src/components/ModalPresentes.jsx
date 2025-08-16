import React from 'react'

const ModalPresentes = ({ aberto, aoFechar }) => {
  if (!aberto) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div
        className="rounded-2xl shadow-lg p-8 max-w-xs w-full relative"
        style={{ background: '#fff7ec' }}
      >
        <button
          onClick={aoFechar}
          className="absolute top-2 right-3 text-2xl text-[#24706b] font-bold"
          aria-label="Fechar"
        >
          ×
        </button>
        <h2 className="text-[#f6a623] text-2xl text-center font-bold mb-4" style={{ fontFamily: "'Londrina Solid', Arial, sans-serif" }}>
          Sugestão de Presentes
        </h2>
        <ul className="text-[#075a3a] text-lg font-medium space-y-2">
          <li>Roupa: <b>18 a 24 meses</b> ou <b>Tamanho 2</b></li>
          <li>Calçado: <b>20/21</b></li>
          <li className='text-center'>Adoro brinquedos!</li>
        </ul>
      </div>
    </div>
  )
}

export default ModalPresentes