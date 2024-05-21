async function buscarVideos()
{
    const endpoint = "https://aluraplay-requisicoes-navy.vercel.app/db.json/";
    const resposta = await fetch(endpoint);
    const videos =  await resposta.json();
    return videos.videos;
}

export const conectaApi = {buscarVideos};