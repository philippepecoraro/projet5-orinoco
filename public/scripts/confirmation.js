const contenuOrder = JSON.parse(localStorage.getItem("orderFinal"));
const textOrder = document.getElementById("resultatOrder");
textOrder.innerHTML += `<h2>Récapitulatif de votre commande</h2>
    <div class="recapitulatif">
        <div class="identifiant">
            <p><strong>Identifiant de commande:</strong><br/>
            ${contenuOrder.productOrderId}</p>
        </div>
        <div class="cout">
           <p><strong>Le coût total de votre commande:</strong><br/>
           ${contenuOrder.productOrderTotalCoast} €</p>
        </div>
    </div>
    <div class="remerciements">
        <p>Orinoco vous remercie de votre commande</p>
    </div>`;
