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
    //calcula média

}