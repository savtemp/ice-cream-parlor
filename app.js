const iceCream = [{
    name: 'Cookie Dough',
    image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg',
    price: 1
}, {
    name: 'Vanilla',
    image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg',
    price: 1
}, {
    name: 'Strawberry',
    image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg',
    price: 2
}]

const vessels = [{
    name: 'Waffle Cone',
    image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg',
    price: 2
}, {
    name: 'Waffle Bowl',
    image: 'http://images.wbmason.com/350/L_JOY66050.jpg',
    price: 4
}, {
    name: 'Dipped Cone',
    image: 'https://media.istockphoto.com/photos/dark-chocolatedipped-waffle-cones-picture-id926010866?s=612x612',
    price: 5
}]

const toppings = [{
    name: 'Sprinkles',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg',
    price: 1
}, {
    name: 'Choclate Chips',
    image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360',
    price: 2
},{
    name: 'Gummy Worms',
    image: 'https://images.unsplash.com/photo-1499195333224-3ce974eecb47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z3VtbXklMjB3b3Jtc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    price: 3
}]


function drawToppings() {
    let toppingTemplate = ''
    toppings.forEach(topping => toppingTemplate += `
    <div class="col-3 select-bg text-center p-3 select-item" onclick="orderTopping('${topping.name}')">
        <img class="img-fluid"
        src="${topping.image}"
        alt="">
        <p class="mb-0 pt-2" >${topping.name} - <span>$${topping.price}</span></p>
    </div>`)
    // console.log(toppingTemplate);
    let toppingsElm = document.getElementById('toppings')
    toppingsElm.innerHTML = toppingTemplate
}
drawToppings()

function drawVessels() { 
    let vesselTemplate = ''
    vessels.forEach(vessel => vesselTemplate += `
    <div class="col-3 select-bg text-center p-3 select-item" onclick="orderVessel('${vessel.name}')">
        <img class="img-fluid"
        src="${vessel.image}"
        alt="">
        <p class="mb-0 pt-2">${vessel.name} - <span>$${vessel.price}</span></p>
    </div>`)
    let vesselsElm = document.getElementById('vessels')
    vesselsElm.innerHTML = vesselTemplate
}
drawVessels()

function drawIceCream() { 
    let iceCreamTemplate = ''
    iceCream.forEach(iceCream => iceCreamTemplate += `
    <div class="col-3 select-bg text-center p-3 select-item" onclick="orderIceCream('${iceCream.name}')">
        <img class="img-fluid"
        src="${iceCream.image}"
        alt="">
        <p class="mb-0 pt-2">${iceCream.name} - <span>$${iceCream.price}</span></p>
    </div>`)
    let iceCreamElm = document.getElementById('iceCreams')
    iceCreamElm.innerHTML = iceCreamTemplate
}
drawIceCream()

let orders = []

function drawOrders(){
    let ordersTemplate = ''
    orders.forEach((order, i) => ordersTemplate += `
    <div class="col-6">
        <p>${order.name}</p>
    </div>
    <div class="col-6 text-center">
        <p>$${order.price}</p>
    </div>`)
    // console.log(ordersTemplate);
    let orderElm = document.getElementById('order-items')
    orderElm.innerHTML = ordersTemplate
    drawTotal()
}

function drawTotal(){
    let subtotal = 0 
    orders.forEach(order => subtotal += order.price)
    console.log('subtotal', subtotal);
    let totalElm = document.getElementById('total')
    totalElm.innerHTML = subtotal.toFixed(2)
}

function orderTopping(selectedTopping){
    // console.log('ordering topping', selectedTopping)
    let foundTopping = toppings.find(topping => topping.name == selectedTopping)
    // console.log(foundTopping);
    orders.push(foundTopping)
    // console.log('current orders', orders);
    drawOrders()
}

function orderVessel(selectedVessel){
    // console.log('ordering vessel', selectedVessel)
    let foundVessel = vessels.find(vessel => vessel.name == selectedVessel)
    // console.log(foundVessel);
    orders.push(foundVessel)
    // console.log('current orders', orders);
    drawOrders()
}

function orderIceCream(selectedIceCream){
    // console.log('ordering ice cream', selectedIceCream)
    let foundIceCream = iceCream.find(iceCream => iceCream.name == selectedIceCream)
    // console.log(foundIceCream);
    orders.push(foundIceCream)
    // console.log('current orders', orders);
    drawOrders()
}

function pay(){
    orders = []
    drawOrders()
}

