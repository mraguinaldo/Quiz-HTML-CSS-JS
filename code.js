let questions = [
  {
    id: 1,
    question: 'Qual tag HTML é usada para criar um link?',
    currectAnswer: '<a>',
    subject: 'HTML',
    answered: false,
    tip: 'Essa tag é usada para redirecionar o usuário a outra página.',
    options: [
      { id: 0, option: '<link>' },
      { id: 1, option: '<a>' },
      { id: 2, option: '<href>' }
    ]
  },
  {
    id: 2,
    question: 'Qual atributo HTML é usado para definir o texto alternativo em uma imagem?',
    currectAnswer: 'alt',
    subject: 'HTML',
    answered: false,
    tip: 'Este atributo é importante para acessibilidade.',
    options: [
      { id: 0, option: 'src' },
      { id: 1, option: 'alt' },
      { id: 2, option: 'title' },
      { id: 3, option: 'href' }
    ]
  },
  {
    id: 3,
    question: 'Qual tag HTML é usada para criar um parágrafo?',
    currectAnswer: '<p>',
    subject: 'HTML',
    answered: false,
    tip: 'Essa tag é usada para agrupar blocos de texto.',
    options: [
      { id: 0, option: '<div>' },
      { id: 1, option: '<p>' },
      { id: 2, option: '<h1>' }
    ]
  },
  {
    id: 4,
    question: 'Qual atributo HTML é usado para definir o endereço de uma imagem?',
    currectAnswer: 'src',
    subject: 'HTML',
    answered: false,
    tip: 'É utilizado dentro da tag <img>.',
    options: [
      { id: 0, option: 'href' },
      { id: 1, option: 'src' },
      { id: 2, option: 'alt' }
    ]
  },
  {
    id: 5,
    question: 'Qual tag HTML é usada para criar uma lista não ordenada?',
    currectAnswer: '<ul>',
    subject: 'HTML',
    answered: false,
    tip: 'Essa tag cria uma lista de itens com marcadores (bullet points).',
    options: [
      { id: 0, option: '<ol>' },
      { id: 1, option: '<ul>' },
      { id: 2, option: '<li>' }
    ]
  },
  {
    id: 6,
    question: 'Qual propriedade CSS é usada para alterar a cor de fundo de um elemento?',
    currectAnswer: 'background-color',
    subject: 'CSS',
    answered: false,
    tip: 'Essa propriedade é usada para definir a cor que aparece atrás do conteúdo.',
    options: [
      { id: 0, option: 'background-color' },
      { id: 1, option: 'color' },
      { id: 2, option: 'border-color' }
    ]
  },
  {
    id: 7,
    question: 'Qual unidade CSS é relativa ao tamanho da fonte do elemento pai?',
    currectAnswer: 'em',
    subject: 'CSS',
    answered: false,
    tip: 'Essa unidade é frequentemente usada para responsividade.',
    options: [
      { id: 0, option: 'px' },
      { id: 1, option: '%' },
      { id: 2, option: 'em' },
      { id: 3, option: 'rem' }
    ]
  },
  {
    id: 8,
    question: 'Qual propriedade CSS é usada para arredondar os cantos de um elemento?',
    currectAnswer: 'border-radius',
    subject: 'CSS',
    answered: false,
    tip: 'Essa propriedade pode transformar cantos quadrados em arredondados.',
    options: [
      { id: 0, option: 'corner-shape' },
      { id: 1, option: 'border-radius' },
      { id: 2, option: 'border-style' }
    ]
  },
  {
    id: 9,
    question: 'Qual propriedade CSS controla o espaçamento entre as linhas de texto?',
    currectAnswer: 'line-height',
    subject: 'CSS',
    answered: false,
    tip: 'Ela define a altura mínima que cada linha de texto deve ter.',
    options: [
      { id: 0, option: 'letter-spacing' },
      { id: 1, option: 'text-spacing' },
      { id: 2, option: 'height' },
      { id: 3, option: 'line-height' }
    ]
  },
  {
    id: 10,
    question: 'Qual propriedade CSS define o alinhamento dos itens em um container flex?',
    currectAnswer: 'justify-content',
    subject: 'CSS',
    answered: false,
    tip: 'Essa propriedade é usada para controlar a distribuição dos itens ao longo do eixo principal.',
    options: [
      { id: 0, option: 'align-items' },
      { id: 1, option: 'justify-content' },
      { id: 2, option: 'flex-direction' }
    ]
  },
  {
    id: 11,
    question: 'Qual método JavaScript converte uma string para letras maiúsculas?',
    currectAnswer: 'toUpperCase()',
    subject: 'JavaScript',
    answered: false,
    tip: 'Esse método não altera a string original, mas retorna uma nova string.',
    options: [
      { id: 0, option: 'capitalize()' },
      { id: 1, option: 'upper()' },
      { id: 2, option: 'toLowerCase()' },
      { id: 3, option: 'toUpperCase()' }
    ]
  },
  {
    id: 12,
    question: 'Qual operador é usado para verificar estrita igualdade em JavaScript?',
    currectAnswer: '===',
    subject: 'JavaScript',
    answered: false,
    tip: 'Esse operador compara valor e tipo.',
    options: [
      { id: 0, option: '==' },
      { id: 1, option: '=' },
      { id: 2, option: '===' }
    ]
  },
  {
    id: 13,
    question: 'Qual método JavaScript remove o último elemento de um array?',
    currectAnswer: 'pop()',
    subject: 'JavaScript',
    answered: false,
    tip: 'Esse método modifica o array original.',
    options: [
      { id: 0, option: 'pop()' },
      { id: 1, option: 'shift()' },
      { id: 2, option: 'splice()' }
    ]
  },
  {
    id: 14,
    question: 'Qual estrutura de controle é usada para repetir um bloco de código enquanto uma condição for verdadeira?',
    currectAnswer: 'while',
    subject: 'JavaScript',
    answered: false,
    tip: 'Essa estrutura continua executando o código até que a condição seja falsa.',
    options: [
      { id: 0, option: 'if' },
      { id: 1, option: 'for' },
      { id: 2, option: 'switch' },
      { id: 3, option: 'while' }
    ]
  },
  {
    id: 15,
    question: 'Qual método JavaScript é usado para combinar dois ou mais arrays?',
    currectAnswer: 'concat()',
    subject: 'JavaScript',
    answered: false,
    tip: 'Este método não altera os arrays existentes.',
    options: [
      { id: 0, option: 'push()' },
      { id: 1, option: 'concat()' },
      { id: 2, option: 'join()' }
    ]
  },
  {
    id: 16,
    question: 'Qual hook do React é usado para efeitos colaterais?',
    currectAnswer: 'useEffect',
    subject: 'React',
    answered: false,
    tip: 'Esse hook é chamado após a renderização do componente.',
    options: [
      { id: 0, option: 'useEffect' },
      { id: 1, option: 'useContext' },
      { id: 2, option: 'useState' }
    ]
  },
  {
    id: 17,
    question: 'Como os estados são atualizados em componentes funcionais no React?',
    currectAnswer: 'Usando o setter retornado por useState',
    subject: 'React',
    answered: false,
    tip: 'Esse setter é a segunda parte do array retornado pelo hook.',
    options: [
      { id: 0, option: 'Atribuindo diretamente ao estado' },
      { id: 1, option: 'Usando props' },
      { id: 2, option: 'Usando o setter retornado por useState' }
    ]
  },
  {
    id: 18,
    question: 'Qual biblioteca é frequentemente usada com React para gerenciamento de estado global?',
    currectAnswer: 'Redux',
    subject: 'React',
    answered: false,
    tip: 'Essa biblioteca ajuda a centralizar o estado da aplicação.',
    options: [
      { id: 0, option: 'Axios' },
      { id: 1, option: 'Context API' },
      { id: 2, option: 'Redux' }
    ]
  },
  {
    id: 19,
    question: 'Como os componentes são passados como filhos de outros componentes no React?',
    currectAnswer: 'Usando props.children',
    subject: 'React',
    answered: false,
    tip: 'Essa propriedade especial contém o conteúdo passado entre as tags de um componente.',
    options: [
      { id: 0, option: 'this.props' },
      { id: 1, option: 'state.children' },
      { id: 2, option: 'Usando props.children' }
    ]
  },
  {
    id: 20,
    question: 'Qual método pode ser usado para forçar a renderização de um componente de classe no React?',
    currectAnswer: 'forceUpdate()',
    subject: 'React',
    answered: false,
    tip: 'Esse método deve ser usado com cuidado.',
    options: [
      { id: 0, option: 'forceUpdate()' },
      { id: 1, option: 'render()' },
      { id: 2, option: 'setState()' }
    ]
  },
  {
    id: 21,
    question: 'Qual módulo Node.js é usado para manipulação de arquivos?',
    currectAnswer: 'fs',
    subject: 'Node.js',
    answered: false,
    tip: 'Esse módulo permite ler, escrever e apagar arquivos.',
    options: [
      { id: 0, option: 'http' },
      { id: 1, option: 'path' },
      { id: 2, option: 'fs' }
    ]
  },
  {
    id: 22,
    question: 'Qual comando Node.js é usado para iniciar um REPL (Read-Eval-Print Loop)?',
    currectAnswer: 'node',
    subject: 'Node.js',
    answered: false,
    tip: 'Esse comando inicia uma sessão interativa do Node.js.',
    options: [
      { id: 0, option: 'npm' },
      { id: 1, option: 'repl' },
      { id: 2, option: 'node' }
    ]
  },
  {
    id: 23,
    question: 'Qual método Node.js é usado para criar um servidor HTTP?',
    currectAnswer: 'http.createServer()',
    subject: 'Node.js',
    answered: false,
    tip: 'Esse método faz parte do módulo HTTP.',
    options: [
      { id: 0, option: 'express()' },
      { id: 1, option: 'socket()' },
      { id: 2, option: 'http.createServer()' }
    ]
  },
  {
    id: 24,
    question: 'Qual comando Node.js é usado para instalar pacotes?',
    currectAnswer: 'npm install',
    subject: 'Node.js',
    answered: false,
    tip: 'Esse comando instala as dependências listadas no package.json.',
    options: [
      { id: 0, option: 'node install' },
      { id: 1, option: 'install-packages' },
      { id: 2, option: 'npm install' }
    ]
  },
  {
    id: 25,
    question: 'Qual comando Node.js é usado para executar um script JavaScript?',
    currectAnswer: 'node <nome-do-arquivo>',
    subject: 'Node.js',
    answered: false,
    tip: 'Esse comando executa o arquivo no ambiente Node.js.',
    options: [
      { id: 0, option: 'npm run <nome-do-arquivo>' },
      { id: 1, option: 'run <nome-do-arquivo>' },
      { id: 2, option: 'node <nome-do-arquivo>' }
    ]
  },
  {
    id: 26,
    question: 'Qual comando Git é usado para clonar um repositório remoto?',
    currectAnswer: 'git clone <url>',
    subject: 'GitHub',
    answered: false,
    tip: 'Esse comando cria uma cópia local de um repositório remoto.',
    options: [
      { id: 0, option: 'git clone <url>' },
      { id: 1, option: 'git fetch <url>' },
      { id: 2, option: 'git pull <url>' }
    ]
  },
  {
    id: 27,
    question: 'Qual comando Git é usado para enviar as alterações locais para o repositório remoto?',
    currectAnswer: 'git push',
    subject: 'GitHub',
    answered: false,
    tip: 'Esse comando envia as alterações do branch atual para o repositório remoto.',
    options: [
      { id: 0, option: 'git commit' },
      { id: 1, option: 'git push' },
      { id: 2, option: 'git merge' }
    ]
  },
  {
    id: 28,
    question: 'Qual comando Git é usado para trazer as atualizações do repositório remoto para o repositório local?',
    currectAnswer: 'git pull',
    subject: 'GitHub',
    answered: false,
    tip: 'Esse comando é uma combinação de fetch e merge.',
    options: [
      { id: 0, option: 'git fetch' },
      { id: 1, option: 'git rebase' },
      { id: 2, option: 'git pull' }
    ]
  },
  {
    id: 29,
    question: 'Qual comando Git é usado para ver o histórico de commits?',
    currectAnswer: 'git log',
    subject: 'GitHub',
    answered: false,
    tip: 'Esse comando exibe uma lista de commits.',
    options: [
      { id: 0, option: 'git log' },
      { id: 1, option: 'git status' },
      { id: 2, option: 'git diff' }
    ]
  },
  {
    id: 30,
    question: 'Qual comando Git é usado para preparar arquivos para commit?',
    currectAnswer: 'git add',
    subject: 'GitHub',
    answered: false,
    tip: 'Esse comando move as alterações para a área de staging.',
    options: [
      { id: 0, option: 'git add' },
      { id: 1, option: 'git commit' },
      { id: 2, option: 'git stash' }
    ]
  },
  {
    id: 31,
    question: 'Qual tag HTML é usada para criar uma tabela?',
    currectAnswer: '<table>',
    subject: 'HTML',
    answered: false,
    score: 3,
    tip: 'Essa tag é usada para agrupar linhas e colunas.',
    options: [
      { id: 0, option: '<list>' },
      { id: 1, option: '<grid>' },
      { id: 2, option: '<table>' }
    ]
  },
  {
    id: 32,
    question: 'Qual atributo HTML é usado para definir a largura de uma imagem?',
    currectAnswer: 'width',
    subject: 'HTML',
    answered: false,
    score: 3,
    tip: 'Esse atributo é usado dentro da tag <img> para especificar a largura.',
    options: [
      { id: 0, option: 'height' },
      { id: 1, option: 'size' },
      { id: 2, option: 'width' }
    ]
  },
  {
    id: 33,
    question: 'Qual tag HTML é usada para inserir um comentário no código?',
    currectAnswer: '<!-- -->',
    subject: 'HTML',
    answered: false,
    score: 3,
    tip: 'Comentários são ignorados pelo navegador e usados para notas no código.',
    options: [
      { id: 0, option: '<comment>' },
      { id: 1, option: '<note>' },
      { id: 2, option: '<!-- -->' }
    ]
  },
  {
    id: 34,
    question: 'Qual tag HTML é usada para definir uma seção de navegação?',
    currectAnswer: '<nav>',
    subject: 'HTML',
    answered: false,
    score: 4,
    tip: 'Essa tag é usada para criar um bloco de navegação dentro da página.',
    options: [
      { id: 0, option: '<section>' },
      { id: 1, option: '<header>' },
      { id: 2, option: '<nav>' }
    ]
  },
  {
    id: 35,
    question: 'Qual tag HTML é usada para incluir uma folha de estilo externa?',
    currectAnswer: '<link>',
    subject: 'HTML',
    answered: false,
    score: 4,
    tip: 'Essa tag deve estar dentro do <head> do documento HTML.',
    options: [
      { id: 0, option: '<style>' },
      { id: 1, option: '<script>' },
      { id: 2, option: '<link>' }
    ]
  },
  {
    id: 36,
    question: 'Qual atributo HTML é usado para adicionar um título a uma página?',
    currectAnswer: 'title',
    subject: 'HTML',
    answered: false,
    score: 4,
    tip: 'Esse atributo aparece na barra de título do navegador.',
    options: [
      { id: 0, option: 'name' },
      { id: 1, option: 'alt' },
      { id: 2, option: 'title' }
    ]
  },
  {
    id: 37,
    question: 'Qual é a diferença entre <div> e <span> em HTML?',
    currectAnswer: 'Div é um elemento de bloco, enquanto span é um elemento em linha.',
    subject: 'HTML',
    answered: false,
    score: 5,
    tip: 'Div é usado para agrupar blocos de conteúdo, span para conteúdo em linha.',
    options: [
      { id: 0, option: 'Ambos são elementos de bloco.' },
      { id: 1, option: 'Ambos são elementos em linha.' },
      { id: 2, option: 'Div é um elemento de bloco, enquanto span é um elemento em linha.' }
    ]
  },
  {
    id: 38,
    question: 'Qual tag HTML é usada para criar um formulário?',
    currectAnswer: '<form>',
    subject: 'HTML',
    answered: false,
    score: 5,
    tip: 'Essa tag agrupa elementos de formulário como inputs e buttons.',
    options: [
      { id: 0, option: '<input>' },
      { id: 1, option: '<fieldset>' },
      { id: 2, option: '<form>' }
    ]
  },
  {
    id: 39,
    question: 'Qual atributo é necessário para criar uma URL de destino para um link?',
    currectAnswer: 'href',
    subject: 'HTML',
    answered: false,
    score: 6,
    tip: 'Esse atributo é usado dentro da tag <a> para definir o destino do link.',
    options: [
      { id: 0, option: 'src' },
      { id: 1, option: 'alt' },
      { id: 2, option: 'href' }
    ]
  },
  {
    id: 40,
    question: 'Como você define a cor do texto usando HTML?',
    currectAnswer: 'Usando a tag <font> com o atributo color.',
    subject: 'HTML',
    answered: false,
    score: 6,
    tip: 'A tag <font> é obsoleta e não é recomendada para uso em HTML5.',
    options: [
      { id: 0, option: 'Usando a tag <p> com a propriedade color.' },
      { id: 1, option: 'Usando a tag <text> com a propriedade color.' },
      { id: 2, option: 'Usando a tag <font> com o atributo color.' }
    ]
  }
];

