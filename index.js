function powerBall() {
    document.getElementById("num1").innerHTML = Math.floor(Math.random() * 69)+1;
 
    document.getElementById("num2").innerHTML = Math.floor(Math.random() * 69)+1;
    while (document.getElementById("num1").innerHTML == document.getElementById("num2").innerHTML){
     document.getElementById("num2").innerHTML = Math.floor(Math.random() * 69)+1;
    }
 
    document.getElementById("num3").innerHTML = Math.floor(Math.random() * 69)+1;
    while (document.getElementById("num2").innerHTML == document.getElementById("num3").innerHTML || document.getElementById("num1").innerHTML == document.getElementById("num3").innerHTML ){
     document.getElementById("num3").innerHTML = Math.floor(Math.random() * 69)+1;
    }
 
    document.getElementById("num4").innerHTML = Math.floor(Math.random() * 69)+1;
    while (document.getElementById("num3").innerHTML == document.getElementById("num4").innerHTML ||document.getElementById("num2").innerHTML == document.getElementById("num4").innerHTML || document.getElementById("num1").innerHTML == document.getElementById("num4").innerHTML){
     document.getElementById("num4").innerHTML = Math.floor(Math.random() * 69)+1;
    }
 
    document.getElementById("num5").innerHTML = Math.floor(Math.random() * 69)+1;
    while (document.getElementById("num4").innerHTML == document.getElementById("num5").innerHTML || document.getElementById("num3").innerHTML == document.getElementById("num5").innerHTML ||document.getElementById("num2").innerHTML == document.getElementById("num5").innerHTML || document.getElementById("num1").innerHTML == document.getElementById("num5").innerHTML){
     document.getElementById("num5").innerHTML = Math.floor(Math.random() * 69)+1;
    }
   
    document.getElementById("num6").innerHTML = Math.floor(Math.random() * 69)+1;
    while (document.getElementById("num5").innerHTML == document.getElementById("num6").innerHTML ||
          document.getElementById("num4").innerHTML == document.getElementById("num6").innerHTML || document.getElementById("num3").innerHTML == document.getElementById("num6").innerHTML ||document.getElementById("num2").innerHTML == document.getElementById("num6").innerHTML || document.getElementById("num1").innerHTML == document.getElementById("num6").innerHTML){
     document.getElementById("num6").innerHTML = Math.floor(Math.random() * 69)+1;
    }
 }
   
 
 function reset(){
     document.getElementById("num1").innerHTML = "";
     document.getElementById("num2").innerHTML = "";
     document.getElementById("num3").innerHTML = "";
     document.getElementById("num4").innerHTML = "";
     document.getElementById("num5").innerHTML = "";
     document.getElementById("num6").innerHTML = "";
 
 }
 
 function megamillion() {
     document.getElementById("num1m").innerHTML = Math.floor(Math.random() * 70)+1;
  
     document.getElementById("num2m").innerHTML = Math.floor(Math.random() * 70)+1;
     while (document.getElementById("num1m").innerHTML == document.getElementById("num2m").innerHTML){
      document.getElementById("num2m").innerHTML = Math.floor(Math.random() * 70)+1;
     }
  
     document.getElementById("num3m").innerHTML = Math.floor(Math.random() * 70)+1;
     while (document.getElementById("num2m").innerHTML == document.getElementById("num3m").innerHTML || document.getElementById("num1m").innerHTML == document.getElementById("num3m").innerHTML){
      document.getElementById("num3m").innerHTML = Math.floor(Math.random() * 70)+1;
     }
  
     document.getElementById("num4m").innerHTML = Math.floor(Math.random() * 70)+1;
     while (document.getElementById("num3m").innerHTML == document.getElementById("num4m").innerHTML ||document.getElementById("num2m").innerHTML == document.getElementById("num4m").innerHTML || document.getElementById("num1m").innerHTML == document.getElementById("num4m").innerHTML){
      document.getElementById("num4m").innerHTML = Math.floor(Math.random() * 70)+1;
     }
  
     document.getElementById("num5m").innerHTML = Math.floor(Math.random() * 70)+1;
     while (document.getElementById("num4m").innerHTML == document.getElementById("num5m").innerHTML || document.getElementById("num3m").innerHTML == document.getElementById("num5m").innerHTML ||document.getElementById("num2m").innerHTML == document.getElementById("num5m").innerHTML || document.getElementById("num1m").innerHTML == document.getElementById("num5m").innerHTML){
      document.getElementById("num5m").innerHTML = Math.floor(Math.random() * 70)+1;
     }
   
     document.getElementById("num6m").innerHTML = Math.floor(Math.random() * 70)+1;
     while (document.getElementById("num5m").innerHTML == document.getElementById("num6m").innerHTML ||
          document.getElementById("num4m").innerHTML == document.getElementById("num6m").innerHTML || document.getElementById("num3m").innerHTML == document.getElementById("num6m").innerHTML ||document.getElementById("num2m").innerHTML == document.getElementById("num6m").innerHTML || document.getElementById("num1m").innerHTML == document.getElementById("num6m").innerHTML){
      document.getElementById("num6m").innerHTML = Math.floor(Math.random() * 70)+1;
     }
  }
 
  function resetm(){
 
     document.getElementById("num1m").innerHTML = "";
     document.getElementById("num2m").innerHTML = "";
     document.getElementById("num3m").innerHTML = "";
     document.getElementById("num4m").innerHTML = "";
     document.getElementById("num5m").innerHTML = "";
     document.getElementById("num6m").innerHTML = "";
 }
  
 
 