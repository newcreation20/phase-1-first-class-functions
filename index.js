function receivesAFunction(spy){
    spy()
}

function returnsANamedFunction() {
    return function whatever(){

    }
}

function returnsAnAnonymousFunction() {
    return function (){}
}