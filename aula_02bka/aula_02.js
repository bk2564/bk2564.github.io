const btn01 = document.querySelector("#q01-executar")
const btn02 = document.querySelector("#q02-executar")
const btn03 = document.querySelector("#q03-executar")
const btn04 = document.querySelector("#q04-executar")
const btn05 = document.querySelector("#q05-executar")

/*****************************************
 * QUESTÃO 01
 */

/**
 * Função que retorna a quantidade de dinheiro digitada pelo usuário
 */
const getDinheiro = () => parseFloat(document.querySelector("#q01-dinheiro").value) || 0

/**
 * Função que calcula a quantidade de combustivel comprada
 * @param dinheiro
 * @return litros
 * obs: cada litro custa 7 reais para o exemplo
 * o valor inicial é só para testes
 */
const calcLitrosCombustivel = dinheiro => {
    let litros = dinheiro / 7
    return litros
}

/**
 * função que retorna a quantidade de km que o carro conseguirá percorrer
 * @param litros - quantidade de litros comprados
 * @return km - de autonomia do carro
 */
const calcAutonomia = litros => {
    return litros * 20
}

const respondeQuestao01 = (litros, autonomia) => {
    const listaResp = document.querySelector("#q01-result")
    const liResp = `<li>Você abastecerá ${litros}l</li>
                    <li>Sua autonomia é de ${autonomia}km</li>`
    listaResp.innerHTML = liResp
}

btn01.addEventListener("click", () => {
    const dinheiro = getDinheiro()
    const litros = calcLitrosCombustivel(dinheiro)
    const autonomia = calcAutonomia(litros)

    respondeQuestao01(litros, autonomia)
})

/*****************************************
 * QUESTÃO 02
 */


const respondeQuestao02 = (imc, faixa) => {
    const listaResp = document.querySelector("#q02-result")
    const liResp = `<li>Seu IMC é ${imc}</li>
                    <li>Você está na faixa: ${faixa}</li>`
    listaResp.innerHTML = liResp
    
}
/**
 * Função que retorna o PESO digitado pelo usuário
 */
const getPeso = () => parseFloat(document.querySelector("#q02-peso").value) || 0


/**
 * Função que retorna a ALTURA digitada pelo usuário
 */
const getAltura = () => parseFloat(document.querySelector("#q02-altura").value) || 0 

    // implemente a função 


const calcIMC = (peso, altura) => {
    return peso/(altura**2)
}

const getFaixa = (imc) => {
    if (imc<18.5) return "Abaixo do peso"
    if (imc>=18.5 && imc<25) return "Peso normal"
    if (imc>=25 && imc<30) return "Levemente acima do peso"
    if (imc>=30 && imc<35) return "Obesidade grau I"
    if (imc>=35 && imc<40) return "Obesidade grau II (severa)"
    return "Obesidade grau III (mórbida)"
}

btn02.addEventListener("click", () => {
    const altura = getAltura()
    const peso = getPeso()
    const imc = calcIMC(peso, altura)

    respondeQuestao02(imc,getFaixa(imc))
})

/*****************************************
 * QUESTÃO 03
 */

const lancadorDados = () => Math.ceil(Math.random()*6)

const respondeQuestao03 = (seletor, lances) => {
    const listaResp = document.querySelector(seletor)
    const liResp = `${lances}`
    listaResp.innerHTML = liResp
    
}

const respondeQuestao03Frequencia = (seletor, frequencia) => {
    const listaResp = document.querySelector(seletor)
    const liResp = `${frequencia}%`
    listaResp.innerHTML = liResp
    
}

const descobreFrequencia = x => {
     return (Math.round(x/100)/100)   
} 

btn03.addEventListener("click", () => {
    let lances = [0,0,0,0,0,0] //6 faces do dado 
    let y   
    for(let i=0; i<1000000; i=i+1){
    y = lancadorDados()
    ++lances[y - 1] 
    }
    
    let x = 0
    respondeQuestao03(".face-ocorr-1", lances[x])
    respondeQuestao03Frequencia(".face-freq-1", descobreFrequencia(lances[x]))
   
    x = 1  
    respondeQuestao03(".face-ocorr-2", lances[x])
    respondeQuestao03Frequencia(".face-freq-2", descobreFrequencia(lances[x]))
    
    x = 2
    respondeQuestao03(".face-ocorr-3", lances[x])
    respondeQuestao03Frequencia(".face-freq-3", descobreFrequencia(lances[x]))
    
    x = 3
    respondeQuestao03(".face-ocorr-4", lances[x])
    respondeQuestao03Frequencia(".face-freq-4", descobreFrequencia(lances[x]))  
    
    x = 4
    respondeQuestao03(".face-ocorr-5", lances[x])
    respondeQuestao03Frequencia(".face-freq-5", descobreFrequencia(lances[x]))
    x = 5
    respondeQuestao03(".face-ocorr-6", lances[x])
    respondeQuestao03Frequencia(".face-freq-6", descobreFrequencia(lances[x])) 

})
    
        //contabilize os lances
    //}
    // a frequencia é total de #face/total de lancamentos
    
    //atualize a tabela com seus valores


/*****************************************
 * QUESTÃO 04
 */
const btnAddNome = document.querySelector("#q04-add")

//funcao que retorna o nome digitado
const getNome = () => document.querySelector("#q04-nome").value

const insereNome = nome => {
    const listaNomes = document.querySelector("#q04-nomes")
    //inserir nomes em listaNomes
}

const inverteNome = nome => {
    
    var teste = getNome(nome).split("")
    teste = teste.reverse()
    teste = teste.join("")
    return teste
}

// insere nome digitado
btnAddNome.addEventListener("click", () => {
    const listaNomes = document.querySelector("#q04-nomes")
    if(getNome())
        listaNomes.innerHTML += `<li>${getNome()}</li>`
})

btn04.addEventListener("click", ()=>{
    const liNomesDigitados = document.querySelectorAll("#q04-nomes")
    const listaInvertido = document.querySelector("#q04-nomes-invertidos")

    //para cada li de liNomesDigitados, inverta e insira em listaInvertido
    for (let i=0; i<liNomesDigitados.length; i++) {
        const nome = liNomesDigitados[i].textContent
        const nomeInvertido = inverteNome(nome)
        listaInvertido.innerHTML += `<li>${nomeInvertido}</li>`
    }
})

/*****************************************
 * QUESTÃO 05
 */
//funcao que retorna o nome digitado
const getPalavra = () => document.querySelector("#q05-palavra").value

const verificaPalindromo = (palavra) => {
    var x;
    for(let i=0;i<palavra.length/2;++i)
    {
        if(palavra[i] == palavra[palavra.length - (i + 1)])
        x = true
        else {
            x = false
            i = palavra.length
        }
        return x;
    }
}
btn05.addEventListener("click", () => {
    const palavra = getPalavra()
    const resp = document.querySelector("#q05-result")
    if(palavra)
        resp.innerHTML = `A palavra ${palavra} 
            ${(verificaPalindromo(palavra))?"é":"não é"} 
            um palíndromo`
})