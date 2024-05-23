import { conectaApi } from "./conectaApi.js";
const formulario = document.querySelector("[data-formulario]");

async function criarVideo(evento)
{
    evento.preventDefault();
    const imagem = document.querySelector("[data-imagem]").value;
    const url = document.querySelector("[data-url]").value;
    const titulo = document.querySelector("[data-titulo]").value;
    const descricao = document.querySelector("[data-descricao]").value;

    const dadosDoVideo = 
    {
        imagem: imagem,
        url: url,
        titulo: titulo,
        descricao: descricao
    };

    const resposta = await conectaApi.postarVideo(titulo, descricao, url, imagem);
    alert(resposta);
    window.location.href = "../pages/envio-concluido.html";

}

formulario.addEventListener("submit", criarVideo);