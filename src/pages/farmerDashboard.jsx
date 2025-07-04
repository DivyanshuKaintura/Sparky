import React from "react";
import "./farmerDashboard.css";

const FarmerDashboard = () => {
  const myProducts = [
    { name: "Apple", quantity: "100kg", price: "₹120/kg" },
    { name: "Banana", quantity: "80kg", price: "₹60/kg" },
  ];

  return (
    <div className="farmer-dashboard">
      <h2>Welcome, Farmer!</h2>
      <p>Here are your listed products:</p>

      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {myProducts.map((prod, index) => (
            <tr key={index}>
              <td>{prod.name}</td>
              <td>{prod.quantity}</td>
              <td>{prod.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FarmerDashboard;
