// Sample order items
const orderItems = [
  { product: "Laptop", price: 800.00, quantity: 2 },
  { product: "Headphones", price: 50.00, quantity: 1 },
  { product: "Smartphone", price: 400.00, quantity: 3 }
];

// Populate the order items in the table
function populateOrderTable() {
  const orderItemsContainer = document.getElementById('order-items');
  let totalQuantity = 0;
  let totalAmount = 0;

  orderItems.forEach(item => {
    const row = document.createElement('tr');
    const itemTotal = item.price * item.quantity;

    row.innerHTML = `
      <td>${item.product}</td>
      <td>$${item.price.toFixed(2)}</td>
      <td>${item.quantity}</td>
      <td>$${itemTotal.toFixed(2)}</td>
    `;

    orderItemsContainer.appendChild(row);

    totalQuantity += item.quantity;
    totalAmount += itemTotal;
  });

  // Set initial total values
  document.getElementById('total-quantity').textContent = totalQuantity;
  document.getElementById('total-amount').textContent = totalAmount.toFixed(2);
}

// Calculate total when the button is clicked
function calculateTotal() {
  let totalQuantity = 0;
  let totalAmount = 0;

  orderItems.forEach(item => {
    totalQuantity += item.quantity;
    totalAmount += item.price * item.quantity;
  });

  document.getElementById('total-quantity').textContent = totalQuantity;
  document.getElementById('total-amount').textContent = totalAmount.toFixed(2);
}

// Initialize the page
window.onload = populateOrderTable;
