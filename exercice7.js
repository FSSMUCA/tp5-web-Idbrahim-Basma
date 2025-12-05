function verifierMotDePasse(mdp){
    return mdp.length>=8 && mdp.includes("@");
}
let mdp=prompt("Entrer un mot de passe :");
if(verifierMotDePasse(mdp)){
    console.log("Mot de passe valide");
}else{
    console.log("Mot de passe non valide");
}