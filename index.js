
//Recieves a function
const receivesAFunction= (callback) => callback()

//Returns a named function
function returnsANamedFunction(){
    const namedFunction= (name) => "Kasey"
    return namedFunction
}

//Returns anonymous function
const returnsAnAnonymousFunction= () => () => {"anonymous"}

