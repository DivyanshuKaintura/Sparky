import React from "react";

const AdminDashboard = () => {
  const products = [
    { name: "Apple", sku: "APL123", expiry: "2025-08-01" },
    { name: "Banana", sku: "BAN456", expiry: "2025-07-15" },
  ];

  return (
    <div className="dashboard">
      <h2>Product Inventory</h2>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>SKU ID</th>
            <th>Expiry Date</th>
          </tr>
        </thead>
        <tbody>
          {products.map((prod, index) => (
            <tr key={index}>
              <td>{prod.name}</td>
              <td>{prod.sku}</td>
              <td>{prod.expiry}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
