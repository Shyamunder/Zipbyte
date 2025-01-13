// Populate the order table with data from localStorage
function populateOrderTable() {
  const order = JSON.parse(localStorage.getItem('order')); // Retrieve the order data
  if (!order) {
    alert("No order found!");
    return;
  }

  const orderItemsContainer = document.getElementById('order-items');
  let totalQuantity = 0;
  let totalAmount = 0;

  // Clear any existing rows in the table
  orderItemsContainer.innerHTML = '';

  Object.keys(order).forEach(product => {
    const { quantity, price } = order[product];
    const itemTotal = quantity * price;

    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${product}</td>
      <td>${quantity}</td>
      <td>₹${price}</td>
      <td>₹${itemTotal}</td>
    `;

    orderItemsContainer.appendChild(row);

    totalQuantity += quantity;
    totalAmount += itemTotal;
  });

  // Update the total quantity and amount
  document.getElementById('total-quantity').textContent = totalQuantity;
  document.getElementById('total-amount').textContent = totalAmount.toFixed(2);
}

// Initialize the page
window.onload = populateOrderTable;
