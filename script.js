let url = 'https://my-json-server.typicode.com/inesssik/Second-Group-MiddleJS/db'
let $products_grid = document.querySelector('#products_grid')
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
                                        <p class='product_price'>Price: ${data.products[i].productPrice}</p>
                                        <a href="userProfile.html?id=${userId}" class='sellerId'>Seller: ${userName}</a>
                                        <img class='product_photo' src='${data.products[i].productPhoto}' alt=''>
                                        <button class='button' onclick='addToCart(${data.products[i].productId})'>Buy</button>
                                    </div>`
    }
{
    
}
})

function addToCart(id){
    console.log(id)
}

