let valeur =Number(prompt("Veuillez entrer une valeur : "));
function sommeIterative(n){
    let somme=0
    for(let i=1;i<=n;i++){
       somme+=i;
    }
    return somme;
}
function sommeRecursive(n){
    if(n==1)
        return 1;
    else{
        return sommeRecursive(n-1)+n;
    }
}
console.log("La somme en utilisant boucle :",sommeIterative(valeur));
console.log("La somme en utilisant la recursivite :",sommeRecursive(valeur));
//1. la version iterative est plus lisible comme code
//2. la version iterative est plus performante
//3. La recurtion peut poser des problemes a cause de stack overflow depassement de la pile d'appels 
//4. Utiliser une boucle quand on traite de grands volumes ,on recherche performance et fiabilite,on veut eviter le stack overflow.

