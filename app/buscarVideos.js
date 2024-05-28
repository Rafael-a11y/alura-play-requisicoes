import { conectaApi } from "./conectaApi.js";
import { exibirVideos } from "./mostrarVideos.js";
import construirCards from "./mostrarVideos.js";
import gerarMensagemDeErro from "./erro.js";

const barraPesquisa = document.querySelector("[data-pesquisa]");
const botaoPesquisa = document.querySelector("[data-botao-pesquisa]");
const lista = document.querySelector("[data-lista]");

async function pesquisar(e)
{
    e.preventDefault(); 
    const dadosDePesquisa =  document.querySelector("[data-pesquisa]").value;
    try
    {
        const arrayVideos = await conectaApi.pesquisarVideos(dadosDePesquisa);
    
        while(lista.firstChild) lista.removeChild(lista.firstChild);
        
        arrayVideos.forEach(video => 
        { 
            lista.appendChild(construirCards(video));
        });
    }
    catch(error)
    {
        gerarMensagemDeErro(error, lista);
    }
}

botaoPesquisa.addEventListener("click", pesquisar);
barraPesquisa.addEventListener("input", () => 
{
    console.log(barraPesquisa.value)
    if(barraPesquisa.value == "")
        {
            lista.innerHTML = "";
            exibirVideos.listarVideos();
            return;
        }
});
