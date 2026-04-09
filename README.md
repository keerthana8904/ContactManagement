#  Contact Management System

A simple and interactive **Contact Management Web App** built using **HTML, CSS, and JavaScript**.
This application allows users to **create, search, edit, delete, and sort contacts**, with data stored in **localStorage**.

---

## 🚀 Features

* ➕ Add new contacts
* 🔍 Search contacts by first name
* ✏️ Edit existing contacts
* ❌ Delete contacts
* 🔤 Auto-sort contacts (A → Z)
* 💾 Persistent storage using `localStorage`
* 📋 Show all contacts

---

## 🛠️ Technologies Used

* **HTML5** – Structure
* **CSS3** – Styling
* **JavaScript (ES6)** – Functionality & Logic
* **Browser LocalStorage** – Data persistence

---

## 📂 Project Structure

```
📁 Contact-Management
│── index.html
│── style.css
│── script.js
```

---

## ⚙️ How It Works

### 1. Add Contact

* Enter First Name, Last Name, Phone Number
* Click **Save**
* Contact is stored in array + localStorage
* Automatically sorted and rendered

### 2. Search Contact

* Enter name in search box
* Click **Search**
* Filters contacts using `includes()`

### 3. Edit Contact

* Click **Edit**
* Modify details
* Click **Save**
* Updates localStorage and UI

### 4. Delete Contact

* Click **Delete**
* Removes contact from array
* Updates localStorage and UI

---

## 🔄 Sorting Logic

Contacts are automatically sorted alphabetically:

```javascript
contacts.sort((a, b) =>
  a.fname.toLowerCase().localeCompare(b.fname.toLowerCase())
);
```

---

## 💾 LocalStorage Usage

* Contacts are saved using:

```javascript
localStorage.setItem("contacts", JSON.stringify(contacts));
```

* Retrieved using:

```javascript
JSON.parse(localStorage.getItem("contacts")) || [];
```

---

## 🧠 Key Concepts Used

* DOM Manipulation
* Event Handling
* Array Methods (`filter`, `sort`, `some`, `splice`)
* Local Storage
* Dynamic UI Rendering

