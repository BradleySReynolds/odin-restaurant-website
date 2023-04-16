const productsList = [
  {
    id: 1,
    name: "Fresh Spinich Mushroom Pizza",
    ingredients: [
      "Mozzerella",
      "Tomato Sauce",
      "Mini Tomatoes",
      "Black Olives",
      "Spinach",
      "Mushrooms",
    ],
    price: "$8.99",
    image: "../images/pizza1.png",
  },
  {
    id: 2,
    name: "Pepperoni Pizza",
    ingredients: ["Mozzerella", "Tomato Sauce", "Pepperoni"],
    price: "$8.99",
    image: "../images/pizza2.png",
  },
  {
    id: 3,
    name: "Spinach Pizza",
    ingredients: ["Mozzerella", "Tomato Sauce", "Spinach"],
    price: "$8.99",
    image: "../images/pizza4.png",
  },
  {
    id: 4,
    name: "Mediterranean Pizza",
    ingredients: ["Tomato Sauce", "Mini Tomatoes", "Black Olives", "Spinach"],
    image: "../images/pizza5.png",
    price: "$8.99",
  },
];

export const menu = `  <section id="menu">
                                <div>
                                    <h2>${productsList[0].name}</h2>
                                    <img src=${
                                      productsList[0].image
                                    } alt="Image of Pizza">
                                    <h4>Ingredients</h4>
                                    <p>${productsList[0].ingredients.join(
                                      ", "
                                    )}</p>
                                    <p>${productsList[0].price}</p>
                                </div>
                                <div>
                                    <h2>${productsList[1].name}</h2>
                                    <img src=${
                                      productsList[1].image
                                    } alt="Image of Pizza">
                                    <h4>Ingredients</h4>
                                    <p>${productsList[1].ingredients.join(
                                      ", "
                                    )}</p>
                                    <p>${productsList[1].price}</p>
                                </div>
                                <div>
                                    <h2>${productsList[2].name}</h2>
                                    <img src=${
                                      productsList[2].image
                                    } alt="Image of Pizza">
                                    <h4>Ingredients</h4>
                                    <p>${productsList[2].ingredients.join(
                                      ", "
                                    )}</p>
                                    <p>${productsList[2].price}</p>
                                </div>
                                <div>
                                    <h2>${productsList[3].name}</h2>
                                    <img src=${
                                      productsList[3].image
                                    } alt="Image of Pizza">
                                    <h4>Ingredients</h4>
                                    <p>${productsList[3].ingredients.join(
                                      ", "
                                    )}</p>
                                    <p>${productsList[3].price}</p>
                                </div>
                            </section> `;
