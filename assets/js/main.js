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
        check.removeAttribute("disabled");
    }
}

function myValue(price) {
    return price.innerHTML.replace("R$", "").replace(",", "").trim()/100; 
}

function order() {
    const food = document.querySelector(".food.show");
    const foodValue = myValue(food.querySelector(".price"));

    const drink = document.querySelector(".drink.show");
    const drinkValue = myValue(drink.querySelector(".price"));

    const dessert = document.querySelector(".dessert.show");
    const dessertValue = myValue(dessert.querySelector(".price"));

    const total = foodValue + drinkValue  + dessertValue;
    console.log(total.toFixed(2));

    const message = `Olá, gostaria de fazer o pedido: 
    - Prato: ${food.querySelector("h3").innerHTML}
    - Bebida: ${drink.querySelector("h3").innerHTML}
    - Sobremesa: ${dessert.querySelector("h3").innerHTML}
    Total: R$ ${total.toFixed(2)}`;

    window.open(`https://wa.me/5512997655354?text=${encodeURIComponent(message)}`);
}

