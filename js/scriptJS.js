let cardsData = [{
    id: 1,
    imgUrl: './images/CartScreen/img-first.svg',
    imgUrlBig: './images/CartScreen/img-first-big.svg',
    textTop: 'Golden fruit jam',
    price: 10.99,
    amount: 1
  },
  {
    id: 2,
    imgUrl: './images/CartScreen/img-second.svg',
    imgUrlBig: './images/CartScreen/img-second-big.svg',
    textTop: 'Golden fruit jam',
    price: 20.99,
    amount: 1
  },
  {
    id: 3,
    imgUrl: './images/CartScreen/img-three.svg',
    imgUrlBig: './images/CartScreen/img-first-big.svg',
    textTop: 'Golden fruit jam',
    price: 30.99,
    amount: 2
  },
]

function aaaa() {
  let btnLeft = document.querySelector('.btnLeft');
  btnLeft.onclick = changeLeftPrice;

  let price = document.querySelector('.price');

  let btnRight = document.querySelector('.btnRight');
  btnRight.onclick = changeRightPrice;

  let a = 0;
  price.innerHTML = `${cardsData[a].price}`;

  function changeLeftPrice() {
    if (a < cardsData.length) {
      a++;
      price.innerHTML = `${cardsData[a].price}`;
    }
  }

  function changeRightPrice() {
    if (a >= 1) {
      a--;
      price.innerHTML = `${cardsData[a].price}`;
    }
  }




}
aaaa();