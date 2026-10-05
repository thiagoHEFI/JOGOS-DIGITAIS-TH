/* =========================================
   ARTE QUEST
   Lógica principal do jogo
   ========================================= */


/* ---------- PERGUNTAS ---------- */

const perguntas = [
    {
        pergunta: "Quais são consideradas cores primárias na pintura?",
        alternativas: [
            "Vermelho, azul e amarelo",
            "Verde, roxo e laranja",
            "Preto, branco e cinza",
            "Rosa, marrom e dourado"
        ],
        correta: 0,
        explicacao: "As cores primárias são vermelho, azul e amarelo."
    },

    {
        pergunta: "O que é uma escultura?",
        alternativas: [
            "Uma obra de arte feita apenas com sons",
            "Uma obra de arte tridimensional",
            "Uma pintura feita somente com lápis",
            "Uma dança tradicional"
        ],
        correta: 1,
        explicacao: "A escultura é uma forma de arte tridimensional, podendo ser feita com pedra, madeira, argila, metal e outros materiais."
    },

    {
        pergunta: "Qual material é muito utilizado na produção de desenhos e pinturas?",
        alternativas: [
            "Lápis",
            "Computador de mesa",
            "Borracha de pneu",
            "Colher"
        ],
        correta: 0,
        explicacao: "O lápis é um dos materiais mais utilizados para desenhar e fazer esboços."
    },

    {
        pergunta: "O que significa observar uma obra de arte?",
        alternativas: [
            "Olhar rapidamente e ir embora",
            "Copiar a obra sem observar seus detalhes",
            "Prestar atenção em suas cores, formas, linhas e outros elementos",
            "Dizer que toda obra precisa ser bonita"
        ],
        correta: 2,
        explicacao: "Observar uma obra envolve perceber seus elementos, como cores, linhas, formas, texturas e composição."
    },

    {
        pergunta: "Qual destes elementos pode fazer parte de uma obra de arte visual?",
        alternativas: [
            "Linha",
            "Senha",
            "Placa de trânsito",
            "Conta de matemática"
        ],
        correta: 0,
        explicacao: "A linha é um importante elemento das artes visuais."
    },

    {
        pergunta: "Quando misturamos azul e amarelo, qual cor geralmente obtemos?",
        alternativas: [
            "Verde",
            "Roxo",
            "Laranja",
            "Rosa"
        ],
        correta: 0,
        explicacao: "A mistura das cores azul e amarelo resulta em verde."
    },

    {
        pergunta: "O que é uma pintura?",
        alternativas: [
            "Uma expressão artística feita com aplicação de cores sobre uma superfície",
            "Somente uma fotografia",
            "Uma apresentação esportiva",
            "Uma história contada apenas por palavras"
        ],
        correta: 0,
        explicacao: "A pintura é uma linguagem artística que utiliza cores e formas aplicadas em uma superfície."
    },

    {
        pergunta: "A textura em uma obra de arte está relacionada principalmente a:",
        alternativas: [
            "Como uma superfície parece ou é ao toque",
            "A quantidade de páginas de um livro",
            "O nome do artista",
            "O tamanho da sala"
        ],
        correta: 0,
        explicacao: "A textura pode ser visual ou tátil e está relacionada às características de uma superfície."
    },

    {
        pergunta: "Qual destas opções é uma manifestação artística?",
        alternativas: [
            "Dança",
            "Tabuada",
            "Senha de computador",
            "Lista de compras"
        ],
        correta: 0,
        explicacao: "A dança é uma manifestação artística que utiliza o corpo e o movimento como forma de expressão."
    },

    {
        pergunta: "Por que diferentes pessoas podem interpretar uma obra de arte de maneiras diferentes?",
        alternativas: [
            "Porque cada pessoa possui experiências e formas de perceber o mundo",
            "Porque apenas uma interpretação é permitida",
            "Porque obras de arte não possuem significado",
            "Porque somente o artista pode olhar para a obra"
        ],
        correta: 0,
        explicacao: "As experiências e conhecimentos de cada pessoa podem influenciar a maneira como ela interpreta uma obra."
    }
];


