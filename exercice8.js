function totalAvecRemise(total, remise){
    let totalFinal=0;
    return totalFinal = total - (total * remise / 100);
}
let total_HT=Number(prompt("Entrer le total HT :"));
let remise=Number(prompt("Entrer la remise (%):"));
console.log("Le total final :",totalAvecRemise(total_HT,remise));

