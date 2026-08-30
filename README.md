# SkillMatch JS

## Simulador de Compatibilidade com Vaga Front-End Júnior

### Sobre o projeto

O **SkillMatch JS** é um mini-projeto desenvolvido em JavaScript com o objetivo de simular um sistema de análise de compatibilidade entre o perfil de uma pessoa candidata e diferentes vagas de Front-End Júnior.

O sistema compara as habilidades da candidata com os requisitos de cada vaga, calcula um percentual de compatibilidade, classifica o resultado, identifica as habilidades que ainda precisam ser desenvolvidas e apresenta uma recomendação de estudo.

O projeto foi desenvolvido como atividade avaliativa do **Módulo 01 - Semana 06** do curso **Front-End React T4**.

---

## Objetivo

O objetivo principal é aplicar, de forma prática, os conceitos de JavaScript estudados durante o módulo, incluindo:

* Lógica de programação;
* Variáveis e tipos de dados;
* Condicionais;
* Operadores;
* Funções;
* Arrow functions;
* Arrays;
* Métodos de array;
* Objetos;
* Classes;
* Construtores;
* Herança;
* `this`;
* Callbacks;
* Closures;
* Promises;
* `async/await`.

Além disso, o projeto busca simular uma situação próxima da realidade de um sistema de recrutamento, no qual é necessário comparar um perfil profissional com os requisitos de diferentes vagas.

---

## Perfil da candidata

O sistema utiliza meu próprio perfil como base para a análise.

**Nome:** Isadora Possamai Schulle

**Área de interesse:** Front-End/React

**Habilidades atuais:**

* HTML
* CSS

**Experiência:** Estudos e projetos

---

## Vagas

O projeto possui três vagas fictícias:

### 1. Desenvolvedora Front-End Júnior

**Empresa:** WebTech

**Requisitos:**

* HTML
* CSS
* JavaScript

### 2. Desenvolvedora Web Júnior

**Empresa:** CodeStart

**Requisitos:**

* HTML
* CSS
* JavaScript
* Git

### 3. Desenvolvedora React Júnior

**Empresa:** React Solutions

**Requisitos:**

* HTML
* CSS
* JavaScript
* React
* Git

Essa última vaga é representada por uma classe especializada chamada `VagaReact`, que herda características da classe `Vaga`.

---

## Regra de cálculo da compatibilidade

O percentual de compatibilidade é calculado comparando a quantidade de requisitos da vaga que a candidata possui com o total de requisitos exigidos.

A fórmula utilizada é:

**Compatibilidade = (habilidades atendidas / total de requisitos) × 100**

Por exemplo, se uma vaga possui 4 requisitos e a candidata possui 2 deles:

**(2 / 4) × 100 = 50%**

A mesma regra é utilizada para todas as vagas, garantindo que os resultados possam ser comparados.

---

## Classificação da compatibilidade

Depois do cálculo, o sistema classifica cada vaga de acordo com as faixas definidas no projeto:

| Percentual | Classificação         |
| ---------- | --------------------- |
| 80% a 100% | Alta compatibilidade  |
| 50% a 79%  | Média compatibilidade |
| 0% a 49%   | Baixa compatibilidade |

Essa classificação é realizada utilizando uma estrutura `if/else`.

---

## Habilidades faltantes

O sistema também identifica quais requisitos da vaga ainda não fazem parte das habilidades da candidata.

Para isso, é feita uma comparação entre:

* habilidades que a candidata possui;
* habilidades exigidas pela vaga.

As habilidades que não são encontradas no perfil são apresentadas como habilidades faltantes.

---

## Vaga mais compatível

Após analisar todas as vagas, o sistema identifica aquela que possui o maior percentual de compatibilidade.

Para isso, é utilizado o método `reduce()`, comparando os resultados obtidos para cada vaga.

Dessa forma, o sistema consegue indicar qual oportunidade apresenta maior aderência ao perfil analisado.

---

## Recomendação de estudo

A recomendação de estudo é baseada nas habilidades que estão faltando para a vaga mais compatível.

A primeira habilidade faltante é utilizada como prioridade inicial de estudo.

Por exemplo, se a principal habilidade faltante for `JavaScript`, o sistema apresenta:

> Estudar primeiro: JavaScript

A ideia é utilizar o resultado da análise para indicar uma possível direção de aprendizado para a candidata.

---

## Conceitos de JavaScript utilizados

### Objetos

O objeto `candidato` representa as informações da pessoa candidata, contendo nome, área de interesse, habilidades e experiência.

### Arrays

Arrays são utilizados para armazenar as habilidades e a lista de vagas.

### Métodos de array

O projeto utiliza diferentes métodos de array, entre eles:

* `map()` — utilizado para gerar os resultados de compatibilidade das vagas;
* `filter()` — utilizado para encontrar habilidades faltantes;
* `reduce()` — utilizado para identificar a vaga com maior compatibilidade.

Também é utilizado `forEach()` para percorrer e apresentar os resultados.

### Classes

Foi criada a classe `Vaga`, responsável por representar uma vaga e realizar operações relacionadas aos seus requisitos.

A classe possui um `constructor`, atributos e métodos próprios.

### Herança

Foi criada a classe `VagaReact`, que utiliza `extends` para herdar características da classe `Vaga`.

