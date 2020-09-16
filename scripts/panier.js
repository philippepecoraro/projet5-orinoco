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
              <div class="prixModele"><p><strong>Prix: ${panier.prix}€</strong></p></div>
              <div class="quantiteModele"><p>Quantité: ${panier.quantite}</p></div>
              <div class="prixTotal"><p><strong>Prix total modèle(s) par quantité: <br/>${panier.prix * panier.quantite}€</strong></p></div>
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
      finalCheck.innerHTML = `<p><strong>Prix total final: ${reduced}€</strong></p>`;

         
    //On récupère les données du formulaire lors du click sur le bouton
    const ajouterContact = document.getElementById('formulaire');
    ajouterContact.addEventListener('submit', function(event) {
      event.preventDefault();
      let firstName = document.getElementById('prenom').value;
     // console.log(firstName);
      let lastName = document.getElementById('nom').value;
      let address = document.getElementById('adresse').value;
      let city = document.getElementById('ville').value;
      let email = document.getElementById('email').value;    
     let contact = {
       firstName: firstName,
       lastName: lastName,
       adress: address,
       city: city,
       email: email,
     };
      console.log(contact);
    //  console.log(typeof contact);
    //  console.log(Array.isArray(contact));
      //On crée un tableau de products
      const products = [];
      //On ajoute dans le tableau
      contenuPanier.forEach(panier => {
        products.push(panier.id);
    })
      console.log(products);
      console.log(typeof products);
      console.log(Array.isArray(products));

       async function postContactProduct() {
            let response = await fetch("http://localhost:3000/api/cameras/order" , {
            method: 'POST',
            body:{contact},
            headers: new Headers({ 'Content-Type': 'application/json'}),  
        
       });       
        if(response.ok) {
          let responseData = await response.json();
      //    console.log(responseData);
        } else {
        console.error("Status: " + response.status);
        }
    }  
    postContactProduct();      
  });
} 
 //Mise à zéro du panier
  let init = document.getElementById('boutonInit');
    init.addEventListener('click', function(e) {
      localStorage.clear();
      console.log("init");
      window.alert("Init panier, rafraichissez votre page");
})

  