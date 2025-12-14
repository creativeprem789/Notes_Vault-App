# 📝 Notes Making Web App

A simple and clean Notes Making web application built using **Node.js, Express, EJS, and Tailwind CSS**.  
This app allows users to create, view, edit, and delete notes, which are stored locally as files.

---

## 🚀 Features

- 📌 Create notes with a title and detailed content
- 🗂 Notes displayed as cards on the home page
- 🔍 Read full note details on a separate page
- ✏️ Edit note title
- ❌ Delete notes
- 📱 Fully responsive UI using Tailwind CSS
- 💾 File-based storage (local filesystem)

---

## 🛠 Tech Stack

- **Frontend:** HTML, EJS, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Storage:** Local file system (fs module)
- **Template Engine:** EJS

---

## 📂 Project Structure

notes_app/
│
├── files/ # Stored notes (text files)
├── public/ # Static assets (CSS, JS)
├── views/ # EJS templates
│ ├── index.ejs
│ ├── show.ejs
│ └── edit.ejs
├── app.js # Main server file
├── package.json
└── README.md

---

## ⚙️ How It Works

1. User submits a note from the home page
2. Express route handles the request
3. Note is saved as a `.txt` file using Node.js `fs` module
4. All saved notes are read and displayed as cards
5. Clicking “Read More” opens the full note
6. Notes can be edited or deleted via routes

---

## ▶️ How to Run Locally

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/notes-app.git
2. Navigate to the project folder

   cd notes-app


3. Install dependencies

   npm install


4. Start the server

   index.js


5. Open browser and visit

   http://localhost:3000

🌱 Learning Outcomes

    Understanding Express server structure

    Routing and form handling

    File-based data persistence

    EJS templating

    Backend–Frontend interaction

    Debugging real-world issues

🔮 Future Improvements

    Use a database (MongoDB)

    User authentication

    Search and filter notes

    Cloud deployment with database

    Rich text editor

👨‍💻 Author

    Prem Kumar Rai
    B.Tech ECE, NIT Patna
    Aspiring Full Stack Developer
