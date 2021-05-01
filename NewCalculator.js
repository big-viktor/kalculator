let numbers = document.getElementsByClassName('item');
let operators = document.getElementsByClassName('operators');
let clean = document.getElementsByClassName ('itemClean');
let display = document.getElementById ('textNews');
let displayHistory = document.getElementById ('calculationsHistory');

let MemoryNumbers = false;
let MemoryPendingOperator = '';
let newNumber = 0;
let LocalOperation = false;
let result;


for ( let i = 0; i < numbers.length; i++ ) { 
    number = numbers[i];
    number.addEventListener('click', (e) => {
        selectedNumber(e.target.textContent);
      })  
  }  

  for (let i = 0; i < operators.length; i++) {
    operator = operators[i];
   operator.addEventListener('click', (e) => {
       selectedOperators(e.target.textContent);
     })
 } 
 for (let i=0; i <  clean.length; i++){
    cleans = clean[i];
    cleans.addEventListener('click',(e) => {
      deleteValue(e.target.textContent);
  
    })
  }

  function selectedNumber (number){

    displayHistory.value += number;
   
    if (MemoryNumbers) {
        display.value = number;
        MemoryNumbers = false;   
        console.log(MemoryNumbers); 
       
    }else {
    
        display.value += number;
        newNumber = +display.value;
                   
        console.log(newNumber);
    }
    selectedOperators = (operator)  => {
      // останній символ дисплею є оператор;
      let lastCharacterOperator = false;
      // цей цикл порівнює останній символ дисплею в масиві операторів;  
        for( let i=0; i< operators.length;i++){
          const symbolsCount = displayHistory.value.length
      
            if (operators[i].textContent === displayHistory.value.charAt(symbolsCount-1)){
              lastCharacterOperator = true;
            }
        }
        // якщо останній символ не оператор то його можна зиписати в дисплей;
        if(lastCharacterOperator === false){
            
            //якщо дисплей пустий то можна записати'-';???????????????????
            
            if ( displayHistory.value === '') {
        
              if(operator === '-'){
                displayHistory.value += operator;
              }
            }else {
                displayHistory.value += operator;
              }
        }  
     

        let localNumber = +display.value;

               console.log(localNumber);
               MemoryPendingOperator = operator;
    
              if(MemoryNumbers){
                if(MemoryPendingOperator === '='){
                  display.value = newNumber;
                  displayHistory.value = newNumber;
               
                }
                display.value = newNumber;
              }else{

                MemoryNumbers = true;
                
                  if(LocalOperation){
                
                    if (MemoryPendingOperator ==='+'){
                     
                      newNumber += localNumber;
                             
                    }else if (MemoryPendingOperator === '-') {     
    
                      newNumber -= +display.value;

                    }else if (MemoryPendingOperator === '*') {

                      newNumber *= +display.value;

                    }else if (MemoryPendingOperator === '/') {
          
                      newNumber /= +display.value;

                    }
                      display.value = newNumber;
                    
                 
                  }else {
                    
                    LocalOperation = true;
                    localNumber = +display.value;
                    display.value = newNumber;
                  } 
                 
              }
}
  };
    
    
        
    

function deleteValue(clean) {
      
  
  clean = display.value;
    console.log(clean)
      clean = clean.substring(0, clean.length -1);
      display.value = clean;
   
    
  }
  //  if (MemoryNumbers){
//     LocalOperation = +display.value;
//      console.log(LocalOperation);
//      display.value ='';
//      console.log(MemoryNumbers);
//     }else {
//         console.log(MemoryNumbers);
//         MemoryNumbers = true;
//     }
   
   
       
    // MemoryPendingOperator = operator;
   
   
    //     if(MemoryPendingOperator === '+'){
    //         newNumber += LocalOperation;
    //              }else if (MemoryPendingOperator === '-'){
    //                 LocalOperation-=LocalOperation;
    //              }else if (MemoryPendingOperator === '*'){
    //                 LocalOperation *=  LocalOperation; 
    //              }else if (MemoryPendingOperator === '/'){
    //                 LocalOperation /=  LocalOperation;  
    //              }; display.value = newNumber;  
    //              console.log (newNumber)
                
            // let result = LocalOperation + MemoryNewNumber;
    // console.log(result)
// MemoryPendingOperator = operator;
// };
// function selectedNumber (number){    
//     if (MemoryNewNumbers = true) {
//         display.value += number;
//         MemoryNewNumber = display.value;
//         console.log(MemoryNewNumber);
//     }
// }

// selectedOperators = (operator)  => {
 
//     LocalOperation = display.value;
