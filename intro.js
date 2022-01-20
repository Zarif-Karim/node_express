
//API to give higher or lower hint
function is_it(num){
    const number = 57;
    if(num > number) return 2;
    else if(num == number) return 1;
    else return 0;
}

function binary_search(min,max,tries){
    while(min < max && --tries){
        let guess = min + Math.floor((max-min)/2);
        let outcome = is_it(guess);
        if(outcome == 1) return guess;
        else if(outcome > 1) max = guess - 1;
        else min  = guess + 1;
    }
    return !tries? -1 : min;    
}

function guess(numTries){
    return binary_search(0,100,numTries);
}

function main(){
    let turns = 7;
    console.log(guess(turns));
}

main();
