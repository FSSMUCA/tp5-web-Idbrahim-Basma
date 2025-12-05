function factorielle(n){
    if(n==0){
        return 1;
    }else{
        return n * factorielle(n - 1);
    }
}
let valeur =Number(prompt("Veuillez entrer une valeur : "));
console.log("Le factorielle de ",valeur,"est ",factorielle(valeur));