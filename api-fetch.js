class APIFetch {

    static getEntries() {
        fetch('http://localhost:3000/api/entries/')
            .then(response => response.json())
            .then(entries => {
                entries.map(entries => {
                    return new Entry(entry.amount, entry.description, entry.date, entry.expense, entry.id)
                });
                /* Entry.renderAllEntries(); */
            })
    }

    static submitEntry(event) {
        event.preventDefault();
    }
}