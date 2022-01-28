/*
Escreva um método para classificar um array de strings de forma que todos os anagramas fiquem próximos uns dos outros. Descarte todas strings que não são anagramas movendo-as para outro array, de modo que ao final você tenha dois arrays ordenados, um somente com strings que sejam anagramas e outro somente com strings que não sejam anagramas.

Exemplo:
Entrada: {"nata", "sorvete", "anta", "paralelepipedo", "tana"}
Saidas: {"anta", "nata", "tana"}
             {"paralelepipedo","sorvete"}

*/ 



var anagram = []
var notAnagram = []
var arrayOrden = []
 /*
  exemplos de entrada
    ["jose", "galeria", "laranja", "alegria", "alergia", "gato", "cachorro", "regalia"]
    ["jose", "galeria", "laranja", "alegria", "alergia", "gato",  "regalia", "amor", "roma", "cachorro", "mora", "morar", "omar"]
    ["thiago", "amor", "roma", "escada ", "mora", "gato", "cachorro", "omar", "ator", "rato"]

  */

var listString = ["jose", "amor", "roma", "cachorro"] // Entrada

arrayOrden = arraySort(listString)
anagram = filterAnagram(arrayOrden)
notAnagram = DifferenceBetweenArrays(listString, anagram, notAnagram)



console.log("São anagramas: " + anagram)
console.log("Não são anagramas: " + notAnagram)

// separa a string por letras e reordena, gerando um array de todas as strings por ordem alfabetica
function arraySort(arr) {
    let aux = []
    for (let i = 0; i < arr.length; i++) {
        let strings = arr[i].split("").sort()
        let word = strings.join("")
        aux.push(word)
       //console.log(arr[i].split(""))
       //console.log(strings)

    }
    //console.log(aux)
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
