let productGrid = document.getElementById("products-grid")
let productsArray = []
let url = 'https://middleweb-1249.restdb.io/rest'

let my_headers ={
    "content-type":"aplication/json",
    "x-apikey":"676830dbe70533d1bb3584f4",
    "cache-control":"no-cache"
}

fetch(url+ '/product', {
    method:"GET",
    headers:my_headers
})


 .then(async function(responce) {
    productsArray = await responce.json()
        console.log(productsArray)
        productGrid.innerHTML = null
      productsArray.forEach(p => {
            productsArray.push(p);
            let pElem = document.createElement('div')
            pElem.classList.add('product')
            pElem.innerHTML = `
            <h2 class="product-name">${p.name}</h2>
            <img class="product-photo" src="${p.photo_url}">
            <p class="product-price"> Price: ${p.price}</p>
            <p class = "product-description">Description:${p.description}</p>
            <button>Buy</button>
            `
            productGrid.append(pElem)
        })
    
})
