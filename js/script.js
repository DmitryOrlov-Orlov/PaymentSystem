var cardsData = [{
    id: 1,
    imgUrl: './images/CartScreen/img-first.svg',
    imgUrlBig: './images/CartScreen/img-first-big.svg',
    textTop: 'Golden fruit jam',
    price: 11.99,
    amount: 1
  },
  {
    id: 2,
    imgUrl: './images/CartScreen/img-second.svg',
    imgUrlBig: './images/CartScreen/img-first-big.svg',
    textTop: 'Golden fruit jam',
    price: 8.00,
    amount: 1
  },
  {
    id: 3,
    imgUrl: './images/CartScreen/img-three.svg',
    imgUrlBig: './images/CartScreen/img-first-big.svg',
    textTop: 'Golden fruit jam',
    price: 11.99,
    amount: 2
  },
  {
    id: 4,
    imgUrl: './images/CartScreen/img-fourth.svg',
    imgUrlBig: './images/CartScreen/img-first-big.svg',
    textTop: 'Golden fruit jam',
    price: 10.00,
    amount: 3
  },
  {
    id: 5,
    imgUrl: './images/CartScreen/img-fourth.svg',
    imgUrlBig: './images/CartScreen/img-first-big.svg',
    textTop: 'Golden fruit jam',
    price: 15.00,
    amount: 5
  }
]

console.log(window.location.pathname);

let pagePath = window.location.pathname;
let pathIndex = '/PaymentSystem/index.html';
let pathCartScreen = '/PaymentSystem/CartScreen.html';

if (pagePath == pathIndex) {
  console.log('dfsd');
} else if (pagePath == pathCartScreen) {
  console.log('1111111111111');
}




let gallerUL = document.querySelector('.gallery-ul');
let blockWidth = 217;
let position = 81;

gallerUL.style.marginLeft = position + 'px';
gallerUL.style.width = blockWidth * cardsData.length;
let btnPrev = document.querySelector('.prev');
btnPrev.onclick = funcPrev;

function funcPrev() {
  if (position < 81) {
    position += blockWidth;
    gallerUL.style.marginLeft = position + 'px';
  }
}

let btnNext = document.querySelector('.next');
btnNext.onclick = funcNext;

function funcNext() {
  let bias = 353;
  let restriction = (blockWidth * cardsData.length) - bias;
  if (position > -restriction) {
    position -= blockWidth;
    gallerUL.style.marginLeft = position + 'px';
  }
}

function createBottle(product) {
  let ilSpan = document.createElement('span');
  ilSpan.innerHTML = `
      <span class="gallery-block">
        <div class="gallery-img" style="background-image:url(${product.imgUrlBig})"></div>
        <span class="like"></span>
      </span>  
    `
  return ilSpan;
}

function createCard(product) {
  var rectangle = document.createElement('div');
  rectangle.innerHTML = `
    <div class='rectangle'>
      <span class='repeated-img' style="background-image:url(${product.imgUrl}"></span>
      <span class='repeated-text'>
        <span class='text-top'>${product.textTop}</span>
        <span class='text-bottom'>Quantity ${product.amount} Bottle</span>
      </span>
      <input class='quantity' placeholder=1 value='${product.amount}' type='number' data-id=${product.id}></input>
      <span class='quantity-price'>$${(product.price * product.amount).toFixed(2)}</span>
      <button class='cross' data-id=${product.id}></button>
    </div>
  `
  return rectangle;
}

function renderList() {

  let galleryUl = document.querySelector('.gallery-ul');

  if (galleryUl) {
    galleryUl.innerHTML = '';

    cardsData.forEach(element => {
      let bootleItem = createBottle(element);
      galleryUl.appendChild(bootleItem);
    })
  }

  let scroll = document.querySelector('.scroll');
  if (scroll) {
    scroll.innerHTML = '';

    cardsData.forEach(element => {
      let cardItem = createCard(element);
      scroll.appendChild(cardItem);

    })
  }

  const deleteButtons = document.querySelectorAll('.cross');
  deleteButtons.forEach(button => {
    button.onclick = deleteItem;
  });

  const priceInputs = document.querySelectorAll('.quantity');
  priceInputs.forEach(input => {
    input.onchange = changeAmount;
  });

  sumPrice();

  quantityCards();
}

function changeAmount(e) {
  const id = Number(e.target.getAttribute('data-id'));
  const amount = Number(e.target.value);
  console.log(e);
  /* let cardItem = cardsData.find(i => id === i.id); */
  cardsData.forEach(i => {
    if (id === i.id) {
      i.amount = amount;
    }
  });
  renderList();
}

function deleteItem(e) {
  const id = e.target.getAttribute('data-id');
  cardsData = cardsData.filter(i => Number(id) !== i.id);
  renderList();
}

function sumPrice() {
  var totalPriceElement = document.querySelector('.total-price');
  const sumValue = cardsData.reduce((total, person) => {
    return total + (person.price * person.amount);
  }, 0);
  totalPriceElement.innerHTML = `$${sumValue.toFixed(2)}`;
}

function quantityCards() {
  var quantityItemAdded = document.querySelector('.upper-item-added');
  var quantityElements = document.querySelector('.scroll').children.length;
  quantityItemAdded.innerHTML = `${quantityElements} Item added`;
}

renderList();