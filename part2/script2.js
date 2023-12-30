//Consigne 2

let tab = ['25', "Septembre", '2004']

function reverse(table){
    let tablerev = [];
    for(let i=table.length -1;i >= 0;i--){
         tablerev.push(table[i]);
    }
    return console.log(tablerev);
}

reverse(tab);