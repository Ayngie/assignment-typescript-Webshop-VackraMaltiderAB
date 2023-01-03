import { CartItem } from "./models/CartItem";
import { calculateSubtotal, calculateTotal } from "./services/functions";
// localStorage.clear();

window.onload = function () {
  createHtml(productsInCart);
};

let emptyList: CartItem[] = [];

//hämta kundens lista av produkter från localstorage.
let productsInCart: CartItem[] = JSON.parse(
  localStorage.getItem("varukorg") || "[]"
);

//funktion för att visa upp varukorgen i html
export const createHtml = (productsInCart: CartItem[]) => {
  let container: HTMLDivElement = document.getElementById(
    "minKassaVarukorg"
  ) as HTMLDivElement; //hämta container för varukorgens produkter att läggas in i.

  container.innerHTML = ""; //rensa innehåll

  //labels
  let labelsContainer = document.createElement("div");

  let titleLabel = document.createElement("label");
  let imageLabel = document.createElement("label");
  let priceLabel = document.createElement("label");
  let quantityLabel = document.createElement("label");
  let subTotalLabel = document.createElement("label");

  labelsContainer.classList.add("labels");
  titleLabel.classList.add("product-title");
  imageLabel.classList.add("product-image");

  titleLabel.innerHTML = "Produktnamn";
  imageLabel.innerHTML = "Bild";
  priceLabel.innerHTML = "Pris";
  quantityLabel.innerHTML = "Antal";
  subTotalLabel.innerHTML = "Delsumma";

  labelsContainer.appendChild(titleLabel);
  labelsContainer.appendChild(imageLabel);
  labelsContainer.appendChild(priceLabel);
  labelsContainer.appendChild(quantityLabel);
  labelsContainer.appendChild(subTotalLabel);

  container.appendChild(labelsContainer);

  for (let i = 0; i < productsInCart.length; i++) {
    //skapa upp objekt i varukorg
    let productItem = document.createElement("div");

    let title = document.createElement("h3");
    let img = document.createElement("img");
    let price = document.createElement("p");
    let quantityContainer = document.createElement("div");
    let addOne = document.createElement("button");
    let quantity = document.createElement("p");
    let subtractOne = document.createElement("button");
    let productLinePrice = document.createElement("p");

    productItem.classList.add("product-item");
    title.classList.add("product-title");
    img.classList.add("product-image");
    quantityContainer.classList.add("quantity-container");
    addOne.classList.add("clickable");
    subtractOne.classList.add("clickable");

    title.innerHTML = productsInCart[i].product.title;
    img.src = productsInCart[i].product.imgUrl;
    img.alt = productsInCart[i].product.title;
    price.innerHTML = productsInCart[i].product.price + " kr";
    quantity.innerHTML = productsInCart[i].quantity.toString();
    addOne.innerHTML = "+";
    subtractOne.innerHTML = "-";

    quantity.innerHTML = productsInCart[i].quantity.toString();

    productLinePrice.innerHTML = calculateSubtotal(productsInCart[i]) + " kr"; //OBS! BEHÖVER UPPDATERING för att visa aktuell delsumma

    subtractOne.addEventListener("click", () => {
      console.log("You clicked on subtract one. ");
      // alert("You clicked on subtract one.");
      decreaseQuantityByOne(productsInCart[i]);
    });

    addOne.addEventListener("click", () => {
      console.log("You clicked on add one.");
      // alert("You clicked on add one.");
      increaseQuantityByOne(productsInCart[i]);
    });

    productItem.appendChild(title);
    productItem.appendChild(img);
    productItem.appendChild(price);

    quantityContainer.appendChild(subtractOne);
    quantityContainer.appendChild(quantity);
    quantityContainer.appendChild(addOne);
    productItem.appendChild(quantityContainer);

    productItem.appendChild(productLinePrice);

    container.appendChild(productItem);

    let totalText: HTMLHeadingElement = document.getElementById(
      "totalSum"
    ) as HTMLHeadingElement;
    let total = calculateTotal(productsInCart).toString();
    totalText.innerHTML = "Totalbelopp " + total + " kr";
  }
};

function decreaseQuantityByOne(product: CartItem) {
  console.log(product);
  if (product.quantity > 0) {
    let index = productsInCart.indexOf(product);
    productsInCart.splice(index, 1);
    product.quantity--;
    productsInCart.push(product);

    let savedCart = JSON.stringify(productsInCart);

    localStorage.setItem("varukorg", savedCart);
  }
  if (product.quantity === 0) {
    let index = productsInCart.indexOf(product);
    productsInCart.splice(index, 1);

    let savedCart = JSON.stringify(productsInCart);

    localStorage.setItem("varukorg", savedCart);
  }
  createHtml(productsInCart);
}

function increaseQuantityByOne(product: CartItem) {
  console.log(product);
  if (product.quantity > 0) {
    let index = productsInCart.indexOf(product);
    productsInCart.splice(index, 1);
    product.quantity++;
    productsInCart.push(product);

    let savedCart = JSON.stringify(productsInCart);

    localStorage.setItem("varukorg", savedCart);
  }
  createHtml(productsInCart);
}

//Betalning
let betalaButton = document.getElementById("btn-betala");
betalaButton?.addEventListener("click", () => {
  betala();
  localStorage.clear();
  createHtml(emptyList);
});

function betala() {
  confirm("Tack för din beställning!");
}
