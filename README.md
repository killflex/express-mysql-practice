# Express MySQL Practice

A simple Node.js CRUD API using Express and MySQL, designed for learning and practicing backend fundamentals.

---

## 📚 Table of Contents

- [Express MySQL Practice](#express-mysql-practice)
  - [📚 Table of Contents](#-table-of-contents)
  - [📦 Installation](#-installation)
  - [🚀 Usage](#-usage)
  - [📡 API Endpoints](#-api-endpoints)
    - [GET `/users`](#get-users)
    - [GET `/users/:id`](#get-usersid)
    - [POST `/users`](#post-users)
    - [PUT `/users/:id`](#put-usersid)
    - [DELETE `/users/:id`](#delete-usersid)
  - [✨ Features](#-features)
  - [⚙️ Configuration](#️-configuration)
  - [📦 Dependencies](#-dependencies)
  - [🛠 Troubleshooting](#-troubleshooting)
  - [👨‍💻 Contributors](#-contributors)

---

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/killflex/express-mysql-practice.git
   cd express-mysql-practice
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create `.env` file**

   Duplicate the provided `env.example` file and rename it:

   ```bash
   cp env.example .env
   ```

   Fill in your MySQL credentials and database info.

---

## 🚀 Usage

1. Start your MySQL server.
2. Ensure your `.env` is correctly configured.
3. Start the server:

   ```bash
   npm start
   ```

4. Access the API via: `http://localhost:3000`

---

## 📡 API Endpoints

### GET `/users`

Returns a list of all users.

**Response:**

```json
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com"
  }
]
```

---

### GET `/users/:id`

Returns a single user by ID.

**Response:**

```json
{
  "id": 2,
  "name": "Jane Smith",
  "email": "jane@example.com"
}
```

---

### POST `/users`

Creates a new user.

**Request:**

```json
{
  "name": "New User",
  "email": "newuser@example.com"
}
```

**Response:**

```json
{
  "message": "User created successfully"
}
```

---

### PUT `/users/:id`

Updates a user's details.

**Request:**

```json
{
  "name": "Updated Name",
  "email": "updated@example.com"
}
```

**Response:**

```json
{
  "message": "User updated successfully"
}
```

---

### DELETE `/users/:id`

Deletes a user by ID.

**Response:**

```json
{
  "message": "User deleted successfully"
}
```

---

## ✨ Features

- RESTful API using Express
- MySQL integration with async/await
- Environment-based configuration
- Clean project structure

---

## ⚙️ Configuration

Edit the `.env` file to configure your database connection:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=practice_db
PORT=3000
```

---

## 📦 Dependencies

- [express](https://www.npmjs.com/package/express)
- [mysql2](https://www.npmjs.com/package/mysql2)
- [dotenv](https://www.npmjs.com/package/dotenv)

---

## 🛠 Troubleshooting

- Ensure your MySQL server is running.
- Check that the database and tables exist.
- Confirm that `.env` values are correct.
- Look for console errors when the server starts.

---

## 👨‍💻 Contributors

- [@killflex](https://github.com/killflex) – Original author

---
