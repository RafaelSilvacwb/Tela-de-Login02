function goBack() {
    document.querySelector("#box")
        .style.transform = "rotateY(180deg)"
}

function goFront() {
    document.querySelector("#box")
        .style.transform = "rotateY(0deg)"
        event.preventDefault()
}

function recovery() {
    document.querySelector("#recover")
    .style.transform = "rotateY(0deg)"
    document.getElementById("box")
    .style.display = "none"
    
    event.preventDefault()
}


