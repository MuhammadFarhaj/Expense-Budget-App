// let totalAmount = document.getElementById("budget-amount");
// let expenseAmount = document.getElementById("expense-amount");
// const setBudgetBtn = document.getElementById("btn-1");
// const checkAmountBtn = document.getElementById("btn-2");
// const product = document.getElementById("category");
// const budgetError = document.getElementById("budget-error");
// const Amount = document.getElementById("amount");
// const expenseVal = document.getElementById("expense-value");
// const balanceVal = document.getElementById("balance-value");
// const list = document.getElementById("list");
// let dummyAmount = 0;



// ///Set budget Starting part
// setBudgetBtn.addEventListener("click", () => {
//     dummyAmount = totalAmount.value;

//     //empty input fields

//     if (dummyAmount === "" || dummyAmount < 0) {
//         budgetError.classList.remove("hide");
//     }  
//     else {
//         budgetError.classList.add("hide");
        
//         //set Budget amount
//         Amount.innerHTML = dummyAmount;

//         //set Balance
//         balanceVal.innerText = dummyAmount - expenseVal.innerText;
//         //clear Input Box
//         totalAmount.value = "";
//     }
// })


// ////Function for edit and delete button
// const disableButtons = (foo) => {
//     let editButtons = document.getElementsByClassName("edit");
//     Array.form(editButtons).forEach(element => {
//         element.disable = foo;
//     });
// };


// //// function to update History list

// const modifyElement = (element, edit = false) => {
//     let parentDiv = element.parentElement;
//     let currentBalance = balanceVal.innerText;
//     let currentExpense = expenseVal.innerText;
//     let parentAmount = parentDiv.querySelector(".amount").innerText;

//     if (edit) {
//         let parentText = parentDiv.querySelector(".product").innerText;
//     }
// }







document.addEventListener('DOMContentLoaded', function () {
    // Get elements
    const budgetForm = document.querySelector('.Form1');
    const budgetAmountInput = document.getElementById('budget-amount');
    const budgetError = document.getElementById('budget-error');
    const setBudgetBtn = document.getElementById('btn-1');
    const expenseForm = document.querySelector('.Form2');
    const productListInput = document.getElementById('Product-list');
    const expenseAmountInput = document.getElementById('expense-amount');
    const amountDisplay = document.getElementById('amount');
    const expenseValueDisplay = document.getElementById('expense-value');
    const balanceValueDisplay = document.getElementById('balance-value');
    const historyList = document.getElementById('list');
    const newDateVal = document.getElementById("inputDate")

    // Initialize budget, expenses, and balance
    let budget = 0;
    let totalExpense = 0;
    let balance = 0;
    const displayDate = [];
    const expenses = [];

    // Function to update the display
    function updateDisplay() {
        amountDisplay.textContent = budget;
        expenseValueDisplay.textContent = totalExpense;
        balanceValueDisplay.textContent = balance;
        newDateVal.textContent = displayDate;


        // Clear the history list
        historyList.innerHTML = "";

        // Display the history of expenses
        expenses.forEach(function (expense) {
            const listItem = document.createElement('div');
            listItem.textContent = expense.product + ': ' + expense.amount + ':' + expense.updateDate;
            historyList.appendChild(listItem);
        });

        

       
    }

    // Function to handle budget form submission
    function setBudget() {
        const amount = parseInt(budgetAmountInput.value);
        if (amount) {
            budget = amount;
            balance = budget - totalExpense;
            updateDisplay();
            budgetError.classList.add('hide');
            budgetAmountInput.value = '';
        } else {
            budgetError.classList.remove('hide');
        }
    }

    // Function to handle expense form submission
    function addExpense() {
        const product = productListInput.value;
        const amount = parseInt(expenseAmountInput.value);
        const updateDate = newDateVal.innerHTML;

        if (product && amount) {
            totalExpense += amount;
            balance = budget - totalExpense;
            expenses.push({ product: product, amount: amount, updateDate: updateDate });
            // Get the input field element
            var inputField = document.getElementById("inputDate");
              
            // Get the value from the input field
            var date = inputField.value;
          
            // Display the date
            var outputElement = document.getElementById("list");
            outputElement.textContent = "Selected date: " + date;


            updateDisplay();
            productListInput.value = '';
            expenseAmountInput.value = '';
            newDateVal.value = '';

            
                
              

        }
    }

   


    // Add event listeners
    budgetForm.addEventListener('submit', function (event) {
        event.preventDefault();
    });
    setBudgetBtn.addEventListener('click', setBudget);

    expenseForm.addEventListener('submit', function (event) {
        event.preventDefault();
    });
    document.getElementById('btn-2').addEventListener('click', addExpense);
}
);

