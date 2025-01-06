const numbers =document.querySelectorAll("[data-number]");

const operations = document.querySelectorAll("[data-operation]");


let rawString="" ;

numbers.forEach((number)=>{
    number.addEventListener("click",(e)=>{
        rawString+=e.target.textContent;
        displayRaw();
        displayResult()
    })
})

operations.forEach((operator)=>{
    operator.addEventListener("click",(e)=>{
        if(rawString[rawString.length-1] =="+" || rawString[rawString.length-1]=="-" || rawString[rawString.length-1] =="*" || rawString[rawString.length-1] =="/"){
            return;
        }
        rawString+=e.target.textContent;
        displayRaw();
    })
})

function displayRaw(){
    const displayInput =document.querySelector("[data-screen=input]");

    displayInput.textContent =rawString
}

function displayResult(){
    const result =document.querySelector("[data-screen=result]");
    result.textContent =eval(rawString);
}