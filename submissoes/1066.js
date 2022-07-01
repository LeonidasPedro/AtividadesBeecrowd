var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));
/*#include <stdio.h>
 
int main() {
 
    int num, cont, par, impar, negativo, positivo;
    num = cont = par = impar = negativo = positivo = 0;
    do{ 
        scanf("%d", &num);
        if(num % 2 == 0){par = par + 1;}
        else impar++;
        cont = cont + 1; 
        if(num >= 1){positivo++;}
        else negativo++;
        if(num == 0){negativo--;}
    }while(cont < 5);
    printf("%d valor(es) par(es)\n", par);
    printf("%d valor(es) impar(es)\n", impar);
    printf("%d valor(es) positivo(s)\n", positivo);
    printf("%d valor(es) negativo(s)\n", negativo);
    return 0;
}*/

let num = 0;
let cont = 0;
let par = 0;
let impar = 0;
let neg = 0;
let posi = 0;
    while(cont < 5){
        
    }