let url = 'https://my-json-server.typicode.com/inesssik/Second-Group-MiddleJS/db'
let $products_grid = document.querySelector('#products_grid')
fetch(url).then(response => {
    return response.json()
}).then(data => {
    for(let i = 0; i < data.products.length; i++){
        $products_grid.innerHTML += `<div class='product_item'>
                                        <p class='product_name'>${data.products[i].productName}</p>
                                        <p class='product_model'>${data.products[i].productModel}</p>
                                        <p class='product_price'>${data.products[i].productPrice}</p>
                                    </div>`
    }
{
    
}
})

