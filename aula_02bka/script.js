let catalogo = document.querySelector('#catalogo')

let criaPassos = titulo => 
    titulo.reduce(
        (lista,passo) => lista + `<li>${passo}</li>`
        , "")




let catFilmesCria = (filme) => {
    let filmeDiv = document.createElement("div")
    filmeDiv.classList.add("filme")

    let faixa = filme.classificacao 

    filmeDiv.innerHTML += ` <h2>${filme.titulo}</h2>
    <img src="${filme.figura}" 
    alt="${filme.titulo}">
                    <h3>Descrição</h3>
                    <p>${filme.resumo}</p>
                    <div>
                        <div>
                            <h3>Faixa Etária</h3>
                            <p>${faixa}</p>
                        </div>
                        
                        <div>
                        <h3>Títulos Semelhantes</h3>
                        <p>${criaPassos(filme.titulosSemelhantes)}</p>
                    </div>

                    <div>
                        <h3>Nota</h3>
                        <p>${filme.rating}</p>
                    </div>
                    
                        </div>`
    return filmeDiv
}

filmes.forEach(filme => {
    catalogo.appendChild(catFilmesCria(filme))
})
console.log(filmes);

