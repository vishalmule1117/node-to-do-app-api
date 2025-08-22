# 📝 To-Do REST API

A simple RESTful API for managing a to-do list, built using **Node.js** and **Express.js**.

---

## 📌 Features

- Create, Read, Update, and Delete (CRUD) to-do items
- RESTful API structure
- JSON-based responses
- In-memory or file-based data (you can integrate a database easily)

---

## ⚙️ Tech Stack

- Node.js
- Express.js
- (Optional) File system or database like MongoDB/SQLite

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v14+)
- npm (comes with Node.js)

### Installation

1. Clone the repository:

```
git clone https://github.com/vishalmule1117/node-to-do-app-api
cd node-to-do-app-api
```

2. Install dependencies:
 ```  
npm install
```
3. Start the server:
```
NPM Start
Server will run at http://localhost:3000
```
📬 API Endpoints

| Method | Endpoint         | Description               |
| ------ | ---------------- | ------------------------- |
| GET    | `/todos`     | Get all to-do items       |
| GET    | `/todos/:id` | Get a specific to-do item |
| POST   | `/todos`     | Create a new to-do item   |
| PUT    | `/todos/:id` | Update a to-do item       |
| DELETE | `/todos/:id` | Delete a to-do item       |

🛡️ License
This project is licensed under the MIT License.