let LOGOS = [
  {
    id: 0,
    icon: './images/logos/html.png',
    name: 'HTML',
    state: true
  },
  {
    id: 1,
    icon: './images/logos/css.png',
    name: 'CSS',
    state: false
  },
  {
    id: 2,
    icon: './images/logos/js.png',
    name: 'JavaScript',
    state: false
  },
  {
    id: 3,
    icon: './images/logos/react.png',
    name: 'React',
    state: false
  },
  {
    id: 4,
    icon: './images/logos/node.png',
    name: 'Node.js',
    state: false
  },
  {
    id: 5,
    icon: './images/logos/git.png',
    name: 'GitHub',
    state: false
  }
]

const logos = document.getElementById('logos')
const time = document.querySelector('.time')
const questionsArea = document.querySelector('.questions')
const answersArea = document.querySelector('.answers')
const viewQuestion = document.querySelector('.question_area')
const score = document.querySelector('.score')
const overlay = document.querySelector('.overlay')
const btnCloseModalTip = document.querySelector('.btnClose')
const modal = document.querySelector('.modal')
const currentTip = document.querySelector('.tip')
const btnPrevQuestion = document.querySelector('.btn_prev')
const btnNextQuestion = document.querySelector('.btn_next')
const assessmentForResponse = document.querySelector('.assessment_for_response')
const modalForResults = document.querySelector('.modal_for_results')

