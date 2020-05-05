window.onscroll = function(){
   var top = window.pageYOffset || document.documentElement.scrollTop
   if( top >= 0 and screen.width >= 560) {
            $('.painel-esquerda').css({
                   'top': top
               });  
   }
    
}