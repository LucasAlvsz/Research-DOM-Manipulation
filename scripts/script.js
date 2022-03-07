function retornos(element) {
    console.clear()
    if (element == "getElementById") {
        const getElementByIdReturn = document.getElementById("getElementById")
        console.log("Retorno: \n", getElementByIdReturn);
        document.querySelector("span").innerHTML = getElementByIdReturn.toString()
        document.querySelector(".span2").innerHTML = "<img src='imgs/getElementById.png'>"
    }
    else if (element == "getElementsByClassName") {
        const getElementsByClassNameReturn = document.getElementsByClassName("element")
        console.log("Retorno: \n", getElementsByClassNameReturn);
        document.querySelector("span").innerHTML = getElementsByClassNameReturn.toString()
        document.querySelector(".span2").innerHTML = "<img src='imgs/getElementsByClassName.png'>"
    }
    else if (element == "querySelector") {
        const querySelectorReturn = document.querySelector(".querySelector")
        console.log("Retorno: \n", querySelectorReturn);
        document.querySelector("span").innerHTML = querySelectorReturn.toString()
        document.querySelector(".span2").innerHTML = "<img src='imgs/querySelector.png'>"
    }
    else if (element == "querySelectorAll") {
        const querySelectorAllReturn = document.querySelectorAll(".element")
        console.log("Retorno: \n", querySelectorAllReturn);
        document.querySelector("span").innerHTML = querySelectorAllReturn.toString()
        document.querySelector(".span2").innerHTML = "<img src='imgs/querySelectorAll.png'>"
    }
    else if (element == "innerHTML") {
        const elementoSelecionado = document.querySelector(".innerHTML").parentNode
        console.log("Retorno: \n", elementoSelecionado.innerHTML);
        document.querySelector("span").innerHTML = elementoSelecionado.toString()
        document.querySelector(".span2").innerHTML = "<img src='imgs/innerHTML.png'>"
    }
    else if (element == "innerText") {
        const elementoSelecionado = document.querySelector(".innerText").parentNode
        console.log("Retorno: \n", elementoSelecionado.innerText);
        document.querySelector("span").innerHTML = elementoSelecionado.toString()
        document.querySelector(".span2").innerHTML = "<img src='imgs/innerText.png'>"
    }
    else if (element == "textContent") {
        const elementoSelecionado = document.querySelector(".textContent").parentNode
        console.log("Retorno: \n", elementoSelecionado.textContent);
        document.querySelector("span").innerHTML = elementoSelecionado.toString()
        document.querySelector(".span2").innerHTML = "<img src='imgs/textContent.png'>"
    }

    else if (element == "NodeList") {
        const elementoSelecionado = document.querySelectorAll(".element")
        console.log("Retorno: \n", elementoSelecionado);
        document.querySelector(".span1").innerHTML = elementoSelecionado.toString()
        document.querySelector(".span2").innerHTML = "<img src='imgs/nodeList.png'>"
    }

    else if (element == "Array") {
        const elementoSelecionado = [...document.querySelectorAll(".element")]
        console.log("Retorno: \n", elementoSelecionado);
        document.querySelector(".span1").innerHTML = elementoSelecionado.toString()
        document.querySelector(".span2").innerHTML = "<img src='imgs/array.png'>"
    }
}

function adcionaElementos() {
    let divNova = document.createElement("div");
    let conteudoNovo = document.createTextNode("Novo Elemento Criado");
    divNova.appendChild(conteudoNovo);
    let divAtual = document.getElementById("div1");
    divAtual.appendChild(divNova)

}


