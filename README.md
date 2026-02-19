# 🎵 Advanced Spotify Clone

A full-stack music streaming application built with modern web technologies, featuring real-time audio playback, user authentication, and comprehensive music management.

---

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Setup](#environment-setup)
- [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Features Breakdown](#features-breakdown)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)

---

## ✨ Features

### User Features
- 🔐 **Authentication** - OAuth integration via Clerk for secure sign-in
- 👤 **User Profiles** - Personalized user accounts with profile management
- 🎵 **Music Playback** - Seamless audio streaming with playback controls
- 📊 **Statistics** - Track listening history and stats
- 🔍 **Search & Discovery** - Browse and discover music by albums and artists
- ⏸️ **Playback Controls** - Play, pause, skip, shuffle, and volume control
- 🎵 **Queue Management** - Build and manage song queues

### Admin Features
- 📤 **Add Songs** - Upload and manage songs with metadata
- 📀 **Add Albums** - Create and organize music albums
- 🖼️ **Image Management** - Upload thumbnails and cover art via Cloudinary
- 📈 **Dashboard** - View platform statistics and analytics
- 🗑️ **Content Management** - Delete and modify songs and albums

### Technical Features
- 🔄 **Real-time Updates** - WebSocket support via Socket.io
- ☁️ **Cloud Storage** - Cloudinary integration for media management
- 📱 **Responsive Design** - Mobile-friendly UI with Tailwind CSS
- 🎨 **Modern UI** - Interactive components using Radix UI
- ⚡ **Fast Build** - Vite for rapid development and production builds

---

## 🛠️ Tech Stack

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js 5.x
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: Clerk Express SDK
- **File Upload**: cloudinary + express-fileupload
- **Real-time**: Socket.io
- **Scheduling**: node-cron
- **CORS**: cors middleware

### Frontend
- **Framework**: React 19.x with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 4.x + Radix UI
- **HTTP Client**: Axios
- **State Management**: Zustand
- **Routing**: React Router DOM v7
- **UI Components**: Radix UI, Lucide React Icons
- **Toast Notifications**: react-hot-toast
- **Code Quality**: ESLint, TypeScript

### DevTools
- **Backend**: Nodemon for development
- **Frontend**: ESLint, TypeScript compiler

---

## 📁 Project Structure

```
Advanced_Spotify_Clone/
├── backend/
│   ├── src/
│   │   ├── index.js                 # Server entry point
│   │   ├── controller/              # Business logic controllers
│   │   │   ├── admin.controller.js
│   │   │   ├── album.controller.js
│   │   │   ├── auth.controller.js
│   │   │   ├── song.controller.js
│   │   │   ├── stats.controller.js
│   │   │   └── user.controller.js
│   │   ├── routes/                  # API route definitions
│   │   │   ├── admin.route.js
│   │   │   ├── album.route.js
│   │   │   ├── auth.route.js
│   │   │   ├── song.route.js
│   │   │   ├── stat.route.js
│   │   │   └── user.route.js
│   │   ├── model/                   # MongoDB schemas
│   │   │   ├── album.model.js
│   │   │   ├── message.model.js
│   │   │   ├── song.model.js
│   │   │   └── user.model.js
│   │   ├── middleware/              # Express middleware
│   │   │   └── auth.middleware.js
│   │   ├── lib/                     # Utility libraries
│   │   │   ├── cloudinary.js        # Cloudinary configuration
│   │   │   └── db.js                # Database connection
│   │   └── seeds/                   # Database seeders
│   │       ├── albums.js
│   │       └── songs.js
│   ├── tmp/                         # Temporary file storage
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── main.tsx                 # React entry point
│   │   ├── App.tsx                  # Root App component
│   │   ├── index.css                # Global styles
│   │   ├── components/              # Reusable UI components
│   │   │   ├── ui/                  # Radix UI components
│   │   │   │   ├── avatar.tsx
│   │   │   │   ├── button.tsx
│   │   │   │   ├── card.tsx
│   │   │   │   ├── dialog.tsx
│   │   │   │   ├── input.tsx
│   │   │   │   ├── select.tsx
│   │   │   │   ├── slider.tsx
│   │   │   │   ├── table.tsx
│   │   │   │   └── tabs.tsx
│   │   │   └── Skeleton components  # Loading states
│   │   ├── layout/                  # Page layouts
│   │   │   ├── MainLayout.tsx
│   │   │   └── components/          # Layout sub-components
│   │   │       ├── AudioPlayer.tsx
│   │   │       ├── LeftSidebar.tsx
│   │   │       └── PlaybackControls.tsx
│   │   ├── pages/                   # Page components
│   │   │   ├── Home/
│   │   │   ├── Album/
│   │   │   ├── Admin/
│   │   │   ├── Auth-Callback/
│   │   │   └── 404/
│   │   ├── provider/                # Context providers
│   │   │   └── AuthProvider.tsx
│   │   ├── stores/                  # Zustand state stores
│   │   │   ├── useAuthStore.ts
│   │   │   ├── useMusicStore.ts
│   │   │   └── usePlayerStore.ts
│   │   ├── lib/                     # Utilities
│   │   │   ├── axios.ts             # Axios configuration
│   │   │   └── utils.ts
│   │   ├── type/                    # TypeScript types
│   │   │   └── index.ts
│   │   └── public/                  # Static assets
│   │       ├── albums/
│   │       ├── cover-images/
│   │       └── songs/
│   ├── vite.config.ts               # Vite configuration
│   ├── tsconfig.json                # TypeScript configuration
│   └── package.json
│
└── README.md                        # This file
```

---

## 📦 Prerequisites

Ensure you have the following installed on your machine:

- **Node.js**: v18.0.0 or higher ([Download](https://nodejs.org/))
- **npm**: v9.0.0 or higher (comes with Node.js)
- **MongoDB**: Local or MongoDB Atlas account ([Setup Guide](https://www.mongodb.com/docs/manual/installation/))
- **Git**: For version control ([Download](https://git-scm.com/))

### Optional Tools
- **Postman**: For API testing ([Download](https://www.postman.com/downloads/))

---

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/Advanced_Spotify_Clone.git
cd Advanced_Spotify_Clone
```

### 2. Install Backend Dependencies

```bash
cd backend
npm install
```

### 3. Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

---

## ⚙️ Environment Setup

### Backend Environment Variables

Create a `.env` file in the `backend/` directory:

```env
# Server Configuration
PORT=5000

# MongoDB
MONGODB_URI=mongodb://localhost:27017/spotify-clone
# Or use MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/spotify-clone

# Clerk Authentication
CLERK_SECRET_KEY=your_clerk_secret_key_here
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here

# Cloudinary (Image/File Upload)
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Environment
NODE_ENV=development
```

### Frontend Environment Variables

Create a `.env` file in the `frontend/` directory:

```env
# API Configuration
VITE_API_URL=http://localhost:5000/api

# Clerk
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here
```

### Getting the Credentials

1. **Clerk**: Sign up at [clerk.com](https://clerk.com) for authentication
2. **Cloudinary**: Sign up at [cloudinary.com](https://cloudinary.com) for image hosting
3. **MongoDB**: Set up at [mongodb.com](https://mongodb.com) or use local MongoDB

---

## ▶️ Running the Application

### Development Mode

#### Start Backend Server
```bash
cd backend
npm run dev
```
The backend will run on `http://localhost:5000`

#### Start Frontend Dev Server (in another terminal)
```bash
cd frontend
npm run dev
```
The frontend will run on `http://localhost:5173`

### Production Mode

#### Build Frontend
```bash
cd frontend
npm run build
npm run preview
```

#### Start Backend Production Server
```bash
cd backend
npm start
```

---

## 🌱 Database Seeding

To populate your database with sample data:

### Seed Albums
```bash
cd backend
npm run seeds:albums
```

### Seed Songs
```bash
cd backend
npm run seeds:songs
```

---

## 📚 API Documentation

### Base URL
```
http://localhost:5000/api
```

### Authentication Routes
- `POST /auth/register` - Register new user
- `POST /auth/login` - User login
- `POST /auth/logout` - User logout
- `GET /auth/me` - Get current user info

### User Routes
- `GET /users/me` - Get current user
- `GET /users/:id` - Get user profile
- `PUT /users/:id` - Update user profile

### Song Routes
- `GET /songs` - Get all songs
- `GET /songs/:id` - Get song details
- `GET /songs/search` - Search songs
- `POST /songs` - Create song (admin only)
- `DELETE /songs/:id` - Delete song (admin only)

### Album Routes
- `GET /albums` - Get all albums
- `GET /albums/:id` - Get album details
- `POST /albums` - Create album (admin only)
- `DELETE /albums/:id` - Delete album (admin only)

### Admin Routes
- `GET /admin/stats` - Get platform statistics
- `GET /admin/users` - Get all users (admin only)

### Stats Routes
- `GET /stats` - Get user listening stats
- `POST /stats` - Record listening activity

---

## 🎵 Features Breakdown

### 1. **Music Playback**
- Stream songs directly from cloud storage
- 🎚️ Volume and progress controls
- ⏭️ Next/Previous song navigation
- 🔀 Shuffle mode support

### 2. **Authentication**
- OAuth integration with Clerk
- Secure token management
- Protected API routes
- Session management

### 3. **User Library**
- Browse personal music collection
- View listening history
- Track favorite albums
- Manage playlists

### 4. **Admin Dashboard**
- Upload and manage music
- Monitor platform statistics
- Manage user accounts
- Analytics and insights

### 5. **Real-time Updates**
- Socket.io for live notifications
- Real-time user activity
- Synchronize playback across devices

### 6. **Responsive UI**
- Mobile-optimized design
- Adaptive layouts
- Touch-friendly controls
- Dark mode support

---

## 📜 Scripts

### Backend Scripts
| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with auto-reload |
| `npm start` | Start production server |
| `npm run seeds:songs` | Seed database with sample songs |
| `npm run seeds:albums` | Seed database with sample albums |

### Frontend Scripts
| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint to check code quality |

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### Code Guidelines
- Follow the existing code style
- Use TypeScript for type safety
- Add comments for complex logic
- Test your changes before submitting

---

## 🐛 Troubleshooting

### Backend Issues

**Port Already in Use**
```bash
# Kill process on port 5000
lsof -ti:5000 | xargs kill -9  # macOS/Linux
netstat -ano | findstr :5000   # Windows
```

**MongoDB Connection Error**
- Ensure MongoDB is running locally: `mongodb://localhost:27017`
- Or update `MONGODB_URI` in `.env` with your MongoDB Atlas connection string

**Cloudinary Errors**
- Verify your Cloudinary credentials in `.env`
- Check account limits and quotas

### Frontend Issues

**Port 5173 in Use**
```bash
# Vite will automatically use the next available port
npm run dev
```

**Module Not Found**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

---

## 📞 Support

For issues, questions, or suggestions:
- Open an [Issue](https://github.com/yourusername/Advanced_Spotify_Clone/issues)
- Check existing documentation
- Review API logs in the terminal

---

## 📄 License

This project is licensed under the ISC License - see the LICENSE file for details.

---

## 🙏 Acknowledgments

- [Express.js](https://expressjs.com/) - Web framework
- [React](https://react.dev/) - UI library
- [MongoDB](https://www.mongodb.com/) - Database
- [Clerk](https://clerk.com/) - Authentication
- [Cloudinary](https://cloudinary.com/) - Media management
- [Radix UI](https://www.radix-ui.com/) - Accessible UI components
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS

---


