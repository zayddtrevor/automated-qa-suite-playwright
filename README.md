# Automated QA Suite (Playwright)



An automated UI testing suite built using **Playwright** to validate critical user workflows of a web-based ticketing system.  

This project demonstrates the transition from **manual QA** to **automated end-to-end (E2E) testing**.



---



## 🚀 Technologies Used



- **Playwright** – Core automation framework  

- **Node.js** – JavaScript runtime environment  

- **JavaScript** – Scripting language for test logic  



---



## 🧪 Test Coverage



### 1. Login Flow

- Navigates to the application login page

- Inputs valid user credentials

- Submits the form and verifies successful redirection

- Confirms the presence of dashboard-specific UI elements



\### 2. Ticket Creation Flow

\- Navigates to the support dashboard

\- Fills out the ticketing form (Issue Type, Description, Priority)

\- Submits the ticket and verifies the success notification

\- Confirms the new ticket appears in the persistent data view



---



## 📁 Project Structure



```text

tests/

├── test-login.spec.js          # Validates authentication and redirects

└── test-create-ticket.spec.js  # Validates form submission and data integrity

````



---



## ⚙️ Setup Instructions



Install dependencies:



```bash

npm install

```



Install Playwright browsers:



```bash

npx playwright install

```



---



## ▶️ Running Tests



Run tests in \*\*headed mode\*\* (visible browser):



```bash

npx playwright test --headed

```



Run tests in \*\*headless mode\*\*:



```bash

npx playwright test

```



View test report:



```bash

npx playwright show-report

```



---



## 🎯 Key Learning Outcomes



* Automating repetitive manual QA workflows

* Writing reliable UI assertions for validation

* Understanding E2E browser testing concepts

\* Managing a professional QA automation repository on GitHub



