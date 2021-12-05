let url = 'https://my-json-server.typicode.com/inesssik/Second-Group-MiddleJS/db'
let $productPrice = document.querySelector('.product_price')

fetch(url).then(response => {
    return response.json()
}).then(data => {
    $productPrice.textContent = data.products[0].productPrice
})



