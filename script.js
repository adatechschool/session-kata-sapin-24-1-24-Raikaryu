function afficherEtoile(n){
    let ligne = '';
    for(i=0; i<n; i++){
        ligne += '*';
    }
    return ligne
}

// function afficherRectangle(height, width){
//     for (j=0; j<height; j++){
//         afficherEtoile(width)
//     }
// }

// afficherRectangle(5,5)

// function afficherTriangleDroit(n){
//    affiche le premier backslash sans étoile
//     console.log('\\');
//    ajoute ensuite les étoiles et les backslash pour les étages suivant, incrémente aussi de une étoile à chaque fois
//     for (j=1; j<n; j++){
//         console.log(afficherEtoile(j) + '\\');
//     }
    
// }

// afficherTriangleDroit(4)

// function afficherTriangleGauche(n) {
//     for (let k = 1; k <= n; k++) {
//      
//         Créer des espaces pour pouvoir parti de la droite et revenir vers la gauche à chaque fois que la boucle se fait
//         let espaces = ' '.repeat(n - k); 
//         if (k === 1) {
//             console.log(espaces + '/'); 
//         } else {
//             retire un espace au en ajoutant un étoile
//             console.log(espaces + '/' + afficherEtoile(k - 1)); 
//         }
//     }
// }

// afficherTriangleGauche(4);

function afficherPointeSapin(n){
  console.log(' '.repeat(n-1)+' +')
  for (j=1; j<=n; j++){
    let espaces = ' '.repeat(n - j);
    let gauche = '/' + afficherEtoile(j - 1)
    let droite = afficherEtoile(j-1) + '\\'
    console.log(espaces + gauche + '|' + droite)
  }
}

afficherPointeSapin(4)