import { Link } from 'react-router-dom'

function Visualizacao({ title, registros }) {
  console.log('3) Visualização desenhando', registros.length, 'registros')
  if (registros.length === 0) {
    return (
      <section>
        <h1>{title}</h1>
        <p>
          Nenhum canteiro cadastrado ainda.{' '}
          <Link to="/canteiros/novo">Cadastre o primeiro canteiro</Link>.
        </p>
      </section>
    )
  }

  return (
    <section>
      <h1>{title}</h1>
      <div className="grade">
        {registros.map((registro) => (
          <article key={registro.id} className="card">
            <h2>{registro.cultura}</h2>
            <dl>
              <dt>Área</dt>
              <dd>{registro.area} m²</dd>
              <dt>Estação</dt>
              <dd>{registro.estacao}</dd>
              <dt>Responsável</dt>
              <dd>{registro.responsavel}</dd>
            </dl>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Visualizacao
