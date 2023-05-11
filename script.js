function trocarImagem() {
  var imagem = document.getElementById("principal");
  if (imagem.src.match("logo.png")) {
    imagem.src = "code.png";
  } else {
    imagem.src = "logo.png";
  }
}