let currentTime = 0
let questionToBeViewed = 0
let currentSubjectId = 0
let currentSubject = questions[currentSubjectId].subject
let currentQuestion = 0
let currentScore = 0
let totalQuestion = 0

const toggleStateModal = () => {
  modal.classList.toggle('active')
}

overlay.addEventListener('click', toggleStateModal)
btnCloseModalTip.addEventListener('click', toggleStateModal)


const showModalForResult = (showModal) => {
  let timeForModalDisplay = 0;
  updatedScore()
  cleanArea(answersArea)
  addAnswerOptions()

  setInterval(() => {
    timeForModalDisplay += 1
    const reachedTheLimit = timeForModalDisplay === 1
    if (reachedTheLimit) {
      modalForResults.classList.remove('active')

      cleanArea(answersArea)
      cleanArea(viewQuestion)
      addQuestions()
      addAnswerOptions()
    }
  }, 1000)

  if (showModal) {
    // modalForResults.classList.remove('wrong')
    // assessmentForResponse.textContent = `Resposta certa, TEMPO: ${currentTime}`
    return modalForResults.classList.remove('active')
  }
  modalForResults.classList.add('active')
  modalForResults.classList.add('wrong')
  assessmentForResponse.textContent = 'Resposta Errada'
}

const resetTime = () => {
  return currentTime = 0
}

