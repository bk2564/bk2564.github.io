function obtemValor(seletor) {
    const val = document.querySelector(seletor)
    let num = isNaN(parseFloat(val.value)) ? 0 : parseFloat(val.value)
    val.value = ""
    return num
}

function escreveValor(seletor, valor) {
    const nodeConteudo = document.createTextNode(valor)
    document.querySelector(seletor).textContent = ""
    document.querySelector(seletor).appendChild(nodeConteudo)
}

const btn01 = document.querySelector(".executa-01")

var vet = 

function soma(vet)
{
    let total = 0
    for(let i = 0; i < vet.length;++i)
    total += vet[i]
}

function somaImpares(vet)
{
    let total = 0
    for(let i = 0; i < vet.length; ++i)
    if(vet[i]%2!=0)
    total += vet[i]
}

function produto(vet)
{
    let total =1
    for(let i = 0; i < vet.length; ++i)
    total *= vet[i]
}

btn01.addEventListener("click", () => {

    escreveValor("#resp01", some(vet))
    escreveValor("#resp01_1", somaImpares(vet))
    escreveValor("resp01_2", prouduto(vet))
})


const btn02 = document.querySelector(".executa-02")

function primo(num1)
{
    let r ="", aux, primo = 0
    for(let num = 2; primo<num1; num++){
        var ctrl = 0;
        for(aux = 2; aux < num; aux++){
            if(num % aux == 0){
                ctrl++
                break
            }
        }
        if(ctrl == 0){
            r = r+num+", "
            primo++
        }
    }
    return r;
}


function primos(num1, num2)
{
    let txt ="", aux;
    for(let num = num1; num<num2; num++){
        var resultado = 0;
        for(aux = 2; aux < num; aux++){
            if(num % aux == 0){
                resultado++;
                break;
            }
        }
        if(resultado == 0){
            txt = txt+num+", ";
        }
    }
    return txt;
}

btn02.addEventListener("click", () => {

    let tes = document.querySelector("#q02_1").value
    tes = tes+","
    const arraytxt = tes.split(",", 2)

    const num1 = parseFloat(arraytxt[0])
    const num2 = parseFloat(arraytxt[1])


    if (arraytxt[1] == '')
       escreveValor("#resp02", primo(num1))
        else escreveValor("#resp02", primos(num1, num2))

    })


    const btn03 = document.querySelector(".executa-03")

    function romano(num1){
        let r = ""

        if(num1<3999){
            let num = [1,4,5,9,10,40,50,90,100,400,500,900,1000]
            let s = ["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M"]
            let i = 12
            while(num1>0){
                let div = num1/num[i]
                num1 = num1%num[i]

                while(div>=1){
                    r = r+s[i]
                    --div
                }
                --i
            }
        }
        return r
    }

    btn03.addEventListener("click", () => {
    
        const num1 = obtemValor("#q03")
    
        escreveValor("#resp03", romano(num1))
    })

    const btn04 = document.querySelector(".executa-04")

    function atm(num)
    {
        let valor = [0,0,0,0,0,0]
        let atm = [2,5,10,20,50,100]
        let i = 5;
        while(num>0)
        {let div = num/atm[i]
        num = num%atm[i]
        while(div>=1){
            ++valor[i]
            --div
        }
        --i
        }
        let txt = ""
        txt = `100: ${valor[5]} |\/| 50: ${valor[4]} |\/| 20: ${valor[3]} |\/| 10: ${valor[2]} |\/| 5: ${valor[1]} |\/| 2: ${valor[0]}`
        return txt    
    }

        btn04.addEventListener("click", () => {
    
            const num = obtemValor("#q04")
        
            escreveValor("#resp04", atm(num))
        })