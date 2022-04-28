window.onload = function() {
  
    let cards_medio = ['1','2','3','4','5','6','7','8','9','10','J','Q','K'];
    let escala_medio = ["heart","diamond","club","spades"];
    let almedio = document.querySelector(".carta-mid-texto");
    let arriba = document.querySelector(".carta-top");
    let abajo = document.querySelector(".carta-bottom");

    //genera un numero aleatorio
    let aleatorio_medio = cards_medio[Math.floor(Math.random()*13)]
    //simbolo aleatorio
    let simbolo_medio = escala_medio[Math.floor(Math.random()*4)]
    
    
    // Visualizar elemento del arreglo en el p del medio
    almedio.innerHTML=aleatorio_medio
    arriba.classList.add(simbolo_medio);
    abajo.classList.add(simbolo_medio);
    if(arriba.classList.contains("club") || arriba.classList.contains("spades") ){
        almedio.style.color="black"
    }
    


  };
