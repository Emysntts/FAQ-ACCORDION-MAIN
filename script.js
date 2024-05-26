document.getElementById("btnMostrarConteudo").addEventListener('click', function() {
    var conteudo = document.querySelector(".respost1");

    var estiloComputado = window.getComputedStyle(conteudo);

    var displayAtual = estiloComputado.getPropertyValue('display');

    if (displayAtual === "none") {
        conteudo.style.display = "block";
    } else {
        conteudo.style.display = "none";
    }
});

var btnMostrarConteudo = document.getElementById("btnMostrarConteudo");
var isMostrandoConteudo = false;

btnMostrarConteudo.addEventListener('click', function () {
    if (isMostrandoConteudo) {
        btnMostrarConteudo.src = './assets/images/icon-plus.svg';
    } else {
        btnMostrarConteudo.src = './assets/images/icon-minus.svg';
    }

    isMostrandoConteudo = !isMostrandoConteudo;
});


document.getElementById("btnMostrarConteudo2").addEventListener('click', function() {
    var conteudoDois = document.querySelector(".respost2");

    var estiloComputadoDois = window.getComputedStyle(conteudoDois);

    var displayAtual = estiloComputadoDois.getPropertyValue('display');

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

    isMostrandoConteudoDois = !isMostrandoConteudoDois;
});

document.getElementById("btnMostrarConteudo3").addEventListener('click', function() {
    var conteudoTres= document.querySelector(".respost3");

    var estiloComputadoTres = window.getComputedStyle(conteudoTres);

    var displayAtual = estiloComputadoTres.getPropertyValue('display');

    if (displayAtual === "none") {
        conteudoTres.style.display = "block";
    } else {
        conteudoTres.style.display = "none";
    }
});

var btnMostrarConteudo3 = document.getElementById("btnMostrarConteudo3");
var isMostrandoConteudo3 = false;

btnMostrarConteudo3.addEventListener('click', function () {
    if (isMostrandoConteudo3) {
        btnMostrarConteudo3.src = './assets/images/icon-plus.svg';
    } else {
        btnMostrarConteudo3.src = './assets/images/icon-minus.svg';
    }

    isMostrandoConteudo3 = !isMostrandoConteudo3;
});

document.getElementById("btnMostrarConteudo4").addEventListener('click', function() {
    var conteudo4 = document.querySelector(".respost4");

    var estiloComputado4 = window.getComputedStyle(conteudo4);

    var displayAtual = estiloComputado4.getPropertyValue('display');

    if (displayAtual === "none") {
        conteudo4.style.display = "block";
    } else {
        conteudo4.style.display = "none";
    }
});

var btnMostrarConteudo4 = document.getElementById("btnMostrarConteudo4");
var isMostrandoConteudo4 = false;

btnMostrarConteudo4.addEventListener('click', function () {
    if (isMostrandoConteudo4) {
        btnMostrarConteudo4.src = './assets/images/icon-plus.svg';
    } else {
        btnMostrarConteudo4.src = './assets/images/icon-minus.svg';
    }

    isMostrandoConteudo4 = !isMostrandoConteudo4;
});
