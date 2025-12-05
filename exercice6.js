let SommePairs=0;
let SommeImpairs=0;
for(let i=1;i<=50;i++){
    if(i%2==0){
        SommePairs+=i;
    }else{
        SommeImpairs+=i;
    }
}
console.log("Somme des pairs :",SommePairs);
console.log("Somme des impairs :",SommeImpairs);