const descriptionProduit = document.getElementById("description");
const url = 'http://localhost:3000/api/cameras/';
const parsedUrl = new URL(window.location.href);
const urlProduit = parsedUrl.searchParams.get("id");
console.log(urlProduit);
async function getProduitsCamera() {
  try {
  const response = await fetch(url + urlProduit);
  //Si la réponse est différente de ok, on génére une exception
  if(!response.ok) {
    throw new Error(response.status);
  } else {
  const data = await response.json();
  return data;
  }
}catch (error) {
    console.error(error);
  }  
}        
getProduitsCamera()
.then(data => {   
    descriptionProduit.innerHTML +=
       `<div class="cameraDetail">
            <img class="imageProduit" width= "800" src="${data.imageUrl}" alt="photo du produit">
              <h3 class="cameraNameProduit">Modèle: ${data.name}</h3>
                <p><strong>Prix: ${data.price/100}€</strong></p>
                <p>Description: ${data.description}</p>             
              <div class="choixOptions"></div>
                <div class="choixNbProduits">       
                </div>
              </div>      
        </div>`; 
       const select = document.getElementById("choix-objectifs");

      for(let i = 0; i < data.lenses.length; i++) {
          var opt = data.lenses[i];
          select.innerHTML += 
          "<option value=\"" + opt + "\">" + opt + "</option>" ;  
          }              

    const ajouterProduit = document.getElementById('boutonAjouter');
    ajouterProduit.addEventListener('click', function(event) {
      //On crée l'objet cameraProduit
      let cameraProduit = {
        id: data._id,
        nom: data.name,
        image: data.imageUrl,
        prix: data.price/100,
        description: data.description,
        lentilles: data.lenses,
      };
      console.log(cameraProduit); 
       if(typeof localStorage!='undefined') {             
            const monobjet_json = localStorage.getItem('produit');
            let produit;
            if(monobjet_json!=null) {
              window.alert("Produit ajouté au panier");
                //renvoie sous forme d'objet
              produit = JSON.parse(monobjet_json);
              console.log(produit);
            } else {
              window.alert("Premier ajout au panier");
              produit = [];
             console.log(produit);
            }            
             produit.push(cameraProduit);
             console.log("localStorage: " + produit);
              //on insère le produit et ontransforme en chaine de texte            
            localStorage.setItem('produit', JSON.stringify(produit));
            console.log("stringify " + produit ); 
          } else {
            window.alert("localStorage n'est pas supporté");
          }
  })               
})
