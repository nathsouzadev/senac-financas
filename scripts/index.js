const apiTransacao = [
    {
        "descricao": "Salário",
        "valor": 800,
        "data": "13/07/2020",
        "tipo": "entradas"
    },
    {
        "descricao": "Mercado",
        "valor": 150,
        "data": "14/07/2020",
        "tipo": "saida"
    },
    {
        "descricao": "Mouse",
        "valor": 50,
        "data": "20/07/2020",
        "tipo": "saida"
    },
    {
        "descricao": "Freela",
        "valor": 300,
        "data": "21/07/2020",
        "tipo": "entradas"
    },
    {
        "descricao": "Jantar",
        "valor": 150,
        "data": "20/07/2020",
        "tipo": "saida"
    }
]

let entradas = 0
let saidas = 0
let tipo
let tabela = document.querySelector('#tabela-transacao')

for(let i = 0; i < apiTransacao.length; i++){
    if(apiTransacao[i].tipo === "entradas"){
        entradas = entradas + apiTransacao[i].valor
        tipo = "success"
    } else {
        saidas = saidas + apiTransacao[i].valor
        tipo = "danger"
    }

    tabela.innerHTML += "<tr class='table-" + tipo + "'> <th>" + apiTransacao[i].descricao + "</th> <td> R$ " + apiTransacao[i].valor.toFixed(2) + "</td> <td>" + apiTransacao[i].data + "</td> <td> <button type='button' class='btn btn-outline-danger'>-</button> </td> </tr>"
}

let saldo = entradas - saidas

document.querySelector('#entradas').innerHTML += entradas.toFixed(2)
document.querySelector('#saidas').innerHTML += saidas.toFixed(2)
document.querySelector('#total').innerHTML += saldo.toFixed(2)

function soma(event){
    event.preventDefault();
    let form = event.target
    let descricao = form.querySelector('input#description').value
    console.log(descricao)
}
