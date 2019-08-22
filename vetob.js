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