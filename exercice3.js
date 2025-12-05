let n=Number(prompt("Veuillez entrer un nombre :"));
if(n<0){
    console.log("Nombre negetif");
}else{
    if(n<=10){
        console.log("Petit");
    }else{
        if(n<=50){
            console.log("Moyen");
        }else{
            if(n<=100){
                console.log("Grand");
            }else{
                console.log("Tres grand");
            }
        }
    }
}