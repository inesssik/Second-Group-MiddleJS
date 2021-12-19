const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

let profile = document.getElementById('profile');
let productsGrid = document.getElementById('user_products_grid');

let url = "https://my-json-server.typicode.com/inesssik/Second-Group-MiddleJS"

//User details request
let userRequest = new XMLHttpRequest();

userRequest.open('GET', `${url}/users/${id}`);

userRequest.responseType = 'json'
userRequest.onload = function() {
    let user = userRequest.response;
    profile.innerHTML = `
        <h1>${user.name}</h1>
        <h2>${user.surname}</h2>
        <img class="profile_img" src="${user.sellerPhoto}" alt="">
    `
}

userRequest.send();

let productsRequest = new XMLHttpRequest()
productsRequest.open('GET', `${url}/products?sellerId=${id}`)
productsRequest.responseType = 'json'
productsRequest.onload = () => {
    let products = productsRequest.response
    productsGrid.innerHTML = null
    products.forEach(element => {
        productsGrid.innerHTML += `
            <div class="product">
                <h2 class="product_name">${element.productName}</h2>
                <img class="product_photo" src="${element.productPhoto}">
                <h2 class="product_price">Price: ${element.productPrice}</h2>
                <h2 class="product_description">${element.productDescription}</h2>
        `
    });
}

productsRequest.send()