const toggleQuestion = (action) => {
  const isNext = action === 'next'
  const currentQuestions = filterQuestions()
  const limit = currentQuestions.length - 1
  questionToBeViewed = isNext ? (questionToBeViewed < limit ? questionToBeViewed + 1 : questionToBeViewed) : (questionToBeViewed === 0 ? 0 : questionToBeViewed - 1);

  resetTime()
  cleanArea(answersArea)
  cleanArea(viewQuestion)
  addQuestions()
  addAnswerOptions()
}

btnNextQuestion.addEventListener('click', () => toggleQuestion('next'))
btnPrevQuestion.addEventListener('click', () => toggleQuestion('prev'))

const updatedScore = () => {
  score.textContent = currentScore < 10 ? '0'.concat(currentScore.toString().concat('🏆')) : currentScore.toString().concat('🏆')
}

const filterQuestions = () => {
  const currentQuestions = questions.filter((question) =>
    question.subject === currentSubject
  )

  return currentQuestions
}

const updateResponseStatus = (id) => {
  questions = questions.map((response) => {
    if (response.id === id) {
      response.answered = true
    }

    return response
  })
}

const verifyResponse = (questionId, response) => {
  const current = questions.filter(question => question.id === questionId)
  const currectAnswer = current[0].currectAnswer

  const isTheAnswerRight = currectAnswer === response

  const currentQuestions = filterQuestions()

  const limit = currentQuestions.length;


  if (isTheAnswerRight) {
    currentScore += current[0].id
    updateResponseStatus(questionId)
    showModalForResult(isTheAnswerRight)
    questionToBeViewed = questionToBeViewed < limit ? questionToBeViewed + 1 : questionToBeViewed;

    const filteredAnswred = currentQuestions.filter((question) =>
      question.answered === true
    )

    totalQuestion = filteredAnswred.length

    if (totalQuestion === limit) {
      currentSubjectId = currentSubjectId < LOGOS.length - 1 ? currentSubjectId + 1 : currentSubjectId;

      LOGOS = LOGOS.map((logo) => ({
        ...logo,
        state: logo.id === currentSubjectId
      }))

      questionToBeViewed = 0

      const logosFiltered = LOGOS.filter((logo) => logo.state)

      if (logosFiltered) {
        currentSubject = logosFiltered[0].name
      }
      setTimeout(() => {
        cleanArea(logos)
        showLogos()
      }, 1000)
    }

    return resetTime()
  }
  showModalForResult()
}

