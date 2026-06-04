function getExpenses() {
  let data = localStorage.getItem("expenses");
  if (data == null) return [];
  return JSON.parse(data);
}

function saveExpenses(expenses) {
  localStorage.setItem("expenses", JSON.stringify(expenses));
}
function deleteExpense(index) {

  let expenses = getExpenses();

  expenses.splice(index, 1);

  saveExpenses(expenses);

  showExpenses();
}

function addExpense() {
  let amount = document.getElementById("amount").value;
  let category = document.getElementById("category").value;
  let note = document.getElementById("note").value;

  if (amount == "" || category == "") {
    alert("Enter amount and category!");
    return;
  }

  let expenses = getExpenses();

  expenses.push({
    amount: amount,
    category: category,
    note: note
  });

  saveExpenses(expenses);

  document.getElementById("amount").value = "";
  document.getElementById("category").value = "";
  document.getElementById("note").value = "";

  showExpenses();
}

let deleteBtn = document.createElement("span");

deleteBtn.innerHTML = "🗑️";

deleteBtn.className = "delete-btn";

deleteBtn.onclick = function () {

  let confirmDelete =
      confirm("Delete this expense?");

  if(confirmDelete){
      deleteExpense(i);
  }

};
function showExpenses() {

  let expenses = getExpenses();
  let list = document.getElementById("list");

  list.innerHTML = "";

  let total = 0;

  let categoryTotals = {};

  for (let i = 0; i < expenses.length; i++) {

    let e = expenses[i];

    total += Number(e.amount);

    if (categoryTotals[e.category]) {
      categoryTotals[e.category] += Number(e.amount);
    } else {
      categoryTotals[e.category] = Number(e.amount);
    }

    let item = document.createElement("li");

    let text = document.createElement("span");

    text.innerText =
      "₹" + e.amount +
      " - " + e.category +
      " - " + e.note;

    let deleteBtn = document.createElement("span");

    deleteBtn.innerHTML = "🗑️";

    deleteBtn.className = "delete-btn";

    deleteBtn.onclick = function () {

      let confirmDelete =
        confirm("Delete this expense?");

      if (confirmDelete) {
        deleteExpense(i);
      }
    };

    item.appendChild(text);
    item.appendChild(deleteBtn);

    list.appendChild(item);
  }

  document.getElementById("total").innerText =
    "Total: ₹" + total;

  let summary = document.getElementById("summary");

  summary.innerHTML = "";

  for (let category in categoryTotals) {

    let li = document.createElement("li");

    li.innerText =
      category + ": ₹" + categoryTotals[category];

    summary.appendChild(li);
  }
}

function downloadCSV() {
  let expenses = getExpenses();
  if (expenses.length == 0) {
    alert("No expenses to export!");
    return;
  }

  let csv = "amount,category,note\n";

  for (let i = 0; i < expenses.length; i++) {
    let e = expenses[i];
    csv = csv + e.amount + "," + e.category + "," + e.note + "\n";
  }

  let blob = new Blob([csv], { type: "text/csv" });
  let link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "expenses.csv";
  link.click();
}

showExpenses();
