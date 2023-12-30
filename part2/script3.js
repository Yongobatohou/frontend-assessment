
//Consigne 3

let chaine = String(prompt("Entrez un mot"))

function palindrome(chain){
    
    if(chain == chain.split('').reverse().join('')){
        return alert(chain + ' est un palindrome')
    }else{
        return alert(chain + " n'est pas un palindrome")
    }
}
palindrome(chaine);