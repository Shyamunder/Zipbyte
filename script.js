function orderItem(item) {
  const orderSummary = document.getElementById("order-summary");
  const currentOrder = orderSummary.textContent;

  if (currentOrder === "No items ordered yet.") {
    orderSummary.textContent = `You have ordered: ${item}`;
  } else {
    orderSummary.textContent = `${currentOrder}, ${item}`;
  }
}
