'use strict';

    /*Изменить цвет фона страницы*/
//JS
    document.getElementById('bg-fon-color').onchange = function () {
        document.body.style.backgroundColor = this.value;
    }
    /*/Изменить цвет фона страницы*/
    
    /*Изменить цвет текста страницы*/document.getElementById('text-color').onchange = function () {
        document.body.style.color = this.value;
    }
    /*/Изменить цвет текста страницы*/

$(document).ready( function () {


    /*Изменить цвет фона страницы*/
//JQUERY
/*    $(document).ready(function() {
        $('#bg-fon-color').change(function(){
            var value = $( this ).val();
            $('body').css( 'background', value );
        });
    });*/
    /*/Изменить цвет фона страницы*/


    /*Изменить цвет текста страницы*/
//JS
    
    /*Изменить цвет текста страницы*/
//JQUERY
    /*$(document).ready(function() {
        $('#color').change(function(){
            var value = $( this ).val();
            $('body').css( 'color', value );
        });
    });*/
    /*/Изменить цвет текста страницы*/


});