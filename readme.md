# 🃏 Yu-Gi-Oh! — Jo-Ken-Pô

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
</p>

## 📌 Sobre o Projeto

O **Yu-Gi-Oh! — Jo-Ken-Pô** é um jogo web inspirado no universo de Yu-Gi-Oh!, que utiliza os personagens e elementos visuais da franquia para criar uma experiência baseada na tradicional brincadeira de pedra, papel e tesoura.

O projeto permite que o jogador escolha cartas com diferentes atributos para enfrentar um oponente controlado pelo computador. Cada confronto possui um resultado determinado pelas relações de vitória e derrota entre as cartas, com atualização automática da pontuação.

Este repositório apresenta duas etapas importantes do desenvolvimento: uma primeira versão construída com HTML, CSS e JavaScript puro e uma versão reconstruída utilizando **React, TypeScript, Vite e Tailwind CSS**.

A proposta foi revisitar o projeto original, aprimorar sua estrutura e aplicar conhecimentos mais avançados de desenvolvimento Front-End.

---

## 🎮 Como o Jogo Funciona?

A mecânica é baseada na lógica de pedra, papel e tesoura, utilizando três personagens do universo Yu-Gi-Oh!.

| Personagem | Atributo | Regra |
|---|---|---|
| Dragão Branco de Olhos Azuis | Papel | Vence o Mago Negro |
| Mago Negro | Pedra | Vence Exodia |
| Exodia, o Destruidor | Tesoura | Vence o Dragão Branco |

### ⚔️ Funcionamento das Partidas

- O jogador recebe cinco cartas aleatórias.
- O computador também recebe cinco cartas aleatórias.
- O jogador escolhe uma carta para iniciar o confronto.
- O computador seleciona aleatoriamente sua própria carta.
- O sistema compara os atributos e determina o resultado.
- A pontuação é atualizada conforme a vitória ou derrota.
- Após o confronto, é possível iniciar uma nova rodada.

O jogo também conta com música de fundo, efeitos sonoros e elementos visuais inspirados em jogos de RPG.

---

# 📈 Evolução do Projeto

A principal característica deste repositório é a possibilidade de acompanhar duas versões diferentes do mesmo jogo.

### 🟢 Versão 1 — HTML, CSS e JavaScript Vanilla

A primeira versão foi desenvolvida utilizando as tecnologias fundamentais do desenvolvimento web, sem frameworks ou bibliotecas para construção da interface.

A estrutura utilizava:

- **HTML5:** organização da arena, cartas, placar e elementos do jogo.
- **CSS3:** criação dos layouts, molduras, botões e efeitos visuais.
- **JavaScript:** implementação das regras, sorteio de cartas, controle da pontuação e interações.

Toda a lógica estava concentrada principalmente no arquivo `engine.js`, que realizava a manipulação direta dos elementos da página através do DOM.

O JavaScript criava elementos dinamicamente, adicionava eventos de clique e atualizava as informações apresentadas ao jogador.

A estilização também possuía arquivos separados para reset, botões, molduras e organização geral da interface, incluindo recursos visuais personalizados e a fonte Press Start 2P.

🔗 **Primeira versão:** [Acessar branch v1](https://github.com/emilio-manoel/Yu-Gi-Oh-javascript/tree/v1)

### ⚛️ Versão Atual — React, TypeScript e Vite

Na versão atual, o projeto passou por uma reconstrução completa, tanto na estrutura da interface quanto na organização da lógica do jogo.

A principal mudança foi a adoção do React, permitindo dividir a aplicação em componentes independentes e reutilizáveis.

Entre as principais evoluções estão:

- Reconstrução da interface utilizando React;
- Migração da lógica JavaScript para TypeScript;
- Criação de componentes reutilizáveis;
- Implementação de um hook personalizado para gerenciar o jogo;
- Organização dos dados das cartas em um módulo separado;
- Gerenciamento de estado com React Hooks;
- Estilização utilizando Tailwind CSS;
- Melhor adaptação para dispositivos móveis;
- Organização dos recursos de áudio e imagens.

Essa mudança permitiu abandonar a manipulação manual do DOM e utilizar os mecanismos próprios do React para controlar e atualizar a interface.

---

## 🛠️ Tecnologias Utilizadas na Versão Atual

### ⚛️ React

O React é a principal biblioteca utilizada na reconstrução do jogo.

A interface foi dividida em componentes, permitindo separar áreas como a apresentação das cartas, o campo de batalha, o placar e os detalhes do personagem selecionado.

Essa organização facilita a manutenção e a evolução da aplicação.

### 🔷 TypeScript

O TypeScript foi utilizado para adicionar tipagem estática ao projeto.

Além de melhorar a segurança do código, permite definir estruturas específicas para as cartas, mãos dos jogadores, pontuação e resultados dos confrontos.

Também facilita a identificação de inconsistências durante o desenvolvimento.

### ⚡ Vite

O Vite é responsável pelo ambiente de desenvolvimento e pela compilação da aplicação.

Ele proporciona inicialização rápida, atualização durante a programação e otimização dos arquivos para publicação.

### 🎨 Tailwind CSS

O Tailwind CSS foi adotado para estilizar a interface utilizando classes utilitárias diretamente nos componentes.

Além disso, foram criadas utilidades personalizadas para preservar elementos visuais do projeto original, como molduras, fundos e botões inspirados em interfaces de RPG.

### 🧠 React Hooks

Uma das mudanças mais importantes foi a utilização dos Hooks do React para controlar o funcionamento do jogo.

Entre os principais estão:

- **useState:** controla pontuação, cartas disponíveis, cartas selecionadas e resultado do confronto.
- **useEffect:** gerencia a inicialização e a limpeza dos recursos de áudio.
- **useRef:** mantém a referência ao elemento de áudio da música de fundo.
- **useCallback:** organiza funções de interação e controle do jogo.

Também foi criado o hook personalizado `useYuGiOhGame`, responsável por centralizar a lógica principal das partidas.

### 🛠️ React Compiler

O projeto utiliza o React Compiler por meio da configuração do plugin Babel no Vite, incorporando uma ferramenta adicional de otimização da aplicação.

### 🔍 Oxlint

Utilizado para análise estática do código e identificação de possíveis problemas durante o desenvolvimento.

---

## 🧩 Organização da Aplicação

A versão atual possui uma estrutura baseada na separação de responsabilidades.

| Arquivo / Componente | Responsabilidade |
|---|---|
| `App.tsx` | Organiza a estrutura principal do jogo. |
| `LeftContainer` | Apresenta o placar e os detalhes da carta selecionada. |
| `RightContainer` | Organiza a arena, as cartas e os confrontos. |
| `CardsPlayer` | Renderiza as cartas disponíveis para o jogador. |
| `CardsBot` | Renderiza as cartas do computador. |
| `CardItem` | Componente reutilizável para apresentação das cartas. |
| `useYuGiOhGame` | Centraliza o estado e a lógica das partidas. |
| `data/cards.ts` | Define os dados, atributos e relações de vitória das cartas. |

Essa separação torna o projeto mais organizado e permite que cada componente tenha uma responsabilidade específica.

---

## 📱 Responsividade e Experiência do Usuário

Outro ponto importante da evolução foi a preocupação com diferentes tamanhos de tela.

A versão atual utiliza os recursos responsivos do Tailwind CSS para adaptar a disposição dos elementos.

Entre as melhorias estão:

- Adaptação da arena para telas menores;
- Reorganização do placar e do controle de música;
- Apresentação das cartas de maneira adequada em dispositivos móveis;
- Ajustes nos tamanhos das cartas e dos elementos visuais;
- Diferentes formas de interação conforme o dispositivo.

Um detalhe interessante é que, em dispositivos móveis, as cartas do jogador podem apresentar suas imagens diretamente, enquanto no desktop permanecem com o verso visível e utilizam a interação de passar o mouse para visualizar os detalhes.

---

## 🎯 Objetivos Alcançados

A reconstrução deste projeto representou uma oportunidade de aprofundar conhecimentos que vão além da construção de interfaces.

Durante o desenvolvimento foi possível trabalhar com:

- Migração de JavaScript Vanilla para React;
- Utilização prática do TypeScript;
- Componentização de aplicações;
- Criação de Hooks personalizados;
- Gerenciamento de estado;
- Separação entre interface, dados e lógica;
- Reutilização de componentes;
- Organização de projetos com Vite;
- Estilização com Tailwind CSS;
- Desenvolvimento de interfaces responsivas;
- Gerenciamento de recursos de áudio.

Além disso, foi possível compreender melhor como transformar uma aplicação que utilizava manipulação direta do DOM em uma estrutura mais organizada, utilizando os recursos de um framework moderno.

---

## 🚀 Importância na Minha Jornada

O **Yu-Gi-Oh! — Jo-Ken-Pô** representa uma evolução importante na minha trajetória como desenvolvedor.

A primeira versão foi essencial para praticar os fundamentos do desenvolvimento web e compreender como estruturar uma aplicação utilizando HTML, CSS e JavaScript.

Já a reconstrução permitiu aplicar conhecimentos adquiridos posteriormente, especialmente sobre React, TypeScript, componentização e gerenciamento de estado.

Comparar as duas versões demonstra não apenas o conhecimento de novas tecnologias, mas também minha evolução na maneira de pensar, organizar e desenvolver aplicações.

Meu objetivo continua sendo me tornar um **Desenvolvedor Full-Stack**, e projetos como este são importantes para consolidar a base necessária para construir aplicações cada vez mais completas e profissionais.

---

## 🔗 Links do Projeto

- 🌍 **Jogar Online:** [Yu-Gi-Oh! — Jo-Ken-Pô](https://emilio-manoel.github.io/Yu-Gi-Oh-javascript/)
- 💻 **Repositório:** [GitHub](https://github.com/emilio-manoel/Yu-Gi-Oh-javascript)
- 🕰️ **Primeira Versão:** [Branch v1 — HTML, CSS e JavaScript](https://github.com/emilio-manoel/Yu-Gi-Oh-javascript/tree/v1)
- 👨‍💻 **Meu GitHub:** [emilio-manoel](https://github.com/emilio-manoel)

---

<p align="center">
  Desenvolvido com dedicação por <strong>Emilio Manoel</strong> 💙
</p>