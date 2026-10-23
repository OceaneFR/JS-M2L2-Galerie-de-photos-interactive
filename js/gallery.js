/* Name this external file gallery.js */

function upDate(previewPic) {
  // Vérification que l'événement se déclenche
  console.log("L'événement onmouseover s'est déclenché");

  // Affichage des infos sur previewPic (alt et source)
  console.log(previewPic);
  console.log("Alt : " + previewPic.alt);
  console.log("Source : " + previewPic.src);

  // Modification du texte de la div #image avec le texte alt de l'image survolée
  document.getElementById("image").innerHTML = previewPic.alt;

  // Modification de l'image d'arrière-plan de la div #image
  document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
  console.log("L'événement onmouseout s'est déclenché");

  // Fonction Annulation : l'image d'arrière-plan d'origine est remise
  document.getElementById("image").style.backgroundImage = "url('')";

  // Fonction Annulation : le texte d'origine est remis
  document.getElementById("image").innerHTML = "Hover over an image below to display here.";
}
