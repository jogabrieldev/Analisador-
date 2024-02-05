let number = document.getElementById('num')
let lista = document.getElementById('list')
let res = document.getElementById('res')
let val = []

function myNumber(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function myList(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}
function adicionar() {
    if (myNumber(number.value) && !myList(number.value, val)) {
        val.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''

    } else {
        alert('valor invalido ou ja encontrado na lista')
    }
    num.value = ''
    num.focus()
}
function finalizar() {
    if (val.length == 0) {
        alert('adicione valores antes de analisar')
    } else {
        let tot = val.length
        let maior = val[0]
        let menor = val[0]
        let soma = 0
        let media = 0
        for (let pos in val) {
            soma += val[pos]
            if (val[pos] > maior)
                maior = val[pos]
            if (val[pos] < menor)
                menor = val[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo , temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p> O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p> O menor valor informado foi ${menor}. </p> `
        res.innerHTML += `<p> Somando todos os valores , temos ${soma}. </p>`
        res.innerHTML += ` A média dos valores digitados é ${media}`
    }
}
