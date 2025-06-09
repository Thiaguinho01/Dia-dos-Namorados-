function atualizarContador() {
  const inicio = new Date("2023-05-07T00:00:00");
  const agora = new Date();
  const diff = agora - inicio;

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diff / (1000 * 60)) % 60);
  const segundos = Math.floor((diff / 1000) % 60);

  const contador = document.getElementById("contador");
  contador.innerText = `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos 💖`;
}

setInterval(atualizarContador, 1000);
atualizarContador();
function criarCoração() {
  const coraçoesContainer = document.getElementById("coraçoes-container");
  const coração = document.createElement("div");
  coração.className = "coração";
  coração.style.left = Math.random() * 100 + "vw";
  coração.style.animationDuration = 3 + Math.random() * 2 + "s";

  coraçoesContainer.appendChild(coração);

  setTimeout(() => {
    coração.remove();
  }, 5000);
}

setInterval(criarCoração, 300);
document.getElementById("botao-coracao").addEventListener("click", () => {
  const telaInicial = document.getElementById("tela-inicial");
  const conteudo = document.getElementById("site-conteudo");

  telaInicial.style.opacity = "0";
  setTimeout(() => {
    telaInicial.style.display = "none";
    conteudo.style.display = "block";
    conteudo.style.opacity = "0";
    setTimeout(() => conteudo.style.opacity = "1", 50);
  }, 500);
});
const fotos = [
  "assets/foto1.jpg",
  "assets/foto2.jpg",
  "assets/foto3.jpg",
  "assets/foto4.jpg",
  "assets/foto5.jpg",
  "assets/foto6.jpg",
  "assets/foto7.jpg",
  "assets/foto8.jpg",
  "assets/foto9.jpg",
  "assets/foto10.jpg",
  "assets/foto11.jpg",
  "assets/foto12.jpg",
  "assets/foto13.jpg",
  "assets/foto14.jpg"
];

let indiceAtual = 0;
const storyImg = document.getElementById("story-img");

function mostrarFoto(index) {
  storyImg.style.opacity = 0;
  setTimeout(() => {
    storyImg.src = fotos[index];
    storyImg.style.opacity = 1;
  }, 300);
}

function proximaFoto() {
  indiceAtual = (indiceAtual + 1) % fotos.length;
  mostrarFoto(indiceAtual);
}

function voltarFoto() {
  indiceAtual = (indiceAtual - 1 + fotos.length) % fotos.length;
  mostrarFoto(indiceAtual);
}

// Avanço automático a cada 4 segundos
setInterval(proximaFoto, 2000);