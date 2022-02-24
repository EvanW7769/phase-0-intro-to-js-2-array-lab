// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name){
cats.push(name)
return cats
}

function destructivelyPrependCat(name){
    cats.unshift(name)
    return cats
}

function destructivelyRemoveLastCat(){
    return cats.pop()
}

function destructivelyRemoveFirstCat(){
    return cats.shift()
}

function appendCat(name){
    let appendedCats = [...cats, name]
    return appendedCats
}

function prependCat(name){
    let prependedCats = [name, ...cats]
return prependedCats
}


function removeLastCat(){
    let removedCat = cats.slice(0,2)
    return removedCat
}
function removeFirstCat(){
let removedFirstCat = cats.slice(1,3) 
return removedFirstCat
}

