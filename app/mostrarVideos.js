import { conectaApi } from "./conectaApi.js";
import gerarMensagemDeErro from "./erro.js";

const lista = document.querySelector("[data-lista]");

export default function construirCards(video) {
    const listItem = document.createElement("li");
    listItem.classList.add("videos__item");
    listItem.innerHTML =
        `<iframe width="100%" height="72%" src="${video.url}"
        title="${video.titulo}" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
    <div class="descricao-video">
        <img src="${video.imagem}" alt="logo canal alura">
        <h3>${video.titulo}</h3>
        <p>${video.descricao}</p>
    </div>`;

    return listItem;
}

async function listarVideos() 
{
    try
     {
        const videosDaApi = await conectaApi.buscarVideos();
        videosDaApi.forEach(video => {
            lista.appendChild(construirCards(video));
        });
    }
    catch(erro)
    {
        gerarMensagemDeErro(erro, lista);
    }
}

listarVideos();

export const exibirVideos = { listarVideos };