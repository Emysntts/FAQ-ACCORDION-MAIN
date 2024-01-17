document.getElementById("btnMostrarConteudo").addEventListener('click', function() {
    // Obtém o bloco de conteúdo
    var conteudo = document.querySelector(".respost1");

    // Obtém o estilo computado
    var estiloComputado = window.getComputedStyle(conteudo);

    // Obtém o valor da propriedade 'display'
    var displayAtual = estiloComputado.getPropertyValue('display');

    // Alterna a visibilidade
    if (displayAtual === "none") {
        conteudo.style.display = "block";
    } else {
        conteudo.style.display = "none";
    }
});

// Lógica para alternar entre os ícones
var btnMostrarConteudo = document.getElementById("btnMostrarConteudo");
var isMostrandoConteudo = false;

btnMostrarConteudo.addEventListener('click', function () {
    if (isMostrandoConteudo) {
        btnMostrarConteudo.src = './assets/images/icon-plus.svg';
    } else {
        btnMostrarConteudo.src = './assets/images/icon-minus.svg';
    }

    // Inverte o estado
    isMostrandoConteudo = !isMostrandoConteudo;
});


document.getElementById("btnMostrarConteudo2").addEventListener('click', function() {
    // Obtém o bloco de conteúdo
    var conteudoDois = document.querySelector(".respost2");

    // Obtém o estilo computado
    var estiloComputadoDois = window.getComputedStyle(conteudoDois);

    // Obtém o valor da propriedade 'display'
    var displayAtual = estiloComputadoDois.getPropertyValue('display');

    // Alterna a visibilidade
    if (displayAtual === "none") {
        conteudoDois.style.display = "block";
    } else {
        conteudoDois.style.display = "none";
    }
});

// Lógica para alternar entre os ícones
var btnMostrarConteudoDois = document.getElementById("btnMostrarConteudo2");
var isMostrandoConteudoDois = false;

btnMostrarConteudo2.addEventListener('click', function () {
    if (isMostrandoConteudoDois) {
        btnMostrarConteudo2.src = './assets/images/icon-plus.svg';
    } else {
        btnMostrarConteudo2.src = './assets/images/icon-minus.svg';
    }

    // Inverte o estado
    isMostrandoConteudoDois = !isMostrandoConteudoDois;
});

document.getElementById("btnMostrarConteudo3").addEventListener('click', function() {
    // Obtém o bloco de conteúdo
    var conteudoTres= document.querySelector(".respost3");

    // Obtém o estilo computado
    var estiloComputadoTres = window.getComputedStyle(conteudoTres);

    // Obtém o valor da propriedade 'display'
    var displayAtual = estiloComputadoTres.getPropertyValue('display');

    // Alterna a visibilidade
    if (displayAtual === "none") {
        conteudoTres.style.display = "block";
    } else {
        conteudoTres.style.display = "none";
    }
});

// Lógica para alternar entre os ícones
var btnMostrarConteudo3 = document.getElementById("btnMostrarConteudo3");
var isMostrandoConteudo3 = false;

btnMostrarConteudo3.addEventListener('click', function () {
    if (isMostrandoConteudo3) {
        btnMostrarConteudo3.src = './assets/images/icon-plus.svg';
    } else {
        btnMostrarConteudo3.src = './assets/images/icon-minus.svg';
    }

    // Inverte o estado
    isMostrandoConteudo3 = !isMostrandoConteudo3;
});

document.getElementById("btnMostrarConteudo4").addEventListener('click', function() {
    // Obtém o bloco de conteúdo
    var conteudo4 = document.querySelector(".respost4");

    // Obtém o estilo computado
    var estiloComputado4 = window.getComputedStyle(conteudo4);

    // Obtém o valor da propriedade 'display'
    var displayAtual = estiloComputado4.getPropertyValue('display');

    // Alterna a visibilidade
    if (displayAtual === "none") {
        conteudo4.style.display = "block";
    } else {
        conteudo4.style.display = "none";
    }
});

// Lógica para alternar entre os ícones
var btnMostrarConteudo4 = document.getElementById("btnMostrarConteudo4");
var isMostrandoConteudo4 = false;

btnMostrarConteudo4.addEventListener('click', function () {
    if (isMostrandoConteudo4) {
        btnMostrarConteudo4.src = './assets/images/icon-plus.svg';
    } else {
        btnMostrarConteudo4.src = './assets/images/icon-minus.svg';
    }

    // Inverte o estado
    isMostrandoConteudo4 = !isMostrandoConteudo4;
});