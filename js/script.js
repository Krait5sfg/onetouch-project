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

