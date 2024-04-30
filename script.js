document.addEventListener("DOMContentLoaded", function () {
    const productsContainer = document.getElementById("products-container");
  
    // Sample JSON data
    const jsonData = {
      "products": [
        {
          "id": 1,
          "name": "Product A",
          "price": 20
        },
        {
          "id": 2,
          "name": "Product B",
          "price": 30
          
        },
        {
          "id": 3,
          "name": "Product C",
          "price": 25
        }
      ]
    };
  
    // Display each product
    jsonData.products.forEach(product => {
      const productDiv = document.createElement("div");
      productDiv.classList.add("product");
  
      const productName = document.createElement("h3");
      productName.textContent = product.name;
  
      const productPrice = document.createElement("p");
      productPrice.textContent = `Price: $${product.price}`;
  
      productDiv.appendChild(productName);
      productDiv.appendChild(productPrice);
  
      productsContainer.appendChild(productDiv);
    });
  });
  