let contenuPanier = JSON.parse(localStorage.getItem('produit'));
const produitPanier = document.getElementById("contenu-donnees");
    for (const panier of contenuPanier) {   
      produitPanier.innerHTML += `
      <article class="productcart">         
          <div class="libelle">
          <img class="productimage" src="${panier.image}" alt="photo de la caméra">
            <div class="libelle-name">
              <div class="nameModele"><h2>Modèle:<br/> ${panier.nom}</h2></div>
              <div class="lensesModele"><p>Objectif(s): ${panier.lentilles}</p></div>             
              <div class="descriptionModele"><p>Description: ${panier.description}</p></div>
              <div class="priceModele"><p>Prix: ${panier.prix}€</p></div>
            </div>                            
          </div>          
      </article> `;
      console.log("panier: ", panier);     
      console.log("contenuPanier", contenuPanier);  

}  
 //Mise à zéro du panier
  let init = document.getElementById('boutonInit');
  init.addEventListener('click', function(e) {
      localStorage.clear();
      console.log("init");
      window.alert("Init panier, rafraichissez votre page");    
  })

  