# Prescriply - Doctor Appointment Booking System

![Prescriply Demo](src/assets/screen.gif)

Prescriply is a modern, responsive web application designed to streamline prescription management and facilitate doctor appointment bookings. Built with **React**, **Vite**, and **Tailwind CSS**, it offers a premium user interface for patients to browse doctors, manage appointments, and view their profiles.

> **Note:** This project is currently a **Frontend Prototype**. Authentication and data storage are simulated using `Context API` and `localStorage`.

## 🚀 Features

- **Doctor Browsing**: Browse a list of doctors and filter by speciality (General Physician, Gynecologist, Dermatologist, etc.).
- **Appointment Booking**: View doctor details, available time slots, and "book" appointments (UI demo).
- **User Authentication**: Simulated Login and Sign Up flow (persisted via `localStorage`).
- **Responsive Design**: Fully responsive UI/UX optimized for desktop and mobile devices.
- **Profile Management**: View and edit user profile details.
- **My Appointments**: A dashboard to view booked appointments.

## 🛠️ Technology Stack

- **Frontend**: React (v19), Vite
- **Styling**: Tailwind CSS, Vanilla CSS
- **Routing**: React Router DOM
- **State Management**: React Context API
- **Icons/Assets**: Custom SVG assets and images

## 📦 Installation & Setup

1.  **Clone the repository** (if applicable) or navigate to the project folder.

2.  **Install Dependencies**:

    ```bash
    npm install
    ```

3.  **Run the Development Server**:

    ```bash
    npm run dev
    ```

4.  **Open in Browser**:
    Visit `http://localhost:5173` (or the URL shown in your terminal).

## 📂 Project Structure

```
src/
├── assets/          # Images and icons
├── components/      # Reusable UI components (Navbar, Footer, RelatedDoctors, etc.)
├── context/         # Global State (AppContext)
├── pages/           # Main Route Pages (Home, Doctors, Login, Appointment, etc.)
├── App.jsx          # Main Application Component with Routes
└── main.jsx         # Entry point
```

## 🚧 Future Roadmap

- [ ] **Backend Integration**: Connect to a Node.js/Express backend.
- [ ] **Database**: Store real user and appointment data in MongoDB/SQL.
- [ ] **Payment Gateway**: Implement Stripe/Razorpay for appointment fees.
- [ ] **Admin Dashboard**: Panel for doctors to manage their slots.

---

_Developed by [Your Name/Team]_
