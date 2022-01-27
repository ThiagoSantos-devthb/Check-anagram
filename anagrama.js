var s = ""
var r = ""

var anagrama =[]
var notAnagrama = []
var arrayOrden = []
var uniqueArray = []
var arrayjoin = []

var listString = ["thiago", "amor", "roma", "escada ", "mora", "gato", "cachorro"]

var teste = ["g","a","t", "o"]
var unido = teste.join("")


arrayAnagram(listString)

// uniqueArray = arrayOrden.filter(function(elem, pos, self) {
//    console.log(arrayOrden.indexOf(elem ))
//     return self.indexOf(elem) == pos;

// })


function arrayAnagram(arr){
    for(let i =0; i < arr.length; i++){

        

        let strings =arr[i].split("").sort()
       
     
        let word = strings.join("")
        

         arrayOrden.push(word)
       

    }
}

function isAnagrama( a , b){
    let s1 = a.split("").sort();
    let s2 = b.split("").sort();

    
    return (JSON.stringify(s1) === JSON.stringify(s2))

}
console.log(arrayOrden)
console.log(listString)
//console.log(uniqueArray)
//onsole.log(uniqueArray)
    
function joinEindex(arr1 , arr2){
    return
}

var repeated = [];

var aux = arrayOrden.filter(function(elemento , i ) {
    let indexElemento = 0
  
    //console.log("o index é " + arrayOrden.indexOf(elemento))
    if(arrayOrden.indexOf(elemento ) !== i ) {
        indexElemento = (arrayOrden.indexOf(elemento ))
      
        //console.log(arrayOrden.indexOf(elemento ))
       // console.log(arrayOrden[i ])
      // console.log(elemento)
      repeated.push(listString[indexElemento])
       repeated.push(listString[i])
        
    }
   
    return arrayOrden.indexOf(elemento) == i;
   
})
console.log(repeated)


uniqueArray = repeated.filter(function(elem, pos, self) {
   
    return self.indexOf(elem) == pos;

})
console.log(uniqueArray) // array anagrama

// adiciona o elemento , depois faz um filter e limpa as repetidas

// if elemento index 0 possui na array lista, remove lista[index do elemento]
//se o elemnto de um array for igual ao outro, nao adiciona, mas se for diferente adiciona em um novo array


listString.filter(function(element) {
    if (uniqueArray.indexOf(element) === -1) {   // se for encontrado um valor nos dois arrays
      notAnagrama.push(element)
    }
  });
  console.log(notAnagrama)