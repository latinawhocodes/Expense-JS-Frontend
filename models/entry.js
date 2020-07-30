class Entry {
  static all = [];
  
  constructor(amount, description, date, expense, id) {
    this.amount = amount;
    this.description = description;
    this.date = date;
    this.expense = expense;
    this.id = id;
    Entry.all.push(this);
  }

  static renderAllEntries() {
    Entry.all.forEach(entry => 
      entryCollection.append(entry.convertToDOMFormat(entryCollection))
    )
  }


deleteEntry(){
  event.preventDefault()
  fetch(APIFetch.serverURL + '/api/entries/' + `${this.id}`, {
    method: "DELETE" 
  })
    .then(() => {
      document.getElementById(`${this.id}`).remove()
      Entry.all = Entry.all.filter(entry => entry.id !== this.id)
    })
}

  renderSingleEntry() {
    const entryCollection = document.querySelector('.entry-list')
    const row = this.convertToDOMFormat();
    entryCollection.append(row)
  }

  convertToDOMFormat() {
    let li = document.createElement("li")

    li.setAttribute("class", "entry-li")
    li.setAttribute("id", `${this.id}`)

    li.innerHTML = `${this.expense.category}` + "--    Total:     $" + `${this.amount}` + "    ~~>    " + `${this.description}`

       
    let deleteButton = document.createElement("i")
    deleteButton.addEventListener("click", event => this.deleteEntry(event, this))
    deleteButton.setAttribute("class", "fas fa-backspace")
    li.append(deleteButton)
    return li
  }


}

