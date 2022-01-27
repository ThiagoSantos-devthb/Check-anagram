
var anagram = []
var notAnagram = []
var arrayOrden = []

var listString = ["thiago", "amor", "roma", "escada ", "mora", "gato", "cachorro", "omar", "ramo"] // Entrada

arrayOrden = arraySort(listString)
anagram = filterAnagram(arrayOrden)
notAnagram = DifferenceBetweenArrays(listString, anagram, notAnagram)

// console.log(arrayOrden )
// console.log(anagrama)
// console.log(notAnagrama)



console.log("São anagramas: " + anagram)
console.log("Não são anagramas: " + notAnagram)

// separa a string por letras e reordena, gerando um array de todas as strings por ordem alfabetica
function arraySort(arr) {
    let aux = []
    for (let i = 0; i < arr.length; i++) {
        let strings = arr[i].split("").sort()
        let word = strings.join("")
        aux.push(word)

    }
    // console.log(aux)
    return (aux)

}

// filtra o array ordenado por ordem alfabetica e compara cada elemento e retorna os que possuem igualdade
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
    return (result)
}

// compara o array de anagramas com o array de entrada , a diferença é o array de "não anagramas" e cria um novo array de "não anagramas"
function DifferenceBetweenArrays(arr1, arr2, result) {

    arr1.filter(function (element) {
        if (arr2.indexOf(element) === -1) {   // se for encontrado um valor nos dois arrays
            result.push(element)
        }
    });
    return (result)
}
