// src/scripts/cart.js

// Función para agregar un producto al carrito
export function addToCart(productId) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Verificar si el producto ya está en el carrito
    const existingProduct = cart.find(item => item.id === productId);
    
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({ id: productId, quantity: 1 });
    }
  
    // Guardar el carrito actualizado en localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  