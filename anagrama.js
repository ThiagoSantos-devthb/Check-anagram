var s = "rota";
var r = "ator"





if(isAnagrama(s , r)){
    console.log("igual")
}else{
    console.log("diferente")

}

function isAnagrama( a , b){
    let s1 = a.split("").sort();
    let s2 = b.split("").sort();

    console.log(s1)
    console.log(s2)
    
    return (JSON.stringify(s1) === JSON.stringify(s2))

}