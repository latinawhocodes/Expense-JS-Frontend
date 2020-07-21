function getUserInputs() {
    return {
      entry: {
        amount: document.getElementById('amount').value,
        description: document.getElementById('description').value,
        date: document.getElementById('date').value,
        expense_id: document.getElementById('expense-select').value,
      }
    }
  }
    
  function clearFormOnSubmit() {
    document.getElementById('amount').value = ""
    document.getElementById('description').value = ""
    document.getElementById('date').value = ""
  }
    
  function addSubmitEventToEntry() {
    document.getElementById("new-entry-form").addEventListener('submit', APIFetch.submitEntry);
  }
    
  document.addEventListener('DOMContentLoaded', function () {
    addSubmitEventToEntry();

      
  });
    