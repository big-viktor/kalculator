let numbers = document.getElementsByClassName('item');
let operators = document.getElementsByClassName('operators');
let clean = document.getElementsByClassName ('itemclean');
let result = document.getElementById ('text');
let secondDisplay = document.getElementById ('textNews');

for ( let i = 0; i < numbers.length; i++ ) { 
  number = numbers[i];
  number.addEventListener('click', (e) => {
      selectedNumber(e.target.textContent);
    })

} 

console.log(operators[0]);
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
  secondDisplay.value = secondDisplay.value + number;
  console.log(secondDisplay.value)
 
}
                        
function selectedOperators (operator){
  
  // останній символ дисплею є оператор;
  let lastCharacterOperator = false;
// цей цикл порівнює останній символ дисплею в масиві операторів;  
  for( let i=0; i< operators.length;i++){
    const symbolsCount = secondDisplay.value.length
    console.log(symbolsCount)

    if (operators[i].textContent === secondDisplay.value.charAt(symbolsCount-1)){
      lastCharacterOperator = true;
    }
  }
  // якщо останній символ не оператор то його можна зиписати в дисплей;
  if(lastCharacterOperator === false){
     
    //якщо дисплей пустий то можна записати'-';???????????????????
    
        if (secondDisplay.value === '') {

          if(operator === '-'){
            secondDisplay.value += operator;
          }
        }else {
          secondDisplay.value += operator;
        }
      }  
        console.log(secondDisplay.value.length)
  
}  

function deleteValue(clean) {
      
  
  clean = secondDisplay.value;
  if (secondDisplay.value = clean) {
    clean = clean.substring(0, clean.length -1);
    secondDisplay.value = clean;
  }else{  (secondDisplay.value === '')
    result.value = ('0');
  }
  
}
  function equal (){
    
    const rovno = secondDisplay.value ;              
    if(rovno){
    result.value = eval(rovno);
    }
                           
}

