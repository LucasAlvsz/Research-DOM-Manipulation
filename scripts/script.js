function retornos(element) {
    console.clear()
    if (element == "getElementById") {
        const getElementByIdReturn = document.getElementById("getElementById")
        console.log("Retorno: \n",getElementByIdReturn);
        document.querySelector("span").innerHTML = getElementByIdReturn.toString()
        document.querySelector(".span2").innerHTML = "<img src='imgs/getElementById.png'>"
    }
    else if (element == "getElementsByClassName") {
        const getElementsByClassNameReturn = document.getElementsByClassName("element")
        console.log("Retorno: \n",getElementsByClassNameReturn);
        document.querySelector("span").innerHTML = getElementsByClassNameReturn.toString()
        document.querySelector(".span2").innerHTML = "<img src='imgs/getElementsByClassName.png'>"
    }
    else if (element == "querySelector") {
        const querySelectorReturn = document.querySelector(".querySelector")
        console.log("Retorno: \n",querySelectorReturn);
        document.querySelector("span").innerHTML = querySelectorReturn.toString()
        document.querySelector(".span2").innerHTML = "<img src='imgs/querySelector.png'>"
    }
    else if (element == "querySelectorAll") {
        const querySelectorAllReturn = document.querySelectorAll(".element")
        console.log("Retorno: \n",querySelectorAllReturn);
        document.querySelector("span").innerHTML = querySelectorAllReturn.toString()
        document.querySelector(".span2").innerHTML = "<img src='imgs/querySelectorAll.png'>"
    }
}

retornos()