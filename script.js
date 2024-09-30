const expenseForm = document.getElementById("expense-form");
const expenseName = document.getElementById("expense-name");
const expenseAmount = document.getElementById("expense-amount");
const expenseList = document.getElementById("expense-list");
const totalAmount = document.getElementById("total-amount");

let total = 0;

// Event listener for form submission
expenseForm.addEventListener("submit", function (event) {
    event.preventDefault();
    addExpense();
});

// Function to add an expense
function addExpense() {
    const name = expenseName.value;
    const amount = parseFloat(expenseAmount.value);

    if (name === "" || isNaN(amount) || amount <= 0) return;

    // Create a new list item
    const listItem = document.createElement("li");
    listItem.innerHTML = `
        ${name}: $${amount.toFixed(2)} 
        <button class="remove-btn">Remove</button>
    `;

    // Add event listener to remove button
    const removeBtn = listItem.querySelector(".remove-btn");
    removeBtn.addEventListener("click", function () {
        total -= amount; // Subtract the amount from total
        totalAmount.innerText = total.toFixed(2); // Update total display
        listItem.remove(); // Remove the item from the list
    });

    // Update total amount
    total += amount;
    totalAmount.innerText = total.toFixed(2); // Display updated total

    // Append the new item to the list
    expenseList.appendChild(listItem);

    // Clear input fields
    expenseName.value = "";
    expenseAmount.value = "";
}