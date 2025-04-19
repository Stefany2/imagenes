// src/components/ProductList.js
import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div className="product-item" key={product.id}>
          <img src={product.imagen} alt={product.nombre} />
          <h2>{product.nombre}</h2>
          <p>{product.descripcion1}</p>
          <p className="price">S/.{product.precio}</p>

          {/* Enlace "Ver más" que redirige a la página de detalles */}
          <Link to={`/producto/${product.id}`} className="view-more-btn">
            Ver más
          </Link>

          {/* Botón para agregar al carrito */}
          <button className="add-to-cart-btn">
            <i className="fas fa-shopping-cart"></i> Agregar al carrito
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
