const apiTransacao = [
    {
        "descricao": "Salário",
        "valor": 800.00,
        "data": "2021-07-22",
        "tipo": "entradas"
    },
    {
        "descricao": "Mercado",
        "valor": 150.00,
        "data": "2021-07-22",
        "tipo": "saida"
    }
]

let entradas = 0
let saidas = 0
let tipo
let tabela = document.querySelector('#tabela-transacao')

function adicionarDados(descricao, valor, data, classe){
    let tr = document.createElement('tr')
    tr.classList.add(classe)
    let th = document.createElement('th')
    let tdValor = document.createElement('td')
    let tdData = document.createElement('td')
    let tdButton = document.createElement('td')

    tr.appendChild(th).innerHTML = descricao
    tr.appendChild(tdValor).innerHTML = "R$ " + valor.toFixed(2)
    tr.appendChild(tdData).innerHTML = data
    tr.appendChild(tdButton).innerHTML = "<button type='button' class='btn btn-outline-dark'>-</button> </td> </tr>"

    tabela.appendChild(tr)
}

function novaTransacao(event){
    event.preventDefault();
    let form = event.target
    let descricao = form.querySelector('#description').value
    let valor = parseFloat(form.querySelector('#value').value)
    let data = form.querySelector('#date').value
    let tipo
    let classe

    if(valor > 0){
        tipo = "entradas"
        classe = "table-success"
    } else {
        tipo = "saidas"
        valor = Math.abs(valor)
        classe = "table-danger"
    }

    let novaTransacao = {
        "descricao": descricao,
        "valor": valor,
        "data": data,
        "tipo": tipo
    }

    apiTransacao.push(novaTransacao)

    adicionarDados(descricao, valor, data, classe)
}

for(let i = 0; i < apiTransacao.length; i++){
    if(apiTransacao[i].tipo === "entradas"){
        entradas = entradas + apiTransacao[i].valor
        tipo = "table-success"
    } else {
        saidas = saidas + apiTransacao[i].valor
        tipo = "table-danger"
    }

    adicionarDados(apiTransacao[i].descricao, apiTransacao[i].valor, apiTransacao[i].data, tipo)
}

let saldo = entradas - saidas

document.querySelector('#entradas').innerHTML += entradas.toFixed(2)
document.querySelector('#saidas').innerHTML += saidas.toFixed(2)
document.querySelector('#total').innerHTML += saldo.toFixed(2)