/* ---------- ELEMENTOS DO HTML ---------- */

const telaInicial = document.getElementById("telaInicial");
const telaJogo = document.getElementById("telaJogo");
const telaFinal = document.getElementById("telaFinal");

const btnIniciar = document.getElementById("btnIniciar");
const btnProxima = document.getElementById("btnProxima");
const btnJogarNovamente = document.getElementById("btnJogarNovamente");

const pontuacaoElemento = document.getElementById("pontuacao");
const vidasElemento = document.getElementById("vidas");

const contadorPergunta = document.getElementById("contadorPergunta");
const numeroPergunta = document.getElementById("numeroPergunta");

const barraProgresso = document.getElementById("barraProgresso");

const textoPergunta = document.getElementById("textoPergunta");
const alternativasContainer = document.getElementById("alternativas");
const feedback = document.getElementById("feedback");

const pontuacaoFinal = document.getElementById("pontuacaoFinal");
const acertosFinal = document.getElementById("acertosFinal");
const errosFinal = document.getElementById("errosFinal");
const vidasFinal = document.getElementById("vidasFinal");

const tituloResultado = document.getElementById("tituloResultado");
const mensagemResultado = document.getElementById("mensagemResultado");
const emojiResultado = document.getElementById("emojiResultado");

const classificacao = document.getElementById("classificacao");
const iconeClassificacao = document.getElementById("iconeClassificacao");


/* ---------- VARIÁVEIS DO JOGO ---------- */

let perguntaAtual = 0;
let pontuacao = 0;
let vidas = 3;
let acertos = 0;
let erros = 0;

let respondeu = false;


/* ---------- INICIAR JOGO ---------- */

function iniciarJogo() {

    perguntaAtual = 0;
    pontuacao = 0;
    vidas = 3;
    acertos = 0;
    erros = 0;
    respondeu = false;

    pontuacaoElemento.textContent = pontuacao;
    atualizarVidas();

    mostrarTela(telaJogo);

    carregarPergunta();
}


/* ---------- MOSTRAR TELA ---------- */

function mostrarTela(tela) {

    telaInicial.classList.remove("ativa");
    telaJogo.classList.remove("ativa");
    telaFinal.classList.remove("ativa");

    tela.classList.add("ativa");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* ---------- CARREGAR PERGUNTA ---------- */

function carregarPergunta() {

    respondeu = false;

    btnProxima.disabled = true;

    feedback.className = "feedback";
    feedback.textContent = "";

    const pergunta = perguntas[perguntaAtual];

    textoPergunta.textContent = pergunta.pergunta;

    numeroPergunta.textContent =
        `PERGUNTA ${perguntaAtual + 1}`;

    contadorPergunta.textContent =
        `${perguntaAtual + 1}/${perguntas.length}`;

    const progresso =
        ((perguntaAtual) / perguntas.length) * 100;

    barraProgresso.style.width = `${progresso}%`;

    alternativasContainer.innerHTML = "";

    const letras = ["A", "B", "C", "D"];

    pergunta.alternativas.forEach(
        (alternativa, indice) => {

            const botao = document.createElement("button");

            botao.className = "alternativa";

            botao.innerHTML = `
                <span class="letra">${letras[indice]}</span>
                ${alternativa}
            `;

            botao.addEventListener(
                "click",
                () => verificarResposta(indice, botao)
            );

            alternativasContainer.appendChild(botao);
        }
    );
}


/* ---------- VERIFICAR RESPOSTA ---------- */

function verificarResposta(indiceEscolhido, botaoEscolhido) {

    if (respondeu) {
        return;
    }

    respondeu = true;

    const pergunta = perguntas[perguntaAtual];

    const botoes =
        document.querySelectorAll(".alternativa");

    botoes.forEach(botao => {
        botao.classList.add("desabilitada");
        botao.disabled = true;
    });


    if (indiceEscolhido === pergunta.correta) {

        // ACERTO
        acertos++;

        pontuacao += 100;

        botaoEscolhido.classList.add("correta");

        feedback.className = "feedback sucesso";

        feedback.innerHTML =
            `🎉 Muito bem! +100 pontos!<br>
             ${pergunta.explicacao}`;

        pontuacaoElemento.textContent = pontuacao;

    } else {

        // ERRO
        erros++;

        vidas--;

        botaoEscolhido.classList.add("errada");

        botoes[pergunta.correta]
            .classList.add("correta");

        feedback.className = "feedback erro";

        feedback.innerHTML =
            `💡 Quase! A resposta correta era:
             <strong>${pergunta.alternativas[pergunta.correta]}</strong>.
             <br>${pergunta.explicacao}`;

        atualizarVidas();
    }

    btnProxima.disabled = false;

    if (perguntaAtual === perguntas.length - 1) {

        btnProxima.textContent =
            "Ver resultado 🏆";

    } else {

        btnProxima.textContent =
            "Próxima pergunta ➜";
    }
}


/* ---------- ATUALIZAR VIDAS ---------- */

function atualizarVidas() {

    let coracoes = "";

    for (let i = 0; i < 3; i++) {

        if (i < vidas) {
            coracoes += "❤️";
        } else {
            coracoes += "🖤";
        }
    }

    vidasElemento.textContent = coracoes;
}


/* ---------- PRÓXIMA PERGUNTA ---------- */

function proximaPergunta() {

    perguntaAtual++;

    if (perguntaAtual >= perguntas.length) {

        finalizarJogo();

        return;
    }

    carregarPergunta();
}


/* ---------- FINALIZAR JOGO ---------- */

function finalizarJogo() {

    barraProgresso.style.width = "100%";

    pontuacaoFinal.textContent = pontuacao;
    acertosFinal.textContent = acertos;
    errosFinal.textContent = erros;
    vidasFinal.textContent = vidas;

    definirResultado();

    mostrarTela(telaFinal);
}


/* ---------- RESULTADO ---------- */

function definirResultado() {

    if (acertos === 10) {

        emojiResultado.textContent = "🏆";

        tituloResultado.textContent =
            "Você é um mestre da Arte!";

        mensagemResultado.textContent =
            "Incrível! Você acertou todas as perguntas. Seu olhar artístico está afiado!";

        iconeClassificacao.textContent = "👑";

        classificacao.textContent =
            "Mestre da Arte";

    } else if (acertos >= 8) {

        emojiResultado.textContent = "🎨";

        tituloResultado.textContent =
            "Mandou muito bem!";

        mensagemResultado.textContent =
            "Você mostrou que conhece bastante sobre Arte. Continue explorando e criando!";

        iconeClassificacao.textContent = "🎨";

        classificacao.textContent =
            "Artista destaque";

    } else if (acertos >= 5) {

        emojiResultado.textContent = "🖌️";

        tituloResultado.textContent =
            "Bom trabalho!";

        mensagemResultado.textContent =
            "Você está no caminho certo. Que tal continuar estudando e descobrindo novas formas de arte?";

        iconeClassificacao.textContent = "🖌️";

        classificacao.textContent =
            "Artista em treinamento";

    } else {

        emojiResultado.textContent = "🌈";

        tituloResultado.textContent =
            "Continue tentando!";

        mensagemResultado.textContent =
            "Todo artista está sempre aprendendo. Tente novamente e descubra novos conhecimentos!";

        iconeClassificacao.textContent = "🌱";

        classificacao.textContent =
            "Aprendiz da Arte";
    }
}


/* ---------- EVENTOS ---------- */

btnIniciar.addEventListener(
    "click",
    iniciarJogo
);

btnProxima.addEventListener(
    "click",
    proximaPergunta
);

btnJogarNovamente.addEventListener(
    "click",
    iniciarJogo
);
