var products = [
  {
    name: "Chair",
    headline: "Brown wooden chair with white fabric",
    price: "$45",
    image:
      "https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2hhaXJ8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Gaming Chair",
    headline: "Gangster vibe black gaming chair",
    price: "$245",
    image:
      "https://images.unsplash.com/photo-1612011213721-3936d387f318?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGdhbWluZyUyMGNoYWlyfGVufDB8fDB8fHww",
  },
  {
    name: "PS 5",
    headline: "PS5 in blue and purple color",
    price: "$450",
    image:
      "https://images.unsplash.com/photo-1607016284318-d1384bf5edd1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2FtaW5nJTIwc3lzdGVtfGVufDB8fDB8fHww",
  },
];

var popular = [
  {
    name: "White T-Shirt",
    headline: "White half sleeve T-Shirt",
    price: "$15",
    image:
      "https://media.istockphoto.com/id/1392944438/photo/portrait-of-handsome-attractive-positive-curly-haired-indian-or-arabian-guy-wearing-white.jpg?s=612x612&w=0&k=20&c=i2PJ9QFenv2dCaORkN5AYuiLz3UYzMiqNXeAgqumsxY=",
  },
  {
    name: "Black T-Shirt",
    headline: "White half sleeve T-Shirt",
    price: "$20",
    image:
      "https://media.istockphoto.com/id/1093999178/photo/young-handsome-man-isolated-on-gray-textured-wall-smiling-while-pointing-with-index-finger-to.jpg?s=612x612&w=0&k=20&c=aWWGm-GcKc-hL8dl1RUaO41JE-cKZdT9AF8QD7jDgwc=",
  },
  {
    name: "Blue T-Shirt",
    headline: "Blue half sleeve T-Shirt",
    price: "$10",
    image:
      "https://media.istockphoto.com/id/1249420269/photo/young-smiling-handsome-man-in-casual-clothes-posing-isolated-on-blue-wall-background-studio.jpg?s=612x612&w=0&k=20&c=fr9I2Et7ApAJ9WSuZZRh83wpq_KoKtLXhoFvlfmffe8=",
  },
];

var cart = [];

function addProduct() {
  var clutter = "";
  products.forEach(function (product, index) {
    clutter += `<div class="product w-fit rounded-xl p-2 bg-white">
                <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden">
                <img class="w-full h-full object-cover" src="${product.image}" />
                </div>
                <div class="data w-full px-2 py-5">
                    <h1 class="font-semibold text-xl leading-none tracking-tight">${product.name}</h1>
                    <div class="flex justify-between w-full items-center mt-2">
                        <div class="w-1/2">
                            <h3 class="font-semibold opacity-20">${product.headline}</h3>
                            <h4 class="font-semibold mt-2">${product.price}</h4>
                        </div>
                        <button data-index="${index}" class="add w-10 h-10 rounded-full shader text-yellow-400"><i data-index="${index}" class="add ri-add-line"></i></button>
                    </div>
                </div>
            </div>`;
  });

  document.querySelector(".products").innerHTML = clutter;
}

function addPopularProducts() {
  var clutter = "";
  popular.forEach(function (product) {
    clutter += `<div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
                    <div class="w-20 h-20 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
                        <img class="w-full h-full object-cover" src="${product.image}" />
                    </div>
                    <div class="data py-2 w-full">
                        <h1 class="leading-none font-semibold">${product.name}</h1>
                        <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${product.headline}</h4>
                        <h4 class="mt-3 font-semibold text-zinc-500">${product.price}</h4>
                    </div>
                </div>`;
  });

  document.querySelector(".populars").innerHTML = clutter;
}

function addTOCart() {
  document
    .querySelector(".products")
    .addEventListener("click", function (details) {
      if (details.target.classList.contains("add")) {
        cart.push(products[details.target.dataset.index]);
        console.log(cart);
      }
    });
}

function showCart() {
  document.querySelector(".carticon").addEventListener("click", function () {
    document.querySelector(".cartexpnd").style.display = "block";

    var clutter = "";
    cart.forEach(function (prod, index) {
      clutter += `<div class="flex gap-2 bg-white p-2 rounded-lg">
            <div class="w-10 h-10 flex-shrink-0 rounded-lg overflow-hidden">
                <img class="w-full h-full object-cover" src="${prod.image}" />
            </div>
            <div>
            <h3 class="font-semibold">${prod.name}</h3>
            <h5 class="text-sm font-semibold opacity-80">${prod.price}</h5>
            </div>
            </div>`;
    });
    document.querySelector(".cartexpnd").innerHTML = clutter;
  });
}

addProduct();
addPopularProducts();
addTOCart();
showCart();
