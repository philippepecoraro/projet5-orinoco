let contenuPanier = JSON.parse(localStorage.getItem('produit'));
const produitPanier = document.getElementById("contenu-donnees");
    for (const panier of contenuPanier) {   
      produitPanier.innerHTML += `
      <article class="carteProduit">         
          <div class="libelle">
          <img class="imagePanier" src="${panier.image}" alt="photo de la caméra">
            <div class="libelle-nom">
              <div class="nomModele"><h2>Modèle:<br/> ${panier.nom}</h2></div>
              <div class="lentillesModele"><p>Objectif(s): ${panier.lentilles}</p></div>             
              <div class="descriptionModele"><p>Description: ${panier.description}</p></div>
              <div class="prixModele"><p>Prix: ${panier.prix}€</p></div>
              <div class="quantiteModele"><p>Quantité: ${panier.quantite}</p></div>
              <div class="prixTotal"><p>Prix total modèle(s) par quantité: <br/>${panier.prix * panier.quantite}€</p></div>
            </div>                            
          </div>          
      </article> `;
      console.log("panier: ", panier);  
      console.log("contenuPanier", contenuPanier); 
      //Calcul du prix total avec un accumulateur
      const reduced = contenuPanier
      .reduce((accumulateur, values) => accumulateur + (values.prix)*(values.quantite), 0);
      console.log(reduced);
      console.log(typeof reduced);
      const finalCheck = document.getElementById('prix-total-final');
      finalCheck.innerHTML =  'Prix total final:' + reduced + '€';
}  
 //Mise à zéro du panier
  let init = document.getElementById('boutonInit');
    init.addEventListener('click', function(e) {
      localStorage.clear();
      console.log("init");
      window.alert("Init panier, rafraichissez votre page");
})

  