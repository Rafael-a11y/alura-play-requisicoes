const endpoint = "http://localhost:3000/videos";
const endpointComPersistenciaTemporaria = "https://apifake-phi.vercel.app/videos";

async function buscarVideos() 
{
    
    const resposta = await fetch(endpoint);
    if (resposta.ok) {
        const json = await resposta.json();
        return json;
    }
    else throw new Error("Não foi possível criar uma conexão com o servidor.");
}

async function postarVideo(video) {

    const options =
    {
        method: "POST",
        headers:
        {
            "Content-type": "application/json"
        },
        body: JSON.stringify(video)
    };

    const con = await fetch(endpoint, options);
    if (con.ok) {
        const resposta = await con.json();
        return resposta;
    }
    else 
    {
        throw new Error("Não foi possível estabelecer uma conexão com o servidor." +
        "\nPortanto, o vídeo não foi cadastrado.");
    }

}

async function pesquisarVideos(termoDeBusca) 
{
    const conexao = await fetch(`${endpoint}?q=${termoDeBusca}`);
    if (conexao.ok) 
    {
        const conexaoConvertida = await conexao.json();
        if(conexaoConvertida.length > 0) return conexaoConvertida;
        else throw new Error("Não possível achar o vídeo com o termo: " + termoDeBusca);
    }
    else 
    {
        throw new Error("Não foi possível estabelecer uma conexão com o servidor");
    }
}

export const conectaApi =
{
    buscarVideos, postarVideo, pesquisarVideos
};
