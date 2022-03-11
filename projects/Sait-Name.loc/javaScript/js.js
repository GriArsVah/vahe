var myVideo = document.getElementById("video1"); 
function playPause() { 
    if (myVideo.paused) {
        myVideo.play();
    }
    else {
        myVideo.pause();
    }
} 
function makeBig() {
    myVideo.width = 560; 
}
function makeSmall() {
    myVideo.width = 320;
}
function makeNormal() {
    myVideo.width = 420;
}


document.getElementById('btn').onclick = function () {
    var text = document.getElementById('btn').innerHTML;
    if (text === 'MenuClose') {
        document.getElementById('btn').innerHTML = 'MenuOpen';
        document.getElementById('nav').classList.toggle('close');
    } else if (text === 'MenuOpen') {
        document.getElementById('btn').innerHTML = 'MenuClose';
        document.getElementById('nav').classList.toggle('close');
    }
}



var userAge = +prompt('Поддтвердите ваш возраст','18');
if (userAge >= 18) {
    alert('Добро пожаловать!');
} else {
    alert('Вход запрещен!');
    document.getElementById('myBody').classList.toggle('close');
}


/*var userAge = +prompt('Поддтвердите ваш возраст','18');
if (userAge >= 18) {
    alert('Добро пожаловать!');
} else {
    alert('Вход запрещен!');
	var x = document.getElementsByTagName('body')[0];
	x.style.display = 'none';
}*/

function initMap() {
    var myLatLng = {lat: 40.189098, lng: 44.523000}; // кординаты
// Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('map'), {
        scrollwheel: false, // при скролле карта не масштабируется
        center: myLatLng,
        zoom: 10// размер начального увеличения
    });
// Create a marker and set its position.
    var marker = new google.maps.Marker({
        map: map,
        position: myLatLng,
        title: 'IT-TALENTS ASSOCIATION'
    });
}