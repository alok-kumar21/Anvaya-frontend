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

### LeadForm

- This is where new leads are added. It includes inputs like lead name, source, assigned sales agent, status, tags, time to close, and priority. I made sure everything is dynamic using dropdowns and multi-selects for better UX. When the form is submitted, it makes an API call to save the lead in the database.

### LeadList

- All leads are displayed here, and I added filters for things like sales agent, lead status, tags, and source. What’s cool is, these filters also reflect in the URL, so you can share filtered views like:
  `/leads?salesAgent=Riya&status=New`

- I also added sorting options so users can sort leads based on priority or how soon they are expected to close.

### LeadDetails

- When you click on a lead, it takes you to a detailed view with all the lead info. There’s also a comment section where team members can add updates or notes, which really helps track progress. You can also update the lead’s status or other details here.

### LeadStatusView

- This view groups all leads by their current status, like "New", "Contacted", or "Qualified". It makes it easier to focus on what stage most leads are in and helps prioritize follow-ups.

### SalesAgentView

- This one groups leads based on the sales agent handling them. It's really useful for managers to see the performance of each agent and balance workloads if needed.

### Reports and Visualizations

- To make data more visual, I added a reports section using Chart.js. It includes:

- Leads closed last week

- Total leads in the pipeline (by status)

- Performance by sales agent

- Status distribution in pie or bar chart formats

### Filtering (URL-based)

- I implemented query-based filters so you can change the URL and the UI updates automatically. For example:

`/leads?status=Contacted`

`/leads?salesAgent=Megha&source=Referral`

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
