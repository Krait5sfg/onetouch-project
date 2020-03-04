var myMap;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init() {
    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
    myMap = new ymaps.Map('map', {
        // При инициализации карты обязательно нужно указать
        // её центр и коэффициент масштабирования.
        center: [55.762054, 37.620851], // Москва
        zoom: 17,
        controls: [] //убирает элементы управления с карты
    },
        { suppressMapOpenBlock: true }, //убирает поиск в яндексе
        {
            searchControlProvider: 'yandex#search'
        });

    // document.getElementById('destroyButton').onclick = function () {
    //     // Для уничтожения используется метод destroy.
    //     myMap.destroy();
    // };

}
