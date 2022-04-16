ymaps.ready(init);

function init(){
  var myMap = new ymaps.Map(
    "map",
    {
      center: [60.06753718537232, 30.7403202257015],
      zoom: 17,
        controls: ['routeButtonControl']
    }
  )
  ,
  myPlacemark = new ymaps.Placemark([60.06753718537232, 30.7403202257015], {
    balloonOpen: true,
    balloonContentHeader: "<strong>47-reg.ru - 929-44-46</strong>",
    balloonContentBody: "Приезжайте вкусно покушать<br> или закажите доставку",
    balloonContentFooter: "Вкусно <em>покушать</em> это к нам",
    hintContent: "Шашлычная 47 регион"
  }
  ,
  {
    iconLayout: 'default#image',
    iconImageHref: 'https://47-reg.ru/images/logo.svg',
    iconImageSize: [32, 32],
    iconImageOffset: [-10, -20],
    iconContentOffset: [15, 15]
  }
);

  myMap.balloon.open(
    [60.06758999999999, 30.7403202257000],
    "<strong>47-reg.ru</strong> <br> <strong>Шашлычная 47 регион</strong> <br> <strong>929-44-46</strong>", {
      closeButton: true
    }
  );

  myMap.geoObjects.add(myPlacemark);
  
  var control = myMap.controls.get('routeButtonControl');

    control.routePanel.geolocate('from');
    
    control.routePanel.state.set({
        type: "pedestrian",
        to: '60.06753718537232, 30.7403202257015'
    });

    // Откроем панель для построения маршрутов.
    control.state.set('expanded', true);
};