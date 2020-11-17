let animado = document.querySelectorAll(".animado");
function mostrarscroll(){
    let scrollTop = document.documentElement.scrollTop;
    for(var i=0; i < animado.length; i++){
        let alturanimado = animado[i].offsetTop;



        if(alturanimado - 450 < scrollTop){
            animado[i].style.opacity = 1;
            animado[i].classList.add("mostrarArriba");
        }
    }
}

//funcion del navbar
function myFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else { 
      x.className = x.className.replace(" w3-show", "");
    }
  }
  $( "#go" ).click(function() {
    $( "#block" ).animate({
      width: "70%",
      opacity: 0.4,
      marginLeft: "0.6in",
      fontSize: "3em",
      borderWidth: "10px"
    }, 1500 );
  });

  
  $("#btn1").click(function() {
    $('body').removeClass();
    $('body').addClass('class1');
   });
   
   $("#btn2").click(function() {
    $('body').removeClass();
    $('body').addClass('class2');
   });
   
   $("#btn3").click(function() {
    $('body').removeClass();
    $('body').addClass('class3');
   });
   

   
    