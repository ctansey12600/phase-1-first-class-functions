
function spy(someValue){
    return someValue
}

function receivesAFunction(anyThing){
    anyThing()
}

const someThing = book => "book"

function returnsANamedFunction(){
    return someThing
}

function returnsAnAnonymousFunction(){
    return function(){}
}