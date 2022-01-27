
var anagrama =[]
var notAnagrama = []
var arrayOrden = []

var listString = ["thiago", "amor", "roma", "escada ", "mora", "gato", "cachorro", "omar"]



arraySort(listString)
filterAnagram(arrayOrden)
DifferenceBetweenArrays(listString, anagrama, notAnagrama)

console.log("São anagramas: " + anagrama)
console.log("Não são anagramas: " + notAnagrama)


function arraySort(arr){
    for(let i =0; i < arr.length; i++){
        let strings =arr[i].split("").sort()
        let word = strings.join("")
        arrayOrden.push(word)
    }
}

function filterAnagram(arr){
    let aux = []
    arr.filter(function(elemento , i ) {
        let indexElemento = 0
      
        if(arr.indexOf(elemento ) !== i ) {
            indexElemento = (arr.indexOf(elemento))
            aux.push(listString[indexElemento])
            aux.push(listString[i])
        }
    })
    
anagrama = aux.filter(function(elem, pos, self) {
   
    return self.indexOf(elem) == pos;

})


}


function DifferenceBetweenArrays(arr1 , arr2, result){

    
arr1.filter(function(element) {
    if (arr2.indexOf(element) === -1) {   // se for encontrado um valor nos dois arrays
      result.push(element)
    }
  });
 
}