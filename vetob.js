function calcula(){
    var vet = []
    for(var i=0;i<5;i++){
    var objeto = {}
    
    // coloca os dados do objeto
    objeto.codigo = Number(prompt("Código"))
    objeto.nome = prompt("Insira Nome")
    objeto.qtde = Number(prompt("Quantidade"))
    objeto.preco = Number(prompt("Preço"))
    // Coloca objeto no vetor
    vet.push(objeto)
    }
    //calcula a qtde
    var estoque = 0
    for(i=0;i<5;i++){
         estoque = estoque + vet[i].qtde

    }
    alert("ESTOQUE:" + estoque)
}
function calcula2(){
    var vet = []
    for(var i=0;i<3;i++){
    var objeto = {}
    //coloca os dados do objeto
    objeto.salario = Number(prompt("Salario"))
    objeto.sexo = prompt("informe sexo")
    objeto.idade = Number(prompt("Informe idade"))
    objeto.filhos = Number(prompt("informe a QTDE de Bacuris"))
    //coloca objeto no veto
    vet.push(objeto)
    }
    var media = 0
    var somafilhos = 0
    var maiorsalario = vet[0].salario
    var sexof = 0
    for(var i=0;i<vet.length;i++){
        media = media + vet[i].salario
        somafilhos = somafilhos + vet[i].filhos
        if(vet[i].salario > maiorsalario){
            maiorsalario = vet[i].salario
        }
        if((vet[i].sexo == "F") && (vet[i].salario > 1000)){
            qtde++;
        }
    }
    alert("Média" + media/vet.length)
    alert("Filhos" + somafilhos/vet.length)
    alert("Maior Salario" + maiorsalario)
    alert("Percentual"  + qtde/3*100);
}