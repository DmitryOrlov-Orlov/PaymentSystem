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

function renderBlock() {
  let mainBlock = document.querySelector('.mainBlock');
  let divBlock = document.createElement('div');
  divBlock.innerHTML = `
      <input class="vvod" placeholder="Quantity" type="number">
      <button class="start">1</button>
      <div class="price"></div>
  `
  mainBlock.append(divBlock);

  blockChange();
}

function blockChange() {
  let inputChange = document.createElement('input');
  
}






renderBlock();