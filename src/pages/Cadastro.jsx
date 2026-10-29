import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ESTACOES = ['Verão', 'Inverno', 'Ano todo']

const FORM_VAZIO = { cultura: '', area: '', estacao: '', responsavel: '' }

function validar(form) {
  const erros = {}
  if (form.cultura.trim() === '') erros.cultura = 'Informe a cultura (ex.: Alface).'
  if (form.area === '' || Number.isNaN(Number(form.area))) {
    erros.area = 'Informe a área em m² usando apenas números.'
  }
  if (form.estacao === '') erros.estacao = 'Escolha a estação de plantio.'
  if (form.responsavel.trim() === '') erros.responsavel = 'Informe quem é o responsável.'
  return erros
}

function Cadastro({ adicionarRegistro }) {
  const navigate = useNavigate()
  const [form, setForm] = useState(FORM_VAZIO) // valores digitados (formulário controlado)
  const [erros, setErros] = useState({}) // mensagens por campo

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault() // impede o navegador de recarregar a página

    const novosErros = validar(form)
    setErros(novosErros)
    if (Object.keys(novosErros).length > 0) return // tem erro: não salva

    const novoRegistro = {
      id: Date.now(), // id único baseado no instante do cadastro
      cultura: form.cultura.trim(),
      area: Number(form.area),
      estacao: form.estacao,
      responsavel: form.responsavel.trim(),
    }
    console.log('1) Cadastro montou o registro e vai chamar a função do App:', novoRegistro)
    adicionarRegistro(novoRegistro)
    navigate('/canteiros') // leva o usuário para a visualização
  }

  const classe = (campo) => (erros[campo] ? 'invalido' : '')

  return (
    <section>
      <h1>Novo canteiro</h1>
      <form onSubmit={handleSubmit} noValidate className="formulario">
        <div className="campo">
          <label htmlFor="cultura">Cultura</label>
          <input
            id="cultura"
            name="cultura"
            type="text"
            value={form.cultura}
            onChange={handleChange}
            className={classe('cultura')}
            aria-invalid={Boolean(erros.cultura)}
          />
          {erros.cultura && <p className="erro" role="alert">{erros.cultura}</p>}
        </div>

        <div className="campo">
          <label htmlFor="area">Área (m²)</label>
          <input
            id="area"
            name="area"
            type="number"
            value={form.area}
            onChange={handleChange}
            className={classe('area')}
            aria-invalid={Boolean(erros.area)}
          />
          {erros.area && <p className="erro" role="alert">{erros.area}</p>}
        </div>

        <div className="campo">
          <label htmlFor="estacao">Estação</label>
          <select
            id="estacao"
            name="estacao"
            value={form.estacao}
            onChange={handleChange}
            className={classe('estacao')}
            aria-invalid={Boolean(erros.estacao)}
          >
            <option value="">Selecione...</option>
            {ESTACOES.map((estacao) => (
              <option key={estacao} value={estacao}>{estacao}</option>
            ))}
          </select>
          {erros.estacao && <p className="erro" role="alert">{erros.estacao}</p>}
        </div>

        <div className="campo">
          <label htmlFor="responsavel">Responsável</label>
          <input
            id="responsavel"
            name="responsavel"
            type="text"
            value={form.responsavel}
            onChange={handleChange}
            className={classe('responsavel')}
            aria-invalid={Boolean(erros.responsavel)}
          />
          {erros.responsavel && <p className="erro" role="alert">{erros.responsavel}</p>}
        </div>

        <button type="submit" className="botao">Salvar canteiro</button>
      </form>
    </section>
  )
}

export default Cadastro
