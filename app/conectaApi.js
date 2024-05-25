const endpoint = "https://aluraplay-requisicoes-navy.vercel.app/db.json/";

async function buscarVideos() {
    try 
    {
        const resposta = await fetch(endpoint);
        if(conexao.ok)
        {
            const json = await resposta.json();
            return json.videos;
        }
    }
    catch(erro)
    {
        console.log(erro.message);
    }
}

async function postarVideo(video)
{
    try
    {
        const options = 
        {
            method: "POST",
            headers: 
            {
                "Content-type": "application/json"
            },
            body : JSON.stringify(video)
        };

        const conexao = await fetch(endpoint, options);
        if(conexao.ok)
            {
                const resposta = await conexao.json();
                return resposta;
            }
    }
    catch(erro)
    {
        console.log("Erro ao tentar postar vídeo:",erro.message);
    }
}

export const conectaApi = { buscarVideos, postarVideo};