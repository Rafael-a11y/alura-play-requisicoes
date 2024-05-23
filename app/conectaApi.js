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

async function postarVideo(titulo, descricao, url, imagem)
{
    try
    {
        const videoASerPostado = 
        {
            titulo: titulo,
            descricao: descricao,
            url: url,
            imagem: imagem
        };

        const options = 
        {
            method: "POST",
            headers: 
            {
                "Content-type": "application/json"
            },
            body : JSON.stringify(videoASerPostado)
        };

        const endpoint = "https://aluraplay-requisicoes-navy.vercel.app/db.json/";
        const conexao = await fetch(endpoint, options);
        const resposta = await conexao.json();
        return resposta;
    }
    catch(erro)
    {
        console.log("Erro ao tentar postar vídeo:",erro.message);
    }
}

export const conectaApi = { buscarVideos, postarVideo};