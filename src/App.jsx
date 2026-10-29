import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Rodape from './components/Rodape.jsx'
import Home from './pages/Home.jsx'
import Cadastro from './pages/Cadastro.jsx'
import Visualizacao from './pages/Visualizacao.jsx'
import NaoEncontrada from './pages/NaoEncontrada.jsx'
import { NOME_SISTEMA, RA } from './config.js'

function App() {
  const [registros, setRegistros] = useState([
    { id: 1, cultura: 'Alface Crespa', area: 12, estacao: 'Ano todo', responsavel: 'Dona Marta' },
    { id: 2, cultura: 'Tomate Cereja', area: 8, estacao: 'Verão', responsavel: `RA ${RA}` },
    { id: 3, cultura: 'Couve Manteiga', area: 15, estacao: 'Inverno', responsavel: 'Seu Antônio' },
  ])

  function adicionarRegistro(novo) {
    console.log('2) App recebeu o registro e vai atualizar o estado:', novo)
    setRegistros([...registros, novo])
  }

  return (
    <div className="app">
      <header className="topo">{NOME_SISTEMA}</header>

      <main className="conteudo">
        <Routes>
          <Route path="/" element={<Home total={registros.length} />} />
          <Route
            path="/canteiros/novo"
            element={<Cadastro adicionarRegistro={adicionarRegistro} />}
          />
          <Route
            path="/canteiros"
            element={<Visualizacao title="Canteiros cadastrados" registros={registros} />}
          />
          <Route path="*" element={<NaoEncontrada />} />
        </Routes>
      </main>

      <Rodape />
      <Navbar />
    </div>
  )
}

export default App
