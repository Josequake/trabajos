let suma = document.getElementById("2")
let resta = document.getElementById("3")
let cambiar = document.getElementById("4")
let boton = document.getElementById("1")



suma.addEventListener("click", function(){
   
    boton.innerHTML=boton.innerHTML+++1
    
})
resta.addEventListener("click", function(){
    if (boton.textContent != 0) {
        boton.innerHTML=boton.innerHTML-1
    }else{
        boton.innerHTML=0
    }
    
})
cambiar.addEventListener("click", function(){

    if (cambiar.textContent != "Desubscribirse") {
        cambiar.innerHTML = "Desubscribirse"
    }else {
        cambiar.textContent = "Subscribirse"
    }
})

       

