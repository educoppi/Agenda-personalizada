# Horta comunitária — Eduardo

Situação-Problema Individual: Agenda Personalizada com React Router.

- **Aluno:** Eduardo Bruno Coppi
- **RA:** 66677

## Meus parâmetros

Dígitos do RA: `6 6 6 7 7`

| Parâmetro | Cálculo | Resultado |
|-----------|---------|-----------|
| A | dois últimos dígitos = 77; 77 ÷ 20 = 3, resto 17 | 17 → Horta comunitária, slug `canteiros` |
| B | antepenúltimo dígito = 6 | Mensagem de erro específica abaixo de cada campo inválido |
| C | 6+6+6+7+7 = 32; 32 ÷ 6 = 5, resto 2 | Cards em grade (CSS Grid) |
| D | quarto dígito do final = 6; 6 ÷ 4 = 1, resto 2 | Navbar fixa no rodapé, estilo barra de aplicativo |
| Cor | três últimos dígitos = 677; 677 ÷ 360 = 1, resto 317 | `hsl(317, 60%, 35%)` = `#8F2470` (magenta/ameixa) |

### Campos do cadastro (Tabela A, linha 17)

| Campo | Tipo |
|-------|------|
| Cultura | texto (principal) |
| Área (m²) | numérico |
| Estação | seleção: Verão, Inverno, Ano todo |
| Responsável | texto (complementar) |

## Rotas

| Rota | Página |
|------|--------|
| `/` | Home |
| `/canteiros/novo` | Cadastro |
| `/canteiros` | Visualização |
| `*` | Página não encontrada |

## Como rodar

```bash
git clone <https://github.com/educoppi/Agenda-personalizada>
cd router-66677
npm install
npm run dev
```

Abra o endereço mostrado no terminal (http://localhost:5173).
