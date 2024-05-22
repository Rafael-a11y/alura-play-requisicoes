async function buscarVideos() {
    try 
    {
        const endpoint = "https://aluraplay-requisicoes-navy.vercel.app/db.json/";
        const resposta = await fetch(endpoint);
        const json = await resposta.json();
        return json.videos;
    }
    catch(erro)
    {
        console.log(erro.message);
    }
}

export const conectaApi = { buscarVideos };