import { conectaApi } from "./conectaApi.js";
const formulario = document.querySelector("[data-formulario]");
const falsy = [NaN, undefined, 0, -0, "", null, false];


async function criarVideo(evento)
{
    evento.preventDefault();
    const imagem = document.querySelector("[data-imagem]").value;
    const url = document.querySelector("[data-url]").value;
    const titulo = document.querySelector("[data-titulo]").value;
    const descricao = document.querySelector("[data-descricao]").value;

    const dadosDoVideo = 
    {
        titulo: titulo,
        descricao: descricao,
        url: url,
        imagem: imagem
    };

    const resposta = await conectaApi.postarVideo(dadosDoVideo);
    if(falsy.every(valorIndesejado => valorIndesejado != resposta))
    {
        window.location.href = "../pages/envio-concluido.html";
    }

}

formulario.addEventListener("submit", criarVideo);