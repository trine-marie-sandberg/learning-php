const productsUrl = "http://localhost/flower-power/wordpress-6.0.1/wordpress/home/wp-json/wc/store/products";

async function getProducts(url) {
    const response = await fetch(url);
    const products = await response.json();
    console.log(products);
}

getProducts(productsUrl);