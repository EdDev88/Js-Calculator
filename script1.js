function insert(num)  {  
  document.blok.screen.value = document.blok.screen.value + num;  
  }  
     
  function equal() {  
  var exp = document.blok.screen.value;  
  if(exp) {  
  document.blok.screen.value = eval(exp)  
  }  
  }  
    
  function pm() {
     var n = document.blok.screen.value; 
     n = n * -1;
     document.blok.screen.value  = n;
  }
  
  function perc()
  {
    document.blok.screen.value; 
  }