$(document).ready(function(){
    /* Caja 01 */
    $('#caja-01 a').mouseover(function(){
        $('#caja-01 .info-interna').fadeIn(500);
    });
    
    $('#caja-01 a').mouseleave(function(){
        $('#caja-01 .info-interna').fadeOut(300);
    });
    
    /* Caja 02 */
    $('#caja-02 a').mouseover(function(){
        $('#caja-02 .info-interna').fadeIn(500);
    });
    
    $('#caja-02 a').mouseleave(function(){
        $('#caja-02 .info-interna').fadeOut(300);
    });
    
    
    $('#caja-04 a').mouseover(function(){
        $('#caja-04 .info-interna').fadeIn(500);
    });
    
    $('#caja-04 a').mouseleave(function(){
        $('#caja-04 .info-interna').fadeOut(300);
    });
    
    $('#caja-05 a').mouseover(function(){
        $('#caja-05 .info-interna').fadeIn(500);
    });
    
    $('#caja-05 a').mouseleave(function(){
        $('#caja-05 .info-interna').fadeOut(300);
    });
    
    
    $('#caja-01 a, #caja-02 a, #caja-03 a, #caja-04 a, #caja-05 a').click(function(){
        event.preventDefault();
    });
    
    
    
    /* --------------- */
    
    
    $('a#ver-catalogo').click(function(){
        $('figure#vista-02').animate({
            left: 0
        },700,'easeOutExpo')
        
        event.preventDefault();
    });
    
    $('a#ver-infografia').click(function(){
        $('figure#vista-02').animate({
            left: '100%'
        },700,'easeOutExpo')
        
        event.preventDefault();
    });
    
    
    /* ---------------- */
    
    
   
});


































