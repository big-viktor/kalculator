if (MemoryNumbers ) {

    if(MemoryPendingOperator === '='){
      display.value = result;
      displayHistory.value = result;
      console.log(result);
     }

       
       } else {

            MemoryNumbers = true;

           if (MemoryPendingOperator ==='+'){

            if (LocalOperation){
             result = newNumber += localNumber;
            console.log(MemoryNumbers); 
            }
           else {
            LocalOperation = true;
            newNumber = localNumber;
            console.log(newNumber);
          console.log(MemoryNumbers);
           };
            
         }else if (MemoryPendingOperator === '-') {     

              if (LocalOperation){
                newNumber -= +display.value;
              console.log(newNumber);
              console.log(MemoryNumbers); 
              }
             else {
              LocalOperation = true;
              newNumber = +display.value;
              console.log(newNumber);
            console.log(MemoryNumbers);
             };

         }else if (MemoryPendingOperator === '*') {

          if (LocalOperation ){  
              newNumber *= +display.value;
              console.log(newNumber);
              console.log(MemoryNumbers);
             }else {
              LocalOperation = true;
              newNumber = +display.value;
              console.log(newNumber);
            console.log(MemoryNumbers);
             };

         }else if (MemoryPendingOperator === '/') {

          if (LocalOperation ){  
              newNumber /= +display.value;
              console.log(newNumber);
              console.log(MemoryNumbers);
             }else {
              LocalOperation = true;
              newNumber = +display.value;
              console.log(newNumber);
            console.log(MemoryNumbers);
             };

         }
        
            console.log(newNumber);

          } 