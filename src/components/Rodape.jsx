import { NOME_COMPLETO, RA } from '../config.js'

function Rodape() {
  return (
    <footer className="rodape">
      {NOME_COMPLETO} — RA {RA}
    </footer>
  )
}

export default Rodape
