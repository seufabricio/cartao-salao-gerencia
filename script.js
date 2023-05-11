function trocarImagem() {
  var imagem = document.getElementById("principal");
  if (imagem.src.match("logo.png")) {
    imagem.src = "code.jpg";
  } else {
    imagem.src = "logo.png";
  }
}
