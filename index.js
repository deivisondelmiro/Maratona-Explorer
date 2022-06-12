const elementoAnalises = document.querySelector("#analiseFinal")
const inputAnalise = document.querySelector("#inputAnalise")
const buttonAnalisar = document.querySelector('#buttonAnalisar')
const analises = [
    "Bom!",
    "Ruim!",
    "Olha... nem te conto.",
    "Olha... só qualidade aí hein!",
    "Mais que recomendado",
    "Pode ir assistir essa obra prima",
    "Seus gostos são peculiares, bom gosto",
    "Produção de sucesso",
    "Recomendo, e com pipoca e refrigerante do lado",
    "Ótimo! Mas tenha um lencinho do lado",
    "Bom gosto",
    "Melhor assistir outro",
    "Recomendado por muitos",
]

// Clicar em fazer análise
function fazerAnalise() {

    // Aviso para caso o úsuario não digite um filme ou série
    if(inputAnalise.value == "") {
        alert("Digite um filme ou série!")
        return
    }

    // Desabilitar a opção de clique no button Analisar
    buttonAnalisar.setAttribute("disabled", true)

    // Criação da div onde aparecerá a frase de análise
    const producao = "<div>" + inputAnalise.value + "</div>"

    // Geração de número aleatório
    const totalAnalises = analises.length
    const numeroAleatorio = Math.floor(Math.random() * totalAnalises)

    elementoAnalises.innerHTML = producao + analises[numeroAleatorio]

    // Voltar a possivéis analises
    elementoAnalises.style.opacity = 1;

    // Sumir a análise depois de 3 segundos
    setTimeout(function() {
        elementoAnalises.style.opacity = 0;
        buttonAnalisar.removeAttribute("disabled")
    }, 3000)
}
