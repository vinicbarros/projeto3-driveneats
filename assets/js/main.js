function showGreen(place, selec) {
    const elemento = document.querySelector(`.${selec}.show`);

    if(elemento !=null) {
        elemento.classList.remove('show');
    }

    place.classList.add('show');
    validateButton();
}


function validateButton() {

    const food = document.querySelector(".food.show");
    const drink = document.querySelector(".drink.show");
    const dessert = document.querySelector(".dessert.show");
    const check = document.querySelector(".off");
    const changeText = document.querySelector(".buttomText");

    if ((food!=null) && (drink!=null) && (dessert!=null)) {
        check.classList.add('on');
        changeText.innerHTML = "Fechar pedido";

    }
}

