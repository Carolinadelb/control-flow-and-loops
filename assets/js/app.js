window.onload = function() {
    /*Botones */

    const btn = document.getElementById('btn');
    const btnIf = document.getElementById('btn-if');
    const btnSwitch = document.getElementById('btn-switch');
    const btnWhile = document.getElementById('btn-while');
    const btnDoWhile = document.getElementById('btn-dowhile');
    const btnFor = document.getElementById('btn-for');

    btn.addEventListener('click', function(){
        alert('Holi');
    });

    /* Ejemplo IF */

    btnIf.addEventListener('click', function(){
        let age = 50;

        if(age >= 18 && age <= 30) {
            console.log('Masia juventud en tu vida');
        } else if ( age > 30) {
            console.log('Nah que decir');
        } else {
            console.log('masio baby');
        }

    });

    /* o se puede así (solo con if):
    
    if (age>= 18 && age <= 30) {
        console.log('masia juventud);
    }
    if (age > 30) {
        console.log ("nah que decir);
    }
    console.log('masiao baby'); */
   

    //switch

    btnSwitch.addEventListener('click', function(){
        let num = '5';
        switch (num) {
            case '5':
            alert('es un string');
            break;
            case 5 :
            alert('es un número');
            break;
            default:
              alert ('chao, no es string ni número');
        
        }


    });

/*
    //ejemplo While:
    
    let counter = 0;
    
    while (counter < 5) {
        alert(counter);
        counter++;
    }

    //Ejemplo Dowhile:

    let counter = 0;

    do {
        console.log(counter);
     } while (counter !== 0)
*/

for (let i = 0; i < 5; i++) {
    console.log(i);
}

//ES5
//expression
var square = function(um) {
    return um * um;
}
square(5)
}

//declaration

function square (um){
    return um * um; 
}

//ES6
const square = (um) => um * um;

/*const selection = (option) => {
    if (option ==='cat') {
    alert ('miau');
 } else if (option === 'dog') {
     alert ('guau');
 }else {
      alert ('cuack');
     } 
 
    };
*/


}