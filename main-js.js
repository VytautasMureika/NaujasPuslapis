$(document).ready(function () {
    
        
/* Sign in popUp div.  */
        event.preventDefault();
        $('.sign-in-box, .bubble').hide(); 

        $('#sign-in-button').on('click', function () {
            $('.sign-in-box').slideToggle(100);
            return false;
        });

        $('.sign-list').on('click', 'button', function () {
            var email = $('#email').val();
            var pass = $('#pass').val();
            console.log(email + pass);
            if ( email == pass ) {
                console.log('Darom kazka.');
            };
        });
    
/* Choose Web page. */
        
        $('#main-slide').hide();
    
        $('#button-home').on('click', function() {
            $('#main-home').show();
            $('#main-slide').hide();
            return false;
        });
        
        $('#button-slide').on('click', function() {
            $('#main-slide').show();
            $('#main-home').hide();
            return false;
        });  
    
/* Moving comments on img */    
        
        $('div.thumbnail').on('mouseenter', function() {
            $(this).find('p#animate-text').animate({'opacity': '1', 'top': '-15px'});
        });

        $('div.thumbnail').on('mouseleave', function() {
            $(this).find('p#animate-text').animate({'opacity': '0', 'top': '30px'});
        });
    
/* Footer sliding part. */    
        $('footer .container').hide();
        $('#footer-button').on('click', function() {
            $('footer .container').slideToggle(200);
            return false;
        });
    
/* Sprite event on click. */
        $('#social-sprite-first').on('click', function() {
            $('.bubble').show();
            return false;
        });
    
        $('body').on('click', '.bubble', function() {
            $(this).hide();
        });
    
        $('#social-sprite-second').on('click', function() {
            $('.bubble').show();
            return false;
        });
    
        $('body').on('click', '.bubble', function() {
            $(this).hide();
        });
/* aJax, jSon */
        $.get( "data.txt", function( response ) {
            console.log( response );
        });

        $.getJSON("http://www.colourlovers.com/api/palettes/top?jsonCallback=?", { numResults: 1 }, function(colorPalettes) {
            printColors(colorPalettes);
        });
    
        function printColors (colorPalettes) {
            for(var palette in colorPalettes) {
                //console.log(colorPalettes[palette].title);
                console.log(colorPalettes[palette].colors[0]);
            }
        }
    
        
});
        


