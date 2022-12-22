import { Product } from "../ts/models/Product";

window.onload = function () {
  createHtml(productsInCart);
};

//hämta kundens lista av produkter från localstorage.
let productsInCart: Product[] = JSON.parse(
  localStorage.getItem("varukorg") || "[]"
);

//funktion för att visa upp varukorgen i html
const createHtml = (productsInCart: Product[]) => {
  let container: HTMLDivElement = document.getElementById(
    "min-varukorg"
  ) as HTMLDivElement; //hämta container för varukorgens produkter att läggas in i.

  container.innerHTML = ""; //rensa innehåll

  //labels
  let labelsContainer = document.createElement("div");

  let titleLabel = document.createElement("label");
  let descriptionLabel = document.createElement("label");
  let imageLabel = document.createElement("label");
  let priceLabel = document.createElement("label");
  let quantityLabel = document.createElement("label");
  let subTotalLabel = document.createElement("label");

  labelsContainer.classList.add("labels");
  titleLabel.classList.add("product-title");
  descriptionLabel.classList.add("product-description");
  descriptionLabel.classList.add("product-description-label");
  imageLabel.classList.add("product-image");
  priceLabel.classList.add("product-price"); //klass för senare styling
  quantityLabel.classList.add("product-quantity"); //klass för senare styling
  subTotalLabel.classList.add("product-line-price"); //klass för senare styling

  titleLabel.innerHTML = "Produktnamn";
  descriptionLabel.innerHTML = "Beskrivning";
  imageLabel.innerHTML = "Bild";
  priceLabel.innerHTML = "Pris";
  quantityLabel.innerHTML = "Antal";
  subTotalLabel.innerHTML = "Delsumma";

  labelsContainer.appendChild(titleLabel);
  labelsContainer.appendChild(descriptionLabel);
  labelsContainer.appendChild(imageLabel);
  labelsContainer.appendChild(priceLabel);
  labelsContainer.appendChild(quantityLabel);
  labelsContainer.appendChild(subTotalLabel);

  container.appendChild(labelsContainer);

  for (let i = 0; i < productsInCart.length; i++) {
    //skapa upp objekt i varukorg
    let productItem = document.createElement("div");

    let title = document.createElement("h3");
    let description = document.createElement("p");
    let img = document.createElement("img");
    let price = document.createElement("p");
    let quantityContainer = document.createElement("div");
    let addOne = document.createElement("button");
    let quantity = document.createElement("p");
    let subtractOne = document.createElement("button");
    let productLinePrice = document.createElement("p");

    productItem.classList.add("product-item");
    title.classList.add("product-title");
    description.classList.add("product-description");
    img.classList.add("product-image");
    price.classList.add("product-price"); //klass för senare styling
    quantityContainer.classList.add("quantity-container"); //klass för senare styling
    quantity.classList.add("product-quantity"); //klass för senare styling
    addOne.classList.add("add-one"); //klass för senare styling
    addOne.classList.add("clickable"); //klass för senare styling
    subtractOne.classList.add("subtract-one"); //klass för senare styling
    subtractOne.classList.add("clickable"); //klass för senare styling
    productLinePrice.classList.add("product-line-price"); //klass för senare styling

    title.innerHTML = productsInCart[i].title;
    description.innerHTML = productsInCart[i].description;
    img.src = productsInCart[i].imgUrl;
    img.alt = productsInCart[i].title;
    price.innerHTML = productsInCart[i].price + " kr";
    quantity.innerHTML = productsInCart[i].quantity.toString();
    addOne.innerHTML = "+";
    subtractOne.innerHTML = "-";
    //productsInCart[i].calculateSubtotal();
    productLinePrice.innerHTML = "0 kr"; //OBS! BEHÖVER UPPDATERING för att visa aktuell delsumma

    addOne.addEventListener("click", () => {
      console.log("You clicked on add one.");
      alert("You clicked on add one.");
      // FUNKTION för att öka
      // increaseQuantityByOne();
    });

    subtractOne.addEventListener("click", () => {
      console.log("You clicked on subtract one. ");
      alert("You clicked on subtract one.");
      // FUNKTION för att minska
      // decreaseQuantityByOne();
    });

    productItem.appendChild(title);
    productItem.appendChild(description);
    productItem.appendChild(img);
    productItem.appendChild(price);

    quantityContainer.appendChild(subtractOne);
    quantityContainer.appendChild(quantity);
    quantityContainer.appendChild(addOne);
    productItem.appendChild(quantityContainer);

    productItem.appendChild(productLinePrice);

    container.appendChild(productItem);
  }
};

function calculateTotal() {
  let total = 0;
  for (let i = 0; i < productsInCart.length; i++) {
    total += Number(productsInCart[i].price);
  }
  return total;
}
