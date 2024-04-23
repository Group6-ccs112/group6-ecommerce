import React from "react";

function ViewCart({ summary, setSummary }) {
 

    const items = summary.items;
    const count = items.length;
    const totalPrice = items.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <h1 className="text-center mt-5 mb-3 fs-1">Your Shopping Cart</h1>
      <div className="text-center">
        <p>
            <strong>Total Items: {count}</strong>
        </p>
        <p>
            <strong>Total Price: ${totalPrice.toFixed(2)}</strong>
        </p>      
      </div>
      <ul className="list-group">      
        {items.map((item, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <strong>{item.name}</strong> - ${item.price}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ViewCart;
