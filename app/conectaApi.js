const endpoint = "https://apifake-phi.vercel.app/videos";

async function buscarVideos() {
    try 
    {
        const resposta = await fetch(endpoint);
        if(resposta.ok)
        {
            const json = await resposta.json();
            return json;
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

        const con= await fetch(endpoint, options);
        if(con.ok)
            {
                const resposta = await con.json();
                return resposta;
            }
    }
    catch(erro)
    {
        console.log("Erro ao tentar postar vídeo:",erro.message);
    }
}

export const conectaApi = { buscarVideos, postarVideo};