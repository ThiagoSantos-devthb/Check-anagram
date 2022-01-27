
var anagrama = []
var notAnagrama = []
var arrayOrden = []

var listString = ["thiago", "amor", "roma", "escada ", "mora", "gato", "cachorro", "omar", "ator", "rato"]

arrayOrden = arraySort(listString)
anagrama =  filterAnagram(arrayOrden)
notAnagrama = DifferenceBetweenArrays(listString, anagrama, notAnagrama)

console.log(arrayOrden )
console.log(anagrama)
console.log(notAnagrama)



console.log("São anagramas: " + anagrama )
console.log("Não são anagramas: " + notAnagrama)


function arraySort(arr) {
    let aux = []
    for (let i = 0; i < arr.length; i++) {
        let strings = arr[i].split("").sort()
        let word = strings.join("")
        aux.push(word)
      
    }
   // console.log(aux)
    return(aux)
   
}


function filterAnagram(arr) {
    let aux = []
    let result = []
    arr.filter(function (elemento, i) {
        let indexElemento = 0

        if (arr.indexOf(elemento) !== i) {
            indexElemento = (arr.indexOf(elemento))
            aux.push(listString[indexElemento])
            aux.push(listString[i])
        }
    })

    result = aux.filter(function (elem, pos, self) {
        return self.indexOf(elem) == pos;
    })
    return(result)
}


function DifferenceBetweenArrays(arr1, arr2, result) {

    arr1.filter(function (element) {
        if (arr2.indexOf(element) === -1) {   // se for encontrado um valor nos dois arrays
            result.push(element)
        }
    });
        return(result)
}

function grupoAnagrama(arr){
    arraySort(arr)
}