const createQuestion = (currentTitle, currentparagraph) => {
  const question = document.createElement('div')
  question.className = 'question'

  const title = document.createElement('h2')
  title.textContent = currentTitle

  question.appendChild(title)

  const paragraph = document.createElement('span')
  paragraph.textContent = currentparagraph

  question.appendChild(paragraph)

  return question
}

const createAnswerOptions = (answerOption, answered) => {
  const responseArea = document.createElement('div')
  responseArea.className = 'response'

  const response = document.createElement('p')
  response.textContent = answerOption

  if (answered) {
    responseArea.classList.add('correct')
  }

  responseArea.appendChild(response)

  return responseArea
}

const addAnswerOptions = () => {
  const currentQuestions = filterQuestions()

  currentQuestions.map(({ answered, currectAnswer, id, options, question, subject, tip }, index) => {
    currentQuestion = currentQuestions[questionToBeViewed].id
    if (currentQuestion === id) {
      options.map(({ option }) => {
        const createdOption = createAnswerOptions(option, answered && currectAnswer === option)
        createdOption.addEventListener('click', () => verifyResponse(id, option))
        if (answered) {
          answersArea.classList.add('disabled')
        } else {
          answersArea.classList.remove('disabled')
        }
        answersArea.appendChild(createdOption)
      })
    }
  })
}

