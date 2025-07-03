# 📅 Anvaya CRM App

Hi! This is a CRM (Customer Relationship Management) web app I built using React for the frontend. The main goal of this project is to help sales teams manage leads efficiently, track their progress, and visualize sales performance in a clear and user-friendly way.
I wanted to understand how CRM systems work in real-world businesses and also get hands-on experience with filters, forms, charts, and state management in React. So I created "Anvaya CRM", which focuses on managing leads from the moment they're added to when they're closed.

> Built with: **React** frontend, **Node.js/Express** backend, **MongoDB** database.

---

## 🔗 Live Demo

[🚀 Visit Live Demo](https://meet-up-frontend-chi.vercel.app/)

---

## ⚙️ Quick Start

```bash
git clone https://github.com/alok-kumar21/Anvaya-frontend.git
cd <your repo>
npm install
npm run dev
```

---

## 🛠️ Technologies Used

- React JS
- React Router
- Context API
- custom Hooks
- Node.js
- Express.js
- MongoDB
- Bootstrap

---

## 🎥 Demo Video

Watch a walkthrough of all major features in this 5–7 minute demo:  
📽️ [Loom Video Link]() <!-- Add your Loom video link here -->

---

## ✨ Features

### 🔍 Search

- Instantly search for events by typing keywords in the search bar.

### 🧭 Event Filtering

- Filter events by type:
  - ✅ Online (virtual)
  - 📍 Offline (in-person)

### 📋 Event Listing

- Browse upcoming meetup events in a clean and user-friendly UI.

### 📄 Event Details

- Click any event to view a detailed page showing:
  - Date & Time
  - Location
  - Description
  - Organizer Information

---

## 📡 API Reference

### `GET /events`

- Retrieve a list of all events.  
  **Response**:

```json
[
  {
    "_id": "123",
    "title": "React Bootcamp",
    "description": "An advanced workshop on React...",
    ...
  }
]
```

### `GET /events/title/:titleName`

- Get details for a specific event by title.  
  **Response**:

```json
{
  "_id": "123",
  "title": "React Bootcamp",
  "description": "An advanced workshop on React...",
  "images": [...]
}
```

### `POST /events`

- Create a new event (protected route).  
  **Response**:

```json
{
  "_id": "123",
  "title": "New Event Title",
  ...
}
```

---

## 📬 Contact

For bugs, feature requests, or feedback, feel free to reach out:  
📧 **alok.8kumar21@gmail.com**
