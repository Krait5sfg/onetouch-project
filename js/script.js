//кнопки формы Физическое лицо, Юридическое лицо
const privatePerson = document.querySelector(".private-person");
const legalPerson = document.querySelector(".legal-person");


privatePerson.addEventListener("click", function (evt) {

  evt.preventDefault();

  if (!privatePerson.classList.contains("current-person")) {
    legalPerson.classList.remove("current-person");
    privatePerson.classList.add("current-person");
    privatePerson.style.borderRight = "1px solid #EF5B00";
    legalPerson.style.borderLeft = null;
  }

});

legalPerson.addEventListener("click", function (evt) {

  evt.preventDefault();

  if (!legalPerson.classList.contains("current-person")) {
    privatePerson.classList.remove("current-person");
    legalPerson.classList.add("current-person");
    legalPerson.style.borderLeft = "1px solid #EF5B00";
    privatePerson.style.borderRight = null;
  }

});

//код чтобы в IE 11 работал forEach
if (typeof NodeList.prototype.forEach !== 'function') {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

//кнопка выбора доставки
const deliveryList = document.querySelectorAll(".delivery-list-item");
const map = document.querySelector(".order-form-self-delivery-point");
const userDelivery = document.querySelector(".user-order-list.fifth-row");
const userDeliveryPrice = document.querySelector(".user-order-list-price.fifth-row");
const cartPrice = document.querySelector(".cart-price");

let deliveryPrice = null;

deliveryList.forEach(function (element) {
  if (element.classList.contains("delivery-list-item-current")) {
    userDeliveryPrice.textContent = element.getAttribute("data-price");
    deliveryPrice = +element.getAttribute("data-price");
  }
});

//цена в корзине начальная
let price = +cartPrice.getAttribute("data-price");
let priceFirst = null;
let priceSecond = null;
priceFirst = price + deliveryPrice;
cartPrice.textContent = priceFirst.toLocaleString('ru-RU');

deliveryList.forEach(function (element) {

  element.addEventListener("click", function () {

    deliveryList.forEach(function (element) {
      element.classList.remove("delivery-list-item-current");
    });

    element.classList.add("delivery-list-item-current");

    let dataDelivery = element.getAttribute("data-delivery");
    let dataPrice = element.getAttribute("data-price");

    //цена в корзину при выборе другой доставки
    priceSecond = (+price) + (+dataPrice);
    cartPrice.textContent = priceSecond.toLocaleString('ru-RU');

    //меняем способ доставки и цену в форме заказа
    userDelivery.textContent = dataDelivery;
    userDeliveryPrice.textContent = dataPrice;

    if (dataDelivery === "Самовывоз") {
      map.classList.remove("hidden");
      map.classList.add("vissual");
    } else {
      map.classList.add("hidden");
      map.classList.remove("vissual");
    }

  });

});


