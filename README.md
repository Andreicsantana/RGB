# RGB

Pequeno gerador de cores RGB — projeto de aprendizado com foco em arquitetura simples e organização de frontend.

Objetivo
- Organizar um projeto simples com boas práticas de separação de responsabilidades.
- Tornar a UI reutilizável e fácil de manter.

O que foi feito
- Separação de estilos em três camadas: `base`, `layout` e `components`.
- Componentes interativos com binding bidirecional entre `input[type=range]` e `input[type=number]`.
- Preview circular mostrando a cor atual e o valor HEX clicável/visível.

Estrutura do projeto

- `index.html` — marcação semântica e pontos de montagem dos componentes.
- `styles/`
	- `base.css` — reset, variáveis CSS (cores, espaçamentos, transições) e estilos globais.
	- `layout.css` — regras de posicionamento e responsividade (containers, painel principal).
	- `components.css` — estilos reutilizáveis (titulo, sliders, preview, inputs etc.).
- `scripts/`
	- `state.js` — estado central simples: `{ red, green, blue }`.
	- `color.service.js` — utilitários de cor (`rgbToString`, `rgbToHex`).
	- `dom.js` — pequenas funções que atualizam o DOM: preview, título, inputs e HEX.
	- `main.js` — orquestrador: listeners, sincronização entre inputs e ranges, inicialização da UI.

Por que essa arquitetura?

- **Single Responsibility**: cada arquivo tem uma responsabilidade clara — facilita manutenção e testes.
- **Reutilização**: componentes em `components.css` podem ser reaproveitados em outros projetos.
- **Escalabilidade**: se o app crescer podemos introduzir um gerenciador de estado mais robusto ou dividir `components` em subcomponentes sem misturar layout.
- **Colaboração**: separação permite que designers e desenvolvedores trabalhem em paralelo (CSS <> JS).

Fluxo de dados (resumido)

- Ação do usuário (mover slider ou digitar número)
	→ `main.js` atualiza `state`
	→ `color.service.js` converte para `rgb(...)` e `#RRGGBB`
	→ `dom.js` atualiza `color-preview`, `title`, inputs e a label HEX

Extensões possíveis

- Copiar HEX para área de transferência ao clicar na label.
- Aceitar entrada em HEX e converter para RGB (atualizando sliders).
- Adicionar testes unitários simples para `color.service.js`.

Como testar localmente

1. Abrir `index.html` diretamente no navegador (projeto é estático).
2. Ajustar sliders ou digitar valores nos campos numéricos — observe o preview e a label HEX.