const addQuestions = () => {
  const currentQuestions = filterQuestions()

  currentQuestions.map(({ answered, currectAnswer, id, options, question, subject, tip }) => {
    currentQuestion = currentQuestions[questionToBeViewed].id
    if (currentQuestion === id) {
      const questionCreated = createQuestion(subject, question)

      viewQuestion.appendChild(questionCreated)

      currentTip.textContent = tip

      const buttonTip = document.createElement('button')
      buttonTip.className = 'button_tip'
      buttonTip.textContent = '💡​'

      buttonTip.addEventListener('click', toggleStateModal)

      viewQuestion.appendChild(buttonTip)
    }
  })
}

const formatTime = () => {
  const formattedTime = currentTime < 10 ? '0'.concat(currentTime.toString().concat('⏰')) : currentTime.toString().concat('⏰')

  return formattedTime
}

const updateTime = () => {
  setInterval(() => {
    currentTime += 1

    if (currentTime) {
      time.textContent = formatTime()
    }
  }, 1000)
}

const createLogo = (icon, name, state) => {
  const element = document.createElement('li')

  const img = document.createElement('img')
  img.src = icon
  element.appendChild(img)

  const span = document.createElement('span')
  span.textContent = name
  element.appendChild(span)

  if (state) {
    element.classList.add('active')
  }

  return element
}

const cleanArea = (element) => {
  if (element) {
    return element.innerHTML = ''
  }
}

const changeSubject = (id, selectedSubject) => {
  LOGOS = LOGOS.map((logo) => ({
    ...logo,
    state: logo.id === id
  }))

  questionToBeViewed = 0
  currentSubject = selectedSubject
  currentSubjectId = id

  resetTime()
  cleanArea(answersArea)
  addAnswerOptions()
  cleanArea(viewQuestion)
  addQuestions()
  cleanArea(logos)
  showLogos()
}

const showLogos = () => {
  LOGOS.map(({ icon, id, name, state }) => {
    const logo = createLogo(icon, name, state)
    logo.addEventListener('click', () => changeSubject(id, name))

    if (logo) {
      logos.appendChild(logo)
    }
  })
}

const storeQuestions = () => {
  const store = JSON.stringify(questions)

  localStorage.setItem('Questions', store)
}

showLogos()
updateTime()
addQuestions()
updatedScore()
storeQuestions()
addAnswerOptions()