

function createData() {
    return {
        equation: {
            amount: document.getElementById('amount').value,
            description: document.getElementById('description').value,
            date: document.getElementById('date').value,
            expense_id: document.getElementById('expense-select').value
        }
    }
}

document.addEventListener('DOMContentLoaded', function(){
    /* Add submit event */
    APIFetch.getExpenses();
    APIFetch.getEntries();
})