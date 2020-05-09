let cardsData = [{
    id: 1,
    imgUrl: './images/CartScreen/img-first.svg',
    imgUrlBig: './images/CartScreen/img-first-big.svg',
    textTop: 'Golden fruit jam',
    price: 10.99,
    amount: 1,
    inBasket: false
  },
  {
    id: 2,
    imgUrl: './images/CartScreen/img-second.svg',
    imgUrlBig: './images/CartScreen/img-second-big.svg',
    textTop: 'Golden fruit jam',
    price: 20.99,
    amount: 1,
    inBasket: true
  },
  {
    id: 3,
    imgUrl: './images/CartScreen/img-three.svg',
    imgUrlBig: './images/CartScreen/img-first-big.svg',
    textTop: 'Golden fruit jam',
    price: 30.99,
    amount: 2,
    inBasket: false
  },
]


let start = document.querySelector('.start');
start.onclick = fStart;
let newDiv = document.createElement('div');
let block = document.querySelector('.block');
let status = cardsData[0].inBasket


function fStart() {
  status = status == false ? true : false;

  if (status === true) {
    console.log('тут - true');
    block.innerHTML = `
    <div class="like"></div>
    `
    
  } else if (status === false) {
    console.log('тут - false');
    block.innerHTML = ''
  }
}

