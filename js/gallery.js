/* Name this external file gallery.js */

function upDate(previewPic) {
  // 1) Vérifier que l'événement se déclenche
  console.log("L'événement onmouseover s'est déclenché");

  // 2) Afficher des infos sur previewPic (alt et source)
  console.log(previewPic);
  console.log("Alt : " + previewPic.alt);
  console.log("Source : " + previewPic.src);

  // 3) Modifier le texte de la div #image avec le texte alt de l'image survolée
  document.getElementById("image").innerHTML = previewPic.alt;

  // 4) Modifier l'image d'arrière-plan de la div #image
  document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
  console.log("L'événement onmouseout s'est déclenché");

  // 1) Remettre l'image d'arrière-plan d'origine (celle du CSS : url(''))
  document.getElementById("image").style.backgroundImage = "url('')";

  // 2) Remettre le texte d'origine
  document.getElementById("image").innerHTML = "Hover over an image below to display here.";
}
