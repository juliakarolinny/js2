// const paragrafo = document.getElementById("paragrafo");
// const paragrafo2 = document.getElementById("paragrafo2");
// const paragrafo3 = document.getElementById("paragrafo3");
// const paragrafo4 = document.getElementById("paragrafo4");

// console.log(paragrafo);
// console.log(paragrafo2);
// console.log(paragrafo3);
// console.log(paragrafo4);

// const title = document.getElementById("title");

// title.innerText = "Troquei";

// const p = document.getElementById("paragrafo")
// // p.innerText = "novo"
// p.style.color ="green";
// p.style.fontSize = "90px";
// p.style.backgroundColor = "#31572C";

// const color = "#31572C";

// const h2 = document.getElementById("h2")
// h2.style.color = "blue";
// h2.style.backgroundColor = "green";
// h2.style.fontSize = "200px";
// h2.style.textAlign = "center";

// const paragrafo = document.getElementById("paragrafo")
// const btn = document.getElementById("btn")
// btn.style.backgroundColor = "pink"

// btn.addEventListener("click", function(){

//     paragrafo.innerText = "Novo exmplo de paragrafo"
//     paragrafo.style.color = "blue"
//     paragrafo.style.backgroundColor = "black"
//     alert("Mostrando que deu certo")

    
// })

// const p = document.getElementById("p")
// const btn = document.getElementById("btn")

// btn.addEventListener("click", function(){
    
//     p.innerText = "Texto Alterado com sucesso"

// })

// const img = document.getElementById("img")
// const p = document.getElementById("p")
// const btn = document.getElementById("btn")

// btn.addEventListener("mouseo", function (){
//     p.innerText = "Texto alterado"
//     img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhqChRoFNlCJXfPp779zqMWuGwE_4GnhbpZNjG9kBQ_g&s=10"
    
// })

document.addEventListener("keydown", function(e){
    // alert( e.key)
  
    // if(e.key === "r"){
    //     document.body.style.backgroundColor = "red"
    // } else if (e.key === "g") {
    //     document.body.style.backgroundColor = "green"
    // } else if (e.key === "b"){
    //     document.body.style.backgroundColor = "blue"
    // } 

    switch(e.key){
        case "a":
            document.body.style.backgroundColor = "#1d2d44";
            break;
        case"k":
            document.body.style.backgroundColor = "#bc6c25";
            break;
        case "e":
            document.body.style.backgroundColor = "#ECF39E"
            break;
        default:
            alert("Você apertou a tecla errada !!!" + "\nVocê apertou a tecla : " + e.key )
    }
})
 
