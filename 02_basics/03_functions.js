

function addTwoNumbers(number1, number2){
    let result = number1 + number2
    return result
}

const result = addTwoNumbers(4, 3)
console.log("Result: ", result)

function loginUserMessage(username){
    // if (username == undefined){
    //     console.log("please enter username")
    //     return
    // }

    if (!username){                            // undefined is considered as false in js
        console.log("please enter username")
        return
    }
    return `${username} just logged in`
}


console.log(loginUserMessage("mudassir"))
console.log(loginUserMessage())  // this will return undefined now

function loginUserMessage1(username = "user1"){   // you can set default value as well so that it will never undefined
    
    if (!username){                            // undefined is considered as false in js
        console.log("please enter username")
        return
    }  // now this block will never execute because default value is present
    return `${username} just logged in`
}

function calculatePrice(val1, val2, ...num){ // use rest operator(...) for multiple parameters
    return num
}

console.log(calculatePrice(10, 20, 100, 1000))

const NewArray = [100,200,250,300]

function returnSecondValue(anyArray){
    return anyArray[1];
}

console.log(returnSecondValue(NewArray))

//....You can pass arrays and objects as function arguments