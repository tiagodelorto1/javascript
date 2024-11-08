// Obter os elementos dos inputs
const nomeInput = document.getElementById("nome");
const corInput = document.getElementById("cor");

// Adicionar evento de "keydown" para o input de nome
nomeInput.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        let nome = nomeInput.value;
        let cor = corInput.value;
        alert("Olá " + nome + "! Sua cor favorita é " + cor + "!");
    }
});

// Adicionar evento de "keydown" para o input de cor
corInput.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        let nome = nomeInput.value;
        let cor = corInput.value;
        alert("Olá " + nome + "! Sua cor favorita é " + cor + "!");
    }
});