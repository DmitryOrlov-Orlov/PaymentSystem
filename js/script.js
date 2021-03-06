var cardsData = [{
    id: 1,
    imgUrl: './images/CartScreen/img-first.svg',
    imgUrlBig: './images/CartScreen/img-first-big.svg',
    textTop: 'Golden fruit jam',
    price: 10.99,
    amount: 1,
    inBasket: true,
  },
  {
    id: 2,
    imgUrl: './images/CartScreen/img-second.svg',
    imgUrlBig: './images/CartScreen/img-second-big.svg',
    textTop: 'Golden fruit jam',
    price: 20.99,
    amount: 1,
    inBasket: false,
  },
  {
    id: 3,
    imgUrl: './images/CartScreen/img-three.svg',
    imgUrlBig: './images/CartScreen/img-first-big.svg',
    textTop: 'Golden fruit jam',
    price: 30.99,
    amount: 1,
    inBasket: true,
  },
  {
    id: 4,
    imgUrl: './images/CartScreen/img-fourth.svg',
    imgUrlBig: './images/CartScreen/img-first-big.svg',
    textTop: 'Golden fruit jam',
    price: 40.99,
    amount: 1,
    inBasket: false,
  },
  {
    id: 5,
    imgUrl: './images/CartScreen/img-fourth.svg',
    imgUrlBig: './images/CartScreen/img-first-big.svg',
    textTop: 'Golden fruit jam',
    price: 50.99,
    amount: 1,
    inBasket: false,
  }
]


function renderList() {
  let pagePath = window.location.pathname;
  let pathIndex = '/PaymentSystem/index.html';
  let pathCartScreen = '/PaymentSystem/CartScreen.html';

  if (pagePath === pathIndex) {
    /* условие для первой страницы */
    blockGllaryUl();
    listFirstButtonPrevNext();

  } else if (pagePath === pathCartScreen) {
    /* условие для второй страницы */
    blockScroll();
    sumPrice();
    quantityCards();
    blockDelete();
    blockChangeAmout();
  }
}

/* код первой старницы */
function blockGllaryUl() {
  let galleryUl = document.querySelector('.gallery-ul');
  if (galleryUl) {
    galleryUl.innerHTML = '';
    cardsData.forEach(element => {
      let bootleItem = createBottle(element);
      galleryUl.appendChild(bootleItem);
    })
  }
}

function createBottle(product) {
  let ilSpan = document.createElement('span');
  ilSpan.innerHTML = `
    <span class="gallery-block" >
      <div class="gallery-img" style="background-image:url(${product.imgUrlBig})"></div>
      <div class="like-block" data-id=${product.id}>
      <div class="like"></div>
      </div>      
    </span>  
  `
  return ilSpan;
}

function listFirstButtonPrevNext() {
  let galleryUl = document.querySelector('.gallery-ul');
  let blockWidth = 213;
  let position = 81;
  galleryUl.style.marginLeft = position + 'px';
  galleryUl.style.width = blockWidth * cardsData.length;
  let btnPrev = document.querySelector('.prev');
  btnPrev.onclick = buttonPrev;
  let listFirstPrice = document.querySelector('.price');
  let elementCard = 0;
  listFirstPrice.innerHTML = `${(cardsData[elementCard].price * cardsData[elementCard].amount.toFixed(2))}`;
  let btnNext = document.querySelector('.next');
  btnNext.onclick = buttonNext;
  let btnMinus = document.querySelector('.btnMinus');
  btnMinus.onclick = fMinus;
  let btnPlus = document.querySelector('.btnPlus');
  btnPlus.onclick = fPlus;
  let scoreboard = document.querySelector('.scoreboard');
  scoreboard.innerHTML = `Quantity ${cardsData[elementCard].amount}`
  



  let heart = document.querySelector('.heart');
  heart.onclick = fLike;
  
  let galleryBlock = document.querySelector('.like-block');
  galleryBlock.innerHTML = `
      <div class="like"></div>
      `
  let status = 1;
  function fLike() {
    
    status = status == true ? false : true;
    if (status == true) {
      console.log('тут = true');
      galleryBlock.innerHTML = `
      <div class="like"></div>
      `
      console.log(elementCard);
    } else if (status == false) {
      console.log('тут = false');
      galleryBlock.innerHTML = ''
    }
  }




  
  let add = 1;

  function fMinus() {
    if (add >= 1) {
      add--;
      cardsData[elementCard].amount = add;
      scoreboard.innerHTML = `Quantity ${cardsData[elementCard].amount}`
      listFirstPrice.innerHTML = `${(cardsData[elementCard].price * cardsData[elementCard].amount).toFixed(2)}`;
      console.log(add);
    }
  }

  function fPlus() {
    add++;
    cardsData[elementCard].amount = add;
    scoreboard.innerHTML = `Quantity ${cardsData[elementCard].amount}`
    console.log('лог в плюс ' + elementCard);
    console.log('лог в плюс ' + add);
    listFirstPrice.innerHTML = `${(cardsData[elementCard].price * cardsData[elementCard].amount).toFixed(2)}`

  }

  function buttonPrev() {
    if (position < 81) {
      position += blockWidth;
      galleryUl.style.marginLeft = position + 'px';
      if (elementCard > 0) {
        elementCard--;
        scoreboard.innerHTML = `Quantity ${cardsData[elementCard].amount}`;
        console.log(elementCard);
        add = cardsData[elementCard].amount;
        listFirstPrice.innerHTML = `${(cardsData[elementCard].price * cardsData[elementCard].amount).toFixed(2)}`;
       
      }
    }
  }

  function buttonNext() {
    let bias = 353;
    let restriction = (blockWidth * cardsData.length) - bias;
    if (position > -restriction) {
      position -= blockWidth;
      galleryUl.style.marginLeft = position + 'px';
      if (elementCard < cardsData.length) {
        elementCard++;
        scoreboard.innerHTML = `Quantity ${cardsData[elementCard].amount}`
        add = cardsData[elementCard].amount;
        listFirstPrice.innerHTML = `${(cardsData[elementCard].price * cardsData[elementCard].amount).toFixed(2)}`;
        console.log(elementCard); 
      }
    }
  }

}




/* код второй старницы */
function blockScroll() {
  let scroll = document.querySelector('.scroll');
  if (scroll) {
    scroll.innerHTML = '';
    cardsData.forEach(element => {
      let cardItem = createCard(element);
      scroll.appendChild(cardItem);
    })
  }
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

function blockChangeAmout() {
  const priceInputs = document.querySelectorAll('.quantity');
  priceInputs.forEach(input => {
    input.onchange = changeAmount;
  });

  function changeAmount(e) {
    const id = Number(e.target.getAttribute('data-id'));
    const amount = Number(e.target.value);
    cardsData.forEach(i => {
      if (id === i.id) {
        i.amount = amount;
      }
    });
    renderList();
  }
}

function blockDelete() {
  const deleteButtons = document.querySelectorAll('.cross');
  deleteButtons.forEach(button => {
    button.onclick = deleteItem;
  });

  function deleteItem(e) {
    const id = e.target.getAttribute('data-id');
    cardsData = cardsData.filter(i => Number(id) !== i.id);
    renderList();
  }
}

renderList();