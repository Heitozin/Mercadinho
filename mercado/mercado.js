let formBimestre = document.getElementById('form-bimestre')
formBimestre.addEventListener("submit", function (event) {
    event.preventDefault();
    //console.log(formBimestre.nome.value);
    let bimestreUm = Number(formBimestre.nota1.value);
    let bimestreDois = Number(formBimestre.nota2.value);
    let bimestreTres = Number(formBimestre.nota3.value);
    let bimestreQuatro = Number(formBimestre.nota4.value);
    let media = (bimestreUm + bimestreDois + bimestreTres + bimestreQuatro) / 4;


    if(formBimestre.nome.value == ""){
        alert("Preencha o campo Nome");
    } else if(formBimestre.disciplina.value == ""){
        alert("Preencha o campo Disciplina")
    } else if(bimestreUm == " "){
        alert("Preencha o campo BIM 1")
    } else if(bimestreDois == " "){
        alert("Preencha o campo BIM 2")
    } else if(bimestreTres == " "){
        alert("Preencha o campo BIM 3")
    } else if(bimestreQuatro == " "){
        alert("Preencha o campo BIM 4")
    } else {    
    //Se media >= 6 entao
    if(media >=7){
        console.log("Aprovado");
        //Senao se (media >= 4) e (media < 6) entao
    }else if(media >= 4 && media < 6){
        console.log("Recuperação");
        //Senao
    } else{
        console.log("Reprovado")
    }}
});



    
    