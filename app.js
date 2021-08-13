document.getElementById('firstClass-increase').addEventListener('click', function(){

handelInput(true, 'firstClass')
})

document.getElementById('firstClass-decrease').addEventListener('click', function(){

    handelInput(false, 'firstClass')
    
    })
    //first class part done

    function handelInput(inc , sector){
        const fistInput = document.getElementById(sector+'-input').value
const firstInputNum = parseInt(fistInput);
var firstInputPlas = firstInputNum  ;
if(inc === true){
    firstInputPlas = firstInputNum + 1;
}

if (inc === false && firstInputPlas  > 0){
    firstInputPlas = firstInputNum - 1; 
}

document.getElementById(sector+'-input').value = firstInputPlas;


if (sector ===  'firstClass'){
firstPrice = firstInputPlas * 150;
    
}
if(sector ===  'ecoClass'){
     ecoPrice = firstInputPlas * 100;
   }
   subtotol =   firstPrice  +  ecoPrice ;

document.getElementById("subtotal").innerText = subtotol;
 tax = subtotol * 0.1;
document.getElementById("tax").innerText = tax;

 total = subtotol + tax;
document.getElementById("total").innerText = total;

}


    

    //ecoclass part
    document.getElementById('ecoClass-increase').addEventListener('click', function(){

        handelInput(true, 'ecoClass')
        })
        
        document.getElementById('ecoClass-decrease').addEventListener('click', function(){
        
            handelInput(false,  'ecoClass')
            
            })
