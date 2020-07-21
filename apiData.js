class APIFetch {
    static serverURL = 'http://localhost:3000/'

    static getExpenses() {
        fetch('http://localhost:3000/api/expenses/')
          .then(response => response.json())
          .then(expenses => {
            expenses.map(expense => {
              newExpense = new Expense(expense.category, expense.id);
            })
            Expense.renderAllExpenses();
          })
          /* Add some sort of error handling */
      }
    
    static getEntries() {
      fetch('http://localhost:3000/api/entries/')
        .then(response => response.json())
        .then(entries => {
          entries.map(entries => {
            new Entry(entry.amount, entry.description, entry.date, entry.expense, entry.id);
            })
          Entry.renderAllEntries();
        })
        /* Add some sort of error handling */
    }
  
  
    static submitEntry(event) {
      event.preventDefault();
      const data = getUserInputs();
      fetch('http://localhost:3000/api/entries/', {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(response => response.json())
        .then(data => {
          let entry = new Entry(data.amount, data.description, data.date, data.expense, data.id);
          entry.renderSingleEntry();
        })
        
        clearFormOnSubmit();
    }
    
}