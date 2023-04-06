document.addEventListener('DOMContentLoaded', function() {
  const cartItems = document.querySelector('.cart-items');
  const cartTotal = document.querySelector('.cart-total');
  const checkoutBtn = document.querySelector('.checkout-btn');
  const productBtns = document.querySelectorAll('.add-to-cart');

  let cart = [];

  productBtns.forEach(btn => {
    btn.addEventListener('click', addToCart);
  });

  function addToCart(event) {
    const name = event.target.dataset.name;
    const price = event.target.dataset.price;

    const item = {
      name: name,
      price: price,
      qty: 1
    };

    for (let i = 0; i < cart.length; i++) {
      if (cart[i].name === name) {
        cart[i].qty++;
        console.log(`Increased quantity of ${name} to ${cart[i].qty}`);
        showCart();
        return;
      }
    }

    cart.push(item);
    console.log(`Added ${name} to cart`);
    showCart();
  }

  function removeFromCart(name) {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].name === name) {
        cart[i].qty--;
        console.log(`Decreased quantity of ${name} to ${cart[i].qty}`);

        if (cart[i].qty === 0) {
          cart.splice(i, 1);
          console.log(`Removed ${name} from cart`);
        }

        showCart();
        return;
      }
    }
  }

  function showCart() {
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
      const li = document.createElement('li');
      li.innerText = `${item.name} x ${item.qty} - €${item.price}`;
      cartItems.appendChild(li);

      total += parseFloat(item.price) * item.qty;
    });

    console.log(`Total: ${total}`);
    cartTotal.innerText = `Total: €${total.toFixed(2)}`;
  }
  
const scrollContainer = document.querySelector('.product-section');

scrollContainer.addEventListener('wheel', (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});
checkoutBtn.addEventListener('click', () => {
  alert('Thank you for your purchase!');
  cart = [];
  showCart();
});
});




function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll", reveal);
reveal();