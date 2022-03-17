'use strict';

/*Карта*/
/*function initMap() {
    var cord = {lat: 40.189242, lng: 44.523326};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: cord
    });
    var marker = new google.maps.Marker({
        position: cord,
        map: map
    });
}*/
/*/Карта*/

$(document).ready(function () {
	/*jQuery code*/

/*Форма*/
/*    var input = $('input');
    input.on('blur',function () {
        if ($(this).val() === '') {
            $('.error').text('Поле не может быть пустым');
            $('#buttonSubmitSend').attr('disabled','true').css('border','1px solid red');
        }else{
            $('#buttonSubmitSend').attr('disabled','false').css('border','1px solid blue');
        }
    });*/

/*
        $('form').on('input', function () {
            input.each(function () {
                if($.trim($(this).val()) === ''){
                    $('#buttonSubmitSend').attr('disabled','true').css('border','1px solid red');
                }else{
                    $('#buttonSubmitSend').attr('disabled','false').css('border','1px solid blue');
                }
            });
        });
    */
/*/Форма*/








/*Вход 18+*/
//JS
/*var userAge = +prompt('Поддтвердите ваш возраст','18');
if (userAge >= 18) {
    alert('Добро пожаловать!');
} else {
    alert('Вход запрещен!');
	var x = document.getElementsByTagName('body')[0];
	x.style.display = 'none';
}*/
//JQUERY
/*var userAge = +prompt('Поддтвердите ваш возраст','18');
if (userAge >= 18) {
    alert('Добро пожаловать!');
} else {
    alert('Вход запрещен!');
	$('body').css('display','none');
}*/
/*/Вход 18+*/









/*Изменить цвет фона страницы*/
//JS
/*document.getElementById('btnColor').onchange = function () {
    document.body.style.backgroundColor = this.value;
}*/

//JQUERY
/*$('#ColorFon').change(function(){
    var value = $( this ).val();
    $('body').css( 'background', value );
});*/

/*/Изменить цвет фона страницы*/


/*Изменить цвет текста страницы*/
//JS
/*document.getElementById('color').onchange = function () {
    document.body.style.color = this.value;
}*/

//JQUERY
/*$('#ColorFon').change(function(){
    var value = $( this ).val();
    $('body').css( 'color', value );
});*/
/*/Изменить цвет текста страницы*/








/*Скрывать-Раскрывать меню*/
//JS
//.classList.toggle()
/*document.getElementById('btn-top-left').onclick = function () {//Вешаем событие клика на кнопку

    var btnText = this.innerHTML;//Захватываем тект кнопки и кладём в переменную

    if(btnText === 'Close') {//Если Open=Close
        this.innerHTML = 'Open';//Изменить текст у кнопки на Open
        document.getElementById('menu-top-left').classList.toggle('close');//Скрывать меню
    }else {
        this.innerHTML = 'Close';//Иначе Изменить текст у кнопки на Close
        document.getElementById('menu-top-left').classList.toggle('close');//Раскрывать меню
    }

};*/

/*document.getElementById('btn-top-left').onclick = function () {//Вешаем событие клика на кнопку

    var btnText = this.innerHTML;//Захватываем тект кнопки и кладём в переменную

    if(btnText === 'Close') {//Если Open=Close
        this.innerHTML = 'Open';//Изменить текст у кнопки на Open
        document.getElementById('menu-top-left').style.display='none';//Скрывать меню
    }else {
        this.innerHTML = 'Close';//Иначе Изменить текст у кнопки на Close
        document.getElementById('menu-top-left').style.display='block';//Раскрывать меню
    }

};*/

//JQUERY
//.toggle()
/*$('#btn-top-left').click(function() {
    $('#menu-top-left').toggle();//Скрывает и показывает меню
    var btnText = $('#btn-top-left').text();//Получаем текст элемента
        if ( btnText == 'Close' ) {
            $('#btn-top-left').text('Open');
        } else {
            $('#btn-top-left').text('Close');
        }
});*/

//.toggle()
/*    $('#btn-top-left').click(function() {
        $('#menu-top-left').toggle();//Скрывает и показывает
    });*/
    
//.slideToggle()
/*    $('#btn-top-left').click(function() {
        $('#menu-top-left').slideToggle();//Скрывает и показывает
    });*/

//.fadeToggle
/*    $("#btn-top-left").click(function () {
        $("#menu-top-left").fadeToggle("slow");
    });*/


//$('#btn-top-left').click(function() {
    //.hide() & .show()
/*        if (this.innerHTML == 'Close') {
            $('#menu-top-left').hide();
            this.innerHTML = 'Open';
        }else if (this.innerHTML == 'Open') {
            $('#menu-top-left').show();
            this.innerHTML = 'Close';
        }*/

    //.fadeOut(100) & .fadeIn(100)
/*        if (this.innerHTML == 'Close') {
            $('#menu-top-left').fadeOut(100);
            this.innerHTML = 'Open';
        }else if (this.innerHTML == 'Open') {
            $('#menu-top-left').fadeIn(100);
            this.innerHTML = 'Close';
        }*/

    //.fadeTo()
/*        if (this.innerHTML == 'Close') {
            $('#menu-top-left').fadeTo('fast' , 0);
            this.innerHTML = 'Open';
        }else if (this.innerHTML == 'Open') {
            $('#menu-top-left').fadeTo(1, 1);
            this.innerHTML = 'Close';
        }*/

    //.slideDown() & .slideUp()
/*       if (this.innerHTML == 'Close') {
            $('#menu-top-left').slideUp();
            this.innerHTML = 'Open';
        }else if (this.innerHTML == 'Open') {
            $('#menu-top-left').slideDown();
            this.innerHTML = 'Close';
        }*/

//});
/*/Скрывать-Раскрывать меню*/







/*$('#btnText').on('click', function () {
    $('#form1').append($('<br><input type="text" placeholder="text...">'));
});

$('#btnpassword').on('click', function () {
    $('#form2').append($('<br><input type="password" placeholder="password...">'));
});*/


/*var className = $('div').attr('class');
alert('className');*/

/*
$('#newDiv').on('click', function () {
    alert($(this).attr('class'));//Узнаём значение атрибутаCLASS
    $(this).attr('class','new');//Изменяем значение атрибутаCLASS
    $(this).attr({'class':'newClass','title':'Текстовый блок'});//Изменяем значение атрибутаCLASS и добавляем новый атрибут с значением
});*/





$('#сountry').on('change', function () {
    var x = $(this).val();
    $('#сountry > option').each(function () {
        if ( $(this).val() === x ) {
            $(this).attr({'selected':'selected'});
        }
    });
});



/*$('#str').on('change', function () {//Вешаем на объект событие изменения и выполнения функций

    var x = $(this).val(); //Узнаём значение выбранного элемента

    $('#sta > option').each(function () {//Проходим циклом по каждому элементу

        if ( $(this).val() === x ) {//если значение 3 то

            $(this).attr({'selected':'selected'});// назначить выбранным элемент 3

        }

    });

});*/


/* $('#сountry').on('change', function() {
	var сountry = $(this).val();
	console.log(сountry);
});

$('#capital').on('change', function() {
	var capital = $(this).val();
	console.log(capital);
}); */


/* $('#сountry').on('change', function () {//Вешаем на объект событие изменения и выполнения функций

    $('#capital > option').each(function () {//Проходим циклом по каждому элементу

        if ( $(this).val() === capital ) {//если значение 3 то

            $(this).attr({'selected':'selected'});// назначить выбранным элемент 3

        }

    });

}); */





});