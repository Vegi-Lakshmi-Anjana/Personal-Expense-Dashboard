# 💰Personal Expense Dashboard with CSV Reporting Utility

A web-based expense tracking application built using HTML, CSS, and JavaScript that allows users to record expenses, monitor category-wise spending, store data using browser Local Storage, and export records as CSV files. The project also includes a C-based reporting utility that processes exported CSV records and generates expenditure summaries.

---

## Overview

This project combines a browser-based expense dashboard with a C-based reporting utility to create a simple expense tracking and reporting workflow.

Users can record and manage expenses through the dashboard, export the data as a CSV file, and generate expenditure reports using the accompanying C program.

---

## Features

### Expense Dashboard

- Add expense records with amount, category, and note
- View all recorded expenses
- Delete expense entries
- Track total expenditure dynamically
- Generate category-wise spending summaries
- Store data persistently using browser Local Storage

### CSV Export

- Export recorded expenses as a CSV file
- Generate portable records for reporting and analysis

### Reporting Utility

- Read exported CSV records
- Calculate total expenditure
- Generate category-wise expenditure totals
- Produce financial summaries using file handling and string processing techniques

---

## Project Workflow

```text
User Input
    ↓
Expense Dashboard
(HTML, CSS, JavaScript)
    ↓
Local Storage
    ↓
CSV Export (expenses.csv)
    ↓
C Reporting Utility
    ↓
Expense Summary Report
```

---

## Technologies Used

| Technology | Purpose |
|------------|----------|
| HTML5 | Application Structure |
| CSS3 | User Interface Styling |
| JavaScript | Dashboard Functionality |
| Local Storage API | Persistent Data Storage |
| Blob API | CSV File Export |
| C Programming | Report Generation |
| File Handling | CSV Processing |
| String Processing | Data Parsing |

---

##  Project Structure

```text
Personal-Expense-Dashboard/
│
├── index.html
├── style.css
├── script.js
├── expense_report.c
└── README.md
```

---

##  How It Works

### 1. Record Expenses

Users enter:

- Amount
- Category
- Note

Example:

```text
Amount: 50
Category: Food
Note: Tea
```

### 2. Store Data

Expense records are stored locally in the browser using the Local Storage API.

### 3. View Expense Summary

The dashboard automatically updates:

- Total expenditure
- Expense records
- Category-wise spending totals

### 4. Export Expense Data

Users can export all expense records as a CSV file.

Example:

```csv
amount,category,note
50,Food,Tea
120,Travel,Bus
200,Shopping,Books
```

### 5. Generate Reports

The C reporting utility processes the exported CSV file and generates an expenditure summary.

Example output:

```text
----- Expense Report -----

Total Spent: 370.00

Category Wise Total:

Food: 50.00
Travel: 120.00
Shopping: 200.00
Other: 0.00

--------------------------
```

---

##  Getting Started

### Run the Dashboard

Open the following file in a web browser:

```text
index.html
```

No additional installation or dependencies are required.

### Compile the Reporting Utility

```bash
gcc expense_report.c -o report
```

### Run the Program

```bash
./report
```

Ensure that the exported `expenses.csv` file is present in the same directory as the executable.

---

##  Concepts Demonstrated

- DOM Manipulation
- Event Handling
- Browser Local Storage
- Client-Side Data Management
- Dynamic UI Updates
- CSV File Generation
- File Handling in C
- String Processing
- CSV Parsing
- Data Aggregation

---

##  Future Enhancements

- Expense Editing Functionality
- Date-Based Expense Tracking
- Search and Filtering
- Monthly Spending Reports
- Dynamic Category Handling in the Reporting Utility
- Data Visualization and Charts

---

##  Author

**Vegi Lakshmi Anjana**  
B.Tech, IIT Guwahati
