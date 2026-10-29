import { Link } from 'react-router-dom'
import { NOME_SISTEMA, NOME_COMPLETO } from '../config.js'

function Home({ total }) {
  return (
    <section>
      <h1>{NOME_SISTEMA}</h1>
      <p>Desenvolvido por {NOME_COMPLETO}.</p>
      <p className="destaque">
        {total} {total === 1 ? 'canteiro cadastrado' : 'canteiros cadastrados'}
      </p>
      <p>
        <Link to="/canteiros/novo" className="botao">Cadastrar canteiro</Link>
      </p>
    </section>
  )
}

export default Home
