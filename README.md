# Notes App - Frontend

A modern React/Next.js application for managing notes with user authentication and admin functionality.

## Features

- 🔐 User authentication (login/register)
- 📝 Create, read, update, delete notes
- 👥 Admin dashboard to manage all users' notes
- 🎨 Modern UI with Tailwind CSS
- 📱 Responsive design
- 🔒 Role-based access control

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **HTTP Client**: Axios
- **Authentication**: JWT tokens

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Backend API running on http://localhost:8000

## Installation

1. Navigate to the frontend directory:
   ```bash
   cd frontend
    
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install

Environment Variables
Create a .env.local file in the frontend root:
NEXT_PUBLIC_API_URL=http://localhost:8000

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev

Open your browser and navigate to:
http://localhost:3000

Usage
Regular User Flow
Register a new account:
Go to 
/register
Fill in name, email, and password
Click "Sign Up"
Login:
Go to 
/login
Enter your email and password
Click "Login"
Manage Notes:
View all your notes on the home page
Create new notes with "New Note" button
Edit existing notes by clicking the edit button
Delete notes with the delete button
Admin User Flow
Create Admin User (see Backend README)
Login as Admin:
Use admin credentials
You'll see your name/avatar in navigation
Admin Dashboard button appears (purple)
Admin Features:
Click "Admin Dashboard" to view all users' notes
Edit any note from any user
Delete any note from any user
See total count of all notes
View creation/update dates
API Integration
The frontend communicates with the backend API using:

Authentication: /api/auth/*
Notes: /api/notes/*
Admin: /api/admin/**
Authentication Flow
User logs in → JWT token stored in localStorage
Token automatically added to all API requests
User profile fetched and displayed in navigation
Token cleared on logout
Project Structure
frontend/
├── src/
│   ├── app/                 # Next.js app router
│   │   ├── admin/          # Admin dashboard
│   │   ├── login/          # Login page
│   │   ├── register/       # Registration page
│   │   ├── notes/          # Notes pages
│   │   ├── layout.tsx      # Root layout with navigation
│   │   └── page.tsx        # Home page
│   ├── components/         # Reusable components
│   ├── lib/               # Utilities and API client
│   └── globals.css        # Global styles
├── public/                # Static assets
└── package.json          # Dependencies


Key Components
Authentication State
Managed in 
src/app/layout.tsx
Uses useState and useEffect
Persists across page refreshes
Conditional rendering based on auth status
API Client
Located in 
src/lib/api.ts
Axios instance with automatic token injection
TypeScript interfaces for type safety
Admin Dashboard
Located in 
src/app/admin/page.tsx
Only accessible to admin users
Full CRUD operations on all notes
Troubleshooting
Common Issues
"Admin access required" error:
Ensure user has "role": "admin" in database
Restart backend after changing role
Authentication not persisting:
Check browser console for localStorage errors
Ensure backend is running on correct port
CORS errors:
Verify backend CORS configuration
Check NEXT_PUBLIC_API_URL environment variable
Development Tips
Use browser DevTools to inspect API requests
Check Network tab for failed requests
Verify JWT token in localStorage
Building for Production

npm run build
npm start

License
MIT License