// pegar o container do texto
const postWrap = document.querySelector(".post-wrap")

// criar a barrinha
let bar = document.createElement("div")
// estilo da barrinha
bar.style.height = "4px"
bar.style.width = "500px"
bar.style.backgroundColor = "#6633cc"
bar.style.position = "fixed"
bar.style.top = "0"
bar.style.left = "0"
bar.style.zIndex = "9999"
bar.style.transition = "0.2s"

// adiciona no corpo da página
document.body.append(bar)

// atualizar a barrinha
function updateBar() {
    // o tamanho da caixa que contém o texto
    const textHeigth = postWrap.offsetHeight
    // verificar em que posição da página eu estou
    const pagePositionY = window.pageYOffset

    // regra de 3
    const updateBar = pagePositionY * 100 / textHeigth

    bar.style.width = updateBar + "%"
}

window.addEventListener("load", () => {
    // verificar o movimento do scroll
    document.addEventListener("scroll", updateBar)
})

