let url = 'https://my-json-server.typicode.com/inesssik/Second-Group-MiddleJS/db'
let cart = []
let $cartProducts = document.getElementById('cart_products')
let $products_grid = document.querySelector('#products_grid')
let product = []

fetch(url).then(response => {
    return response.json()
}).then(data => {
    for(let i = 0; i < data.products.length; i++){

    let userName = ""
    let userId = 0

        for(let j = 0; j < data.users.length; j++){
                if(data.users[j].id == data.products[i].sellerId){
                    userName = data.users[j].name
                    userId = data.users[j].id
                }
        }

        $products_grid.innerHTML += `<div class='product_item'>
                                        <p class='product_name'>Name: ${data.products[i].productName}</p>
                                        <p class='product_model'>Model: ${data.products[i].productModel}</p>
                                        <p class='product_price'>Price: ${data.products[i].productPrice}UAH</p>
                                        <a href="userProfile.html?id=${userId}" class='sellerId'>Seller: ${userName}</a>
                                        <img class='product_photo' src='${data.products[i].productPhoto}' alt=''>
                                        <button class='button' onclick='addToCart(${data.products[i].productId})'>Buy</button>
                                    </div>`
    }

    product = data.products
    
})

$cartProducts.addEventListener('click', openCart())

function openCart(){
    $cartProducts.classList.toggle('hide')
}

function addToCart(id){
    tempProduct = product.find(function(p){
        return p.productId == id
    })

    cart.push(tempProduct)
    drawCartProducts()

    localStorage.setItem("cart", JSON.stringify(cart))

    $cartProducts.classList.add('active')
    setTimeout(() => {
        $cartProducts.classList.remove('active')
    }, 500);
}

function drawCartProducts() {
    if(cart.length === 0) return $cartProducts.innerHTML = 'Cart is empty'
    $cartProducts.innerHTML = null
    let sum = 0
    cart.forEach(function(p){
        $cartProducts.innerHTML += `
            <p><img src="${p.productPhoto}">${p.productName} |${p.productPrice}</p>
            <hr>
            `
            sum += parseInt(p.productPrice)
    })
    $cartProducts.innerHTML += `
        <p>Total price = ${sum}UAH</p>
        <button onclick="buyAll()>Buy All</button>
    `
}


