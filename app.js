
let cart = [];


function addToCart(item) {
    cart.push(item);
    alert(`${item.name} has been added to your cart!`);
    console.log(cart);
}


function init() {
 
    const addToCartButtons = document.querySelectorAll('.add.to.cart');

    // Add click event listeners to each button
    addToCartButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const products = [
                { name: 'Sony a7iii', price: 94999 },
                { name: 'Canon 700D', price: 30000 },
                { name: 'Nikon Z50', price: 52500 },
            ];
            addToCart(products[index]);
        });
    });
}

document.addEventListener('DOMContentLoaded', init);