A classe filha acrescenta o atributo `nivelReact` e o método `exibirEspecializacao()`.

A herança foi utilizada porque uma vaga de React possui as mesmas características básicas de uma vaga comum, mas também pode possuir informações específicas relacionadas à tecnologia React.

### `this`

O `this` é utilizado dentro da classe `Vaga` para acessar os atributos do objeto atual, como:

* `this.empresa`
* `this.cargo`
* `this.requisitos`

### Constructor

O `constructor` é utilizado para inicializar os dados de cada vaga quando uma nova instância da classe é criada.

### Callback

Foi criada a função `executarComCallback()`, que recebe outra função como parâmetro.

O callback é utilizado para executar uma ação após a identificação da vaga mais compatível.

### Closure

Foi criada a função `criarContador()`, que mantém uma variável interna chamada `contador`.

A função retornada consegue acessar e modificar essa variável mesmo depois que a função externa terminou sua execução.

### Promise

O carregamento das vagas é simulado através de uma `Promise`.

Foi utilizado `setTimeout()` para representar um atraso semelhante ao que poderia acontecer quando dados são carregados de um servidor.

### Async/Await

A função principal utiliza `async/await` para aguardar o carregamento das vagas antes de continuar a análise.

Também foi utilizado `try/catch` para tratar possíveis erros durante o carregamento.

---

## Arquitetura cliente-servidor

Em uma aplicação real, o navegador (cliente) poderia solicitar os dados das vagas a um servidor através de uma requisição.

O servidor seria responsável por fornecer os dados e o cliente receberia essas informações para apresentá-las e processá-las.

Neste projeto não existe um servidor real. Essa comunicação é simulada através de uma `Promise`, que utiliza um atraso com `setTimeout()` antes de disponibilizar as vagas.

O fluxo simplificado é:

```text
Cliente
   ↓
Solicitação das vagas
   ↓
Servidor simulado
   ↓
Promise
   ↓
Vagas carregadas
   ↓
Análise de compatibilidade
   ↓
Resultado no console
```

---

## Como executar o projeto

### 1. Baixe ou clone o repositório

Clone o repositório do GitHub para o computador.

### 2. Abra o projeto no VS Code

Abra a pasta do projeto no Visual Studio Code.

### 3. Execute o arquivo JavaScript

O projeto pode ser executado utilizando o console do navegador.

Abra o navegador e pressione:

`F12`

Depois acesse a aba:

`Console`

Copie o conteúdo do arquivo `skillmatch.js` e cole no console.

Também é possível utilizar um ambiente de execução JavaScript indicado pelo professor.

### 4. Visualize o resultado

Após a execução, o sistema apresentará no console:

* dados da candidata;
* vagas carregadas;
* percentual de compatibilidade;
* classificação de cada vaga;
* habilidades faltantes;
* recomendação de estudo;
* vaga mais compatível.

---

## Estrutura do projeto

```text
skillmatch-js/
│
├── README.md
└── skillmatch.js
```

---

## Git e GitHub

O projeto utiliza Git e GitHub para controle de versão.

Foi utilizada uma branch diferente da `main` para desenvolver as funcionalidades antes de integrá-las à branch principal.

Os commits foram organizados de forma descritiva, representando as etapas de desenvolvimento do projeto.

Exemplos de etapas de desenvolvimento:

* criação da estrutura inicial;
* criação do perfil e das vagas;
* implementação das classes;
* implementação da análise de compatibilidade;
* implementação das funcionalidades assíncronas;
* finalização e documentação do projeto.

---

## Kanban

O desenvolvimento do projeto foi organizado através de um quadro Kanban.

As colunas utilizadas são:

* **Backlog**
* **A Fazer**
* **Em Andamento**
* **Concluído**

As tarefas foram distribuídas entre essas colunas de acordo com o andamento do desenvolvimento.

**Link do Kanban:** [INSIRA AQUI O LINK DO SEU KANBAN]

---

## Vídeo de apresentação

No vídeo de apresentação são demonstrados:

* objetivo do sistema;
* execução do projeto;
* funcionamento da análise de compatibilidade;
* organização das tarefas;
* branches utilizadas;
* possíveis melhorias para o projeto.

**Link do vídeo:** [INSIRA AQUI O LINK DO SEU VÍDEO]

---

## Possíveis melhorias

Apesar de cumprir os requisitos propostos, o projeto pode receber melhorias futuramente.

Algumas possibilidades são:

* criar uma interface gráfica para substituir o uso do console;
* adicionar mais vagas;
* permitir que o usuário cadastre seu próprio perfil;
* permitir adicionar novas habilidades;
* utilizar uma API ou banco de dados real;
* melhorar o sistema de recomendação de estudos;
* adicionar filtros por área ou tecnologia;
* transformar o projeto em uma aplicação utilizando React.

---

## Conclusão

O desenvolvimento do SkillMatch JS permitiu colocar em prática diversos conceitos fundamentais de JavaScript e Programação Orientada a Objetos.

O projeto também ajudou a compreender como diferentes recursos da linguagem podem ser combinados para solucionar um problema, desde a criação dos dados até o processamento, classificação e apresentação dos resultados.

Além da parte técnica, o projeto possibilitou praticar organização de tarefas, versionamento com Git e GitHub e documentação através do README.
