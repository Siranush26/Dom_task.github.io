
//Task 4
let title=document.getElementById("tit")
title.href="https://www.youtube.com/watch?v=6JdZK2eT6ro&t=98s";
title.target = '_blank';

//Task 1
function myFunction() {
  document.getElementById("box").style.background = "yellow";
}


//Task 2
function myFunction2() {
document.getElementById("new").style.background="purple"
document.getElementById("new").style.width="100px"
document.getElementById("new").style.height="100px"

}

//Task 3  tarberak 1
function myFunction3() {
    document.getElementById("second").style.background="pink"
    document.getElementById("second").style.width="100px"
    document.getElementById("second").style.height="100px"
   
    }

function myFunction4() {
        document.getElementById("second").style.background="blueviolet"
        document.getElementById("second").style.width="200px"
        document.getElementById("second").style.height="200px"
       
        }

//Task 3  tarberak 2
/*
        let nor = document.getElementById("nor");
        nor.addEventListener("click",  myFunctionlast);
        nor.removeEventListener("dblclick", myFunctionlast)
     
        function myFunctionlast() {
            
             document.getElementById("norr").style.background="pink"
             document.getElementById("norr").style.width="100px"
             document.getElementById("norr").style.height="100px"
          }
          
    */   
        
          let n=document.getElementById("nor")
          n.addEventListener("click", goPink, false,)
          n.removeEventListener("click", goBlue, false,)
     
          function goPink() {
              document.getElementById("norr").style.background = "pink";
              document.getElementById("norr").style.width="100px"
              document.getElementById("norr").style.height="100px"
              document.getElementById("norr").removeEventListener("click", goPink, false); 
              document.getElementById("norr").addEventListener("click", goBlue, false); 
             
          }
          function goBlue() {
            document.getElementById("norr").style.background  = "blueviolet";
            document.getElementById("norr").style.width="200px"
            document.getElementById("norr").style.height="200px"
            document.getElementById("norr").removeEventListener("click", goBlue, false); 
            document.getElementById("norr").addEventListener("click", goPink, false); 
           
          }