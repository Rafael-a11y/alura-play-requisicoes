export default function gerarMensagemDeErro(erro, elemento)
{
    const mensagem = document.createElement("h2");
    mensagem.innerText = erro.message;
    mensagem.classList.add("mensagem__titulo");
    elemento.innerHTML = "";
    elemento.appendChild(mensagem);
}
