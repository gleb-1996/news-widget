'use strict';

const $products = document.querySelector('#products');
const $iconClear = document.querySelector('.fa-times-circle');

let arrCart = [];

function monitoringCart(arrCart) {
    let $basket = document.querySelector('.basket');
    let $noProduct = document.querySelector('.no-product');
    let $counter = document.querySelector('.counter');
    let $total = document.querySelector('.total');
    let $numProd = document.querySelector('.num-prod');
    let $numSum = document.querySelector('.num-sum');
    let $clearBasket = document.querySelector('.clear-basket');
    let quantity;
    let sum = 0;

    if (arrCart.length > 0) {
        $basket.classList.add('back-green');
        $basket.classList.add('pointer');
        $noProduct.classList.add('hidden');
        $counter.classList.remove('hidden');
        $total.classList.remove('hidden');
        $clearBasket.classList.remove('hidden');

        for (let i = 0; i <= arrCart.length - 1; i++) {
            sum += arrCart[i].price;
            quantity = i + 1;
        }

        $numProd.textContent = quantity;
        $numSum.textContent = sum;
    } else {
        $basket.classList.remove('back-green');
        $basket.classList.remove('pointer');
        $noProduct.classList.remove('hidden');
        $counter.classList.add('hidden');
        $total.classList.add('hidden');
        $clearBasket.classList.add('hidden');
    }
}

function moduleCart(event) {
    if (event.target.classList.contains('to-cart')) {
        let $parent = event.target.parentNode;

        let $name = $parent.querySelector('.tit-prod');
        let $price = $parent.querySelector('.price');

        let obj = {
            name: $name.textContent,
            price: Number($price.textContent),
        };

        arrCart.push(obj);

        monitoringCart(arrCart);
    }
}

$products.addEventListener('click', moduleCart);

function clearBasket() {
    let question = confirm('Вы действительно хотите очистить корзину?');
    if (question) {
        arrCart.length = 0;
        monitoringCart(arrCart);
    }
}

$iconClear.addEventListener('click', clearBasket);