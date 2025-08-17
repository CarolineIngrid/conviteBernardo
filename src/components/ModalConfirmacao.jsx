import React, { useState } from 'react'

const ModalConfirmacao = ({ aberto, aoFechar }) => {
  const [convidados, setConvidados] = useState([''])
  
  const handleChange = (i, value) => {
    const novos = [...convidados]
    novos[i] = value
    setConvidados(novos)
  }

  const adicionarConvidado = () => setConvidados([...convidados, ''])

  const removerConvidado = i => {
    const novos = convidados.filter((_, idx) => idx !== i)
    setConvidados(novos)
  }

  const enviarWhatsapp = () => {
    const nomes = convidados.filter(Boolean).join(', ')
    const mensagem = `Olá, quero confirmar minha presença para o aniversário do Bê! Convidados: ${nomes}`
    window.open(`https://wa.me/+5538988537275?text=${encodeURIComponent(mensagem)}`, '_blank')
    aoFechar()
  }

  if (!aberto) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg relative mx-2">
        <button onClick={aoFechar} className="absolute top-2 right-3 text-xl font-bold">&times;</button>
        <h2 className="text-2xl font-bold mb-4 text-[#24706b] text-center">Confirme sua presença</h2>
        <div className="flex flex-col gap-2">
          {convidados.map((nome, i) => (
            <div key={i} className="flex gap-2 items-center">
              <input
                type="text"
                placeholder={`Nome do convidado ${i + 1}`}
                value={nome}
                onChange={e => handleChange(i, e.target.value)}
                className="border rounded px-2 py-1 flex-1"
              />
              {convidados.length > 1 && (
                <button onClick={() => removerConvidado(i)} className="text-red-500 font-bold">x</button>
              )}
            </div>
          ))}
          <button onClick={adicionarConvidado} className="mt-2 text-[#24706b] underline text-sm">+ Adicionar convidado</button>
        </div>
        <button
          onClick={enviarWhatsapp}
          className="mt-6 w-full bg-[#b6e0ea] text-[#24706b] font-bold py-2 rounded-lg shadow"
          disabled={convidados.filter(Boolean).length === 0}
        >
          Enviar para o WhatsApp
        </button>
      </div>
    </div>
  )
}

export default ModalConfirmacao