const botao1 = document.querySelector(".executa01")


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

    const somar = (num1, num2) => num1 + num2

botao1.addEventListener("click", () => {
    
    const num1 = obtemValor("#quest1-v1")
    const num2 = obtemValor("#quest1-v2")

    escreveValor("#resp01", somar(num1, num2))
})


const botao2 = document.querySelector(".executa02")

const identificaMaiorNum = (num1, num2) => {
    let resp = ""
    if(num1>num2){
        resp = `O número ${num1} é maior que o número ${num2}`
    }
    else if (num2>num1){
        resp = `O número ${num2} é maior que o número ${num1}`
    }
    else {
        resp = `Os números são iguais`
    }
    return resp
}


botao2.addEventListener("click", () => {
    const num1 = obtemValor("#quest2-v1")
    const num2 = obtemValor("#quest2-v2")

    
    escreveValor("#resp02", identificaMaiorNum(num1, num2))
})
    

    const botao3 = document.querySelector(".executa03")
    
    const identificaPrimo = (num1) => {
        let primo = 0, aux, resp
        for(aux = 2;aux < num1; ++aux)
        {
            if (num1 % aux == 0)
            {
            ++primo
            aux = num1
            }    
        }
        
        if (primo == 0) {
        resp = `O número ${num1} é primo`
        }
        else {
            resp = `O número ${num1} não é primo`
        }
        return resp
    }



botao3.addEventListener("click", () => {
    const num1 = obtemValor("#quest3-v1")

    escreveValor("#resp03", identificaPrimo(num1))
})


const botao4 = document.querySelector(".executa04")

    const calculaHipotenusa = (num1,num2) => {
        
        let hipo = Math.sqrt(Math.pow(num1, 2) + Math.pow(num2, 2))
        return hipo
    }

botao4.addEventListener("click", () => {
    const num1 = obtemValor("#quest4-v1")
    const num2 = obtemValor("#quest4-v2")
    
    escreveValor("#resp04", calculaHipotenusa(num1, num2))
})


const botao5 = document.querySelector(".executa05")

const calculaReajuste = (num1, num2) => {
        let reaj = num1 + (num1 * num2/100)
        return reaj
}


botao5.addEventListener("click", () => {
    const num1 = obtemValor("#quest5-v1")
    const num2 = obtemValor("#quest5-v2")
    
    escreveValor("#resp05", calculaReajuste(num1, num2))
})


const botao6 = document.querySelector(".executa06")


const calculaValorCarro = (num1) => {
    let valor = num1 + (num1 * ((28 + 45)/100))
    return valor
}


botao6.addEventListener("click", () => {
    const num1 = obtemValor("#quest6-v1")

    escreveValor("#resp06", calculaValorCarro(num1))
})

const botao7 = document.querySelector(".executa07")

const calculaSalarioTotal = (num1, num2, num3, num4) => {
    let sal = num3 + (num1 * num4) + (0.05 * num2)
    return sal
}


botao7.addEventListener("click", () => {
    const num1 = obtemValor("#quest7-v1")
    const num2 = obtemValor("#quest7-v2")
    const num3 = obtemValor("#quest7-v3")
    const num4 = obtemValor("#quest7-v4")

    escreveValor("#resp07", calculaSalarioTotal(num1, num2, num3, num4))
})

const botao8 = document.querySelector(".executa08")

const fahCel = (num1) => {
    let cel = ((num1 - 32) * 5) / 9
    return cel
}

botao8.addEventListener("click", () => {
    const num1 = obtemValor("#quest8-v1")

    escreveValor("#resp08", fahCel(num1))
})

const botao9 = document.querySelector(".executa09")

const calculaMedia = (num1, num2, num3) => {
    let media = ((2 * num1) + (3 * num2) + (5 * num3))/10
    return media
}

botao9.addEventListener("click", () => {
    const num1 = obtemValor("#quest9-v1")
    const num2 = obtemValor("#quest9-v2")
    const num3 = obtemValor("#quest9-v3")

    escreveValor("#resp09", calculaMedia(num1, num2, num3))
})

const botao10 = document.querySelector(".executa10")

    const valorMacas = (num1) => {
        let total, unidade
        if (num1 < 12){
            unidade = 1.30
        }
        else unidade = 1

        total = num1 * unidade
        return total
    }


botao10.addEventListener("click", () => {
    const num1 = obtemValor("#quest10-v1")

    escreveValor("#resp10", valorMacas(num1))
})