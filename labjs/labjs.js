const obtemValor = (seletor) => {
    const val = document.querySelector(seletor)
    let num = isNaN(parseFloat(val.value))? 0:parseFloat(val.value)
    val.value = ""
    return num
}

const escreveValor = (seletor, valor) => {
    const nodeConteudo = document.createTextNode(valor)
    document.querySelector(seletor).textContent = ""
    document.querySelector(seletor).appendChild(nodeConteudo)
}

const botao1 = document.querySelector(".ex01")

const fatorial = (num1) =>{
    let soma = 0
    if (num1 > 0){
    soma = soma + num1*fatorial(num1 - 1) 
    }
    else soma = 1
    return soma
}

botao1.addEventListener("click", () => {
    const num1 = obtemValor("#quest1-v1")

    escreveValor("#r01", fatorial(num1))
})

const botao2 = document.querySelector(".ex02")

const pot04 = () => {
    
    let x = 1, pot, res = "As 30 primeiras potências de 4 são: "
    while (x <= 30){
    pot = Math.pow(4, x)
    if (x == 30){
    res = res + `${pot}.`
    }
    else res = res + `${pot}, `
    ++x
    }
    return res     
}

botao2.addEventListener("click", () => {
    escreveValor("#r02", pot04())
})


const botao3 = document.querySelector(".ex03")

    const somaPares = () => {
        let soma = 0, x
        for(x = 2; x <= 1000; x = x + 2){
        soma = soma + x
        }
        return soma
    }

botao3.addEventListener("click", () => {
    escreveValor("#r03", somaPares())
})

const botao4 = document.querySelector(".ex04")

    const fibo = () => {
        let x = 1, y = 2, z = 1, seq = "Os números da sequência de Fibonacci são: "
        while(z <= 100){
        if (z == 100){
        seq = seq + `${x}, ${y}.`    
        } 
        else seq = seq + `${x}, ${y}, `
        x = x + y
        y = y + x
        ++z
        }
        return seq
    }

botao4.addEventListener("click", () => {
    escreveValor("#r04", fibo())
})


const botao5 = document.querySelector(".ex05")

const primos1000 = () => {
    let x = 2, aux = 2, primo = 0, r = "Os números primos de 2 a 1000 são: "
    
    while (x <= 1000){
        for(aux = 2; aux < x; ++aux){
            if(x % aux == 0)
            {
                ++primo
                aux = x
            }
        }
            if (primo == 0){
            if (x == 997){
                r = r + `${x}.`
            }
            else r = r + `${x}, `
        }
         ++x
         primo = 0
    }
    return r
}

botao5.addEventListener("click", () => {
    escreveValor("#r05", primos1000())
})