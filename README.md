# Store Rating Platform

A role-based web application that allows users to rate stores, manage users and stores, and view rating statistics.  
The platform supports **System Administrators**, **Normal Users**, and **Store Owners** with distinct functionalities.

---

## 🚀 Tech Stack

- **Frontend:** React.js with Tailwind CSS 
- **Backend:** Express.js 
- **Database:** PostgreSQL 
- **Authentication:** JWT-based login
- **Other Libraries:** Axios, React Router, React Icons, etc.

---

## 📌 Features by Role

### **System Administrator**
- Add new stores, normal users, and admin users.
- Dashboard with:
  - Total users
  - Total stores
  - Total submitted ratings
- Manage users:
  - Add, view, filter, and sort by Name, Email, Address, Role.
- Manage stores:
  - View store details: Name, Email, Address, Average Rating.
- View detailed user profiles, including ratings for store owners.
- Secure logout.

---

### **Normal User**
- Sign up with:
  - Name (20–60 chars)
  - Email (valid format)
  - Address (max 400 chars)
  - Password (8–16 chars, 1 uppercase, 1 special char)
- Log in securely.
- View and search registered stores by Name/Address.
- Store listing includes:
  - Store Name
  - Address
  - Overall Rating
  - User’s submitted rating
  - Option to add/update rating (1–5)
- Update password after login.
- Secure logout.

---

### **Store Owner**
- Log in securely.
- View dashboard:
  - List of users who rated their store.
  - Average store rating.
- Update password after login.
- Secure logout.

---



## 📂 Project Structure

