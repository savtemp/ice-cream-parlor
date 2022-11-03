const iceCream = [
  {
    name: "Cookie Dough",
    image:
      "https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg",
    price: 1,
    quantity: 0,
  },
  {
    name: "Vanilla",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg",
    price: 1,
    quantity: 0,
  },
  {
    name: "Strawberry",
    image:
      "https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg",
    price: 2,
    quantity: 0,
  },
];

const vessels = [
  {
    name: "Waffle Cone",
    image: "https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg",
    price: 2,
    quantity: 0,
  },
  {
    name: "Waffle Bowl",
    image: "http://images.wbmason.com/350/L_JOY66050.jpg",
    price: 4,
    quantity: 0,
  },
  {
    name: "Dipped Cone",
    image:
      "https://media.istockphoto.com/photos/dark-chocolatedipped-waffle-cones-picture-id926010866?s=612x612",
    price: 5,
    quantity: 0,
  },
];

const toppings = [
  {
    name: "Sprinkles",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg",
    price: 1,
    quantity: 0,
  },
  {
    name: "Chocolate Chips",
    image:
      "https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360",
    price: 2,
    quantity: 0,
  },
  {
    name: "Gummy Worms",
    image:
      "https://images.unsplash.com/photo-1499195333224-3ce974eecb47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z3VtbXklMjB3b3Jtc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    price: 3,
    quantity: 0,
  },
];

// NOTE set up for the dictionary

// let cart = {
// iceCream:[
//   {
//     name: "Cookie Dough",
//     image:
//       "https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg",
//     price: 1,
//     quantity: null,
//   },
//   {
//     name: "Vanilla",
//     image:
//       "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg",
//     price: 1,
//     quantity: null,
//   },
//   {
//     name: "Strawberry",
//     image:
//       "https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg",
//     price: 2,
//     quantity: null,
//   },
// ],

// vessels:[
//   {
//     name: "Waffle Cone",
//     image: "https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg",
//     price: 2,
//     quantity: null,
//   },
//   {
//     name: "Waffle Bowl",
//     image: "http://images.wbmason.com/350/L_JOY66050.jpg",
//     price: 4,
//     quantity: null,
//   },
//   {
//     name: "Dipped Cone",
//     image:
//       "https://media.istockphoto.com/photos/dark-chocolatedipped-waffle-cones-picture-id926010866?s=612x612",
//     price: 5,
//     quantity: null,
//   },
// ],

// toppings:[
//   {
//     name: "Sprinkles",
//     image: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg",
//     price: 1,
//     quantity: null,
//   },
//   {
//     name: "Chocolate Chips",
//     image:
//       "https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360",
//     price: 2,
//     quantity: null,
//   },
//   {
//     name: "Gummy Worms",
//     image:
//       "https://images.unsplash.com/photo-1499195333224-3ce974eecb47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z3VtbXklMjB3b3Jtc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
//     price: 3,
//     quantity: null,
//   },
// ],
// }

function drawToppings() {
  let toppingTemplate = "";
  toppings.forEach(
    (topping) =>
      (toppingTemplate += `
    <div class="col-3 select-bg text-center p-3 select-item" onclick="orderTopping('${topping.name}')">
        <img class="img-fluid"
        src="${topping.image}"
        alt="">
        <p class="mb-0 pt-2" >${topping.name} - <span>$${topping.price}</span></p>
    </div>`)
  );
  // console.log(toppingTemplate);
  let toppingsElm = document.getElementById("toppings");
  // @ts-ignore
  toppingsElm.innerHTML = toppingTemplate;
}
drawToppings();

// NOTE this is how we would draw the items if we wanted to pull from the dictionary - this would prevent us from having to create 3 separate functions to draw each thing

// function drawStore(){
//   for(const key in cart){
//     let items = cart[key]
//     let template = ''
//     items.forEach(item => template += `
//     <div class="col-3 select-bg text-center p-3 select-item" onclick="orderTopping('${item.name}')">
//         <img class="img-fluid"
//         src="${item.image}"
//         alt="">
//         <p class="mb-0 pt-2" >${item.name} - <span>$${item.price}</span></p>
//     </div>
//     `)
//   }
// }

function drawVessels() {
  let vesselTemplate = "";
  vessels.forEach(
    (vessel) =>
      (vesselTemplate += `
    <div class="col-3 select-bg text-center p-3 select-item" onclick="orderVessel('${vessel.name}')">
        <img class="img-fluid"
        src="${vessel.image}"
        alt="">
        <p class="mb-0 pt-2">${vessel.name} - <span>$${vessel.price}</span></p>
    </div>`)
  );
  let vesselsElm = document.getElementById("vessels");
  // @ts-ignore
  vesselsElm.innerHTML = vesselTemplate;
}
drawVessels();

function drawIceCream() {
  let iceCreamTemplate = "";
  iceCream.forEach(
    (iceCream) =>
      (iceCreamTemplate += `
    <div class="col-3 select-bg text-center p-3 select-item" onclick="orderIceCream('${iceCream.name}')">
        <img class="img-fluid"
        src="${iceCream.image}"
        alt="">
        <p class="mb-0 pt-2">${iceCream.name} - <span>$${iceCream.price}</span></p>
    </div>`)
  );
  let iceCreamElm = document.getElementById("iceCreams");
  // @ts-ignore
  iceCreamElm.innerHTML = iceCreamTemplate;
}
drawIceCream();

let orders = [];

function drawOrders() {
  let ordersTemplate = "";
  orders.forEach(
    (order, i) =>
      (ordersTemplate += `
      <div class="row order-color">
        <div class="col-4 ">
            <p>${order.name}</p>
        </div>
        <div class="col-4 text-center" id="quantity">
            <p>${order.quantity}</p>
        </div>
        <div class="col-4  text-center">
            <p>$${order.price}</p>
        </div>
      </div>
    `)
  );
  // console.log(ordersTemplate);
  //   NOTE this didn't work how I wanted to - trying to remove duplicate items from the array
  //   let drawnOrders = orders;
  //   let i = orders.indexOf(drawnOrders);
  //   if (i != -1) {
  //     orders.splice(i, 1);
  //   }
  //   if (orders.length != 0) {
  //     // @ts-ignore
  //     document.getElementById("order-items").innerHTML = ordersTemplate;
  //     orderElm.innerHTML = ordersTemplate;
  //   }
  let orderElm = document.getElementById("order-items");
  // @ts-ignore
  orderElm.innerHTML = ordersTemplate;
  console.log("Orders", orders);
  drawTotal();
  //   drawQuantity();
}

// NOTE we potentially would need to draw each order item because it is iterating through its own array (if we put these in a dictionary then we could use just one function)
// function drawIceCreamOrder() {
//   let template = "";
//   iceCream.forEach((i) => {
//     if (i.quantity > 0) {
//       console.log("drawing cart", i);
//       template += `
//       <div class="row order-color">
//         <div class="col-4 ">
//             <p>${i.name}</p>
//         </div>
//         <div class="col-4 text-center" id="quantity">
//             <p>${i.quantity}</p>
//         </div>
//         <div class="col-4  text-center">
//             <p>$${i.price}</p>
//         </div>
//       </div>
//       `;
//     }
//     // @ts-ignore
//     document.getElementById("iceCreamOrder").innerHTML = template;
//     drawTotal();
//   });
// }

// NOTE function to draw cart if you were using a dictionary
// FIXME this will need an if statement to adjust quantity
// function drawCart() {
//   for (const key in cart) {
//     let orderedItems = cart[key];
//     let template = "";
//     orderedItems.forEach(
//       (oi) =>
//         (template += `
//     <div class="row order-color">
//         <div class="col-4 ">
//             <p>${oi.name}</p>
//         </div>
//         <div class="col-4 text-center" id="quantity">
//             <p>${oi.quantity}</p>
//         </div>
//         <div class="col-4  text-center">
//             <p>$${oi.price}</p>
//         </div>
//       </div>
//     `)
//     );
//     // @ts-ignore
//     document.getElementById("cart").innerHTML = template;
//   }
// }

function drawTotal() {
  let subtotal = 0;
  orders.forEach((order) => (subtotal += order.price));
  //   console.log("subtotal", subtotal);
  let totalElm = document.getElementById("total");
  // @ts-ignore
  totalElm.innerHTML = subtotal.toFixed(2);
}

// NOTE this works but may be the hard way of doing it
// function drawQuantity() {
//   let quantity = 0;
//   orders.forEach((order) => quantity++);
//   console.log("quantity", quantity);
//   let quantElm = document.getElementById("quantity");
//   // @ts-ignore
//   quantElm.innerHTML = quantity;
// }

// TODO add a if statement for quantity that will prevent the items from repeating - right now the quantity is drawing the correct number it continues to draw the entire object so you end up with repeats
function orderTopping(selectedTopping) {
  // console.log('ordering topping', selectedTopping)
  let foundTopping = toppings.find(
    (topping) => topping.name == selectedTopping
  );
  // console.log(foundTopping);
  // @ts-ignore
  foundTopping.quantity++;
  orders.push(foundTopping);
  // console.log('current orders', orders);
  drawOrders();
}

function orderVessel(selectedVessel) {
  // console.log('ordering vessel', selectedVessel)
  let foundVessel = vessels.find((vessel) => vessel.name == selectedVessel);
  // console.log(foundVessel);
  // @ts-ignore
  foundVessel.quantity++;
  orders.push(foundVessel);
  // console.log('current orders', orders);
  drawOrders();
}

function orderIceCream(selectedIceCream) {
  // console.log('ordering ice cream', selectedIceCream)
  let foundIceCream = iceCream.find(
    (iceCream) => iceCream.name == selectedIceCream
  );
  // console.log(foundIceCream);
  // @ts-ignore
  foundIceCream.quantity++;
  orders.push(foundIceCream);
  // console.log('current orders', orders);
  drawOrders();
}

function pay() {
  orders = [];
  drawOrders();
}

// NOTE this function will reset the template if you're adding more than one
// function resetTemplate(){
//     let template = ""
//     document.getElementById("order-items")
// }
