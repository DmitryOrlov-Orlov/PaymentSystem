var cardsData = [{
    imgUrl: './images/CartScreen/first-img.svg',
    textTop: 'Golden fruit jam',
    textBottom: 'Quantity 01 Bottle',

    price: '$10.99'
  },
  {
    imgUrl: './images/CartScreen/second-img.svg',
    textTop: 'Golden fruit jam',
    textBottom: 'Quantity 01 Bottle',
    price: '$08.00'
  },
  {
    imgUrl: './images/CartScreen/third-img.svg',
    textTop: 'Golden fruit jam',
    textBottom: 'Quantity 01 Bottle',
    price: '$11.50'
  },
  {
    imgUrl: './images/CartScreen/fourth-img.svg',
    textTop: 'Golden fruit jam',
    textBottom: 'Quantity 01 Bottle',
    price: '$08.00'
  },
  {
    imgUrl: './images/CartScreen/fifth-img.svg',
    textTop: 'Golden fruit jam',
    textBottom: 'Quantity 01 Bottle',
    price: '$11.50'
  },
  {
    imgUrl: './images/CartScreen/fifth-img.svg',
    textTop: 'Golden fruit jam',
    textBottom: 'Quantity 01 Bottle',
    price: '$11.50'
  }
];






var makeElement = function (tageName, className, text){
  var element = document.createElement(tageName);
  element.classList.add(className);

  if(text){
    element.textContent = text;
  }
  return element;
}

var funcPrice = function(tageName, className, text){
  var element = document.createElement(tageName);
  element.classList.add(className);

  if(text){

  }
}

var createCard = function(product){
  var rectangle = makeElement('div', 'rectangle');           
                         
  var repeatedImgFirst = makeElement('img', 'repeated-img-first');
  repeatedImgFirst.src = product.imgUrl;
  rectangle.appendChild(repeatedImgFirst);
  
  var repeatedText = makeElement('span', 'repeated-text');
  rectangle.appendChild(repeatedText);
  
  var textTop = makeElement('span', 'text-top', product.textTop);
  repeatedText.appendChild(textTop);
  
  var textBottom = makeElement('span', 'text-bottom', product.textBottom);
  repeatedText.appendChild(textBottom);
  
  var quantity = makeElement('input', 'quantity'); 
  quantity.value = '1';
  quantity.type = 'number';
  rectangle.appendChild(quantity);
  
  var quantityPrice = makeElement('span', 'quantity-price', product.price);

  rectangle.appendChild(quantityPrice);
  
  var cross = makeElement('button', 'cross');
  rectangle.appendChild(cross);

  return rectangle;
}

var scroll = document.querySelector('.scroll');     
for (var i = 0; i < cardsData.length; i++){
  var cardItem = createCard(cardsData[i]);
  scroll.appendChild(cardItem);
} 