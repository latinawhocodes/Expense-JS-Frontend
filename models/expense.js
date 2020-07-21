class Expense {
  static all = []

  constructor(category,id) {
    this.name = category;
    this.id = id
    Expense.all.push(this);
  }

  static renderAllExpenses() {
    Expense.all.forEach(expense => expense.display())
  }
  
  entries() {
    Expense.all.filter(entry => entry.expense.category === this.category);
  }

  static find(category) {
    return Expense.all.find(expense => expense.category === category);
  }
}