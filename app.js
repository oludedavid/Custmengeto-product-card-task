const mobileNav = document.querySelector(".header .mobile-main-navigation");
const toggleButton = document.querySelector(".nav-toggle");
const closeButton = document.querySelector(
  ".header .mobile-main-navigation .close-nav"
);

toggleButton.addEventListener("click", () => {
  const isNavVisible = mobileNav.hasAttribute("hidden");
  if (isNavVisible) {
    mobileNav.removeAttribute("hidden");
  } else {
    mobileNav.setAttribute("hidden", "");
  }
  mobileNav.style.display = "flex";
  mobileNav.removeAttribute("hidden");
});

closeButton.addEventListener("click", () => {
  mobileNav.style.display = "none";
});

// Select elements
const totalSumContainer = document.querySelector(".total-sum");
const itemPrice = document.querySelector(".item-price");
const quantityInput = document.querySelector(".quantity-input");

// Function to update the total sum
function updateSum(event) {
  const quantity = parseInt(event.target.value) || 0;
  const price = parseFloat(itemPrice.textContent) || 0;

  // Calculate total and format it to 2 decimal places
  const total = (quantity * price).toFixed(2);
  totalSumContainer.textContent = `${total}€`;
}

// Add event listener to the quantity input
quantityInput.addEventListener("change", updateSum);

updateSum({ target: { value: quantityInput.value } });
