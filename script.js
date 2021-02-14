document.body.addEventListener("keydown", function(event){
    let keyName = event.code

    document.getElementById(keyName).style.backgroundColor = "black"
    document.getElementById(keyName).style.color = "white"
})

document.body.addEventListener("keyup", function(event){
    let keyName = event.code

    document.getElementById(keyName).style.backgroundColor = "white"
    document.getElementById(keyName).style.color = "black"
})

