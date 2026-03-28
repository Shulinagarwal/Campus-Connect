# 🎓 Campus-Connect

**Campus-Connect** is a robust full-stack application designed to streamline communication and resource sharing within university ecosystems. It features a modular MERN-style architecture, a secure authentication system, and integrated API documentation.

---

## 🏗️ Project Architecture

The project is divided into two main environments: a **Node.js/Express** backend and a **React/Vite** frontend.

### 🖥️ Backend (Node.js & Express)
- **Controllers:** Manages business logic for `auth`, `chat`, and `user` modules.
- **Middleware:** Implements `auth.middleware.js` for secure, protected routing.
- **Routes:** Decoupled routing for clean API endpoint management.
- **API Documentation:** Integrated **Swagger** (`swagger.js`) for interactive endpoint testing.

### 🎨 Frontend (React & Vite)
- **Custom Hooks:** Specialized logic like `useAuthUser.js` for session management.
- **Lib & Axios:** Centralized API handling and instance configuration in `api.js` and `axios.js`.
- **State Management:** Dedicated `store/` directory for global application state.
- **Styling:** Modern, responsive UI built with **Tailwind CSS**.

---

## 📂 Directory Structure

```text
Campus-Connect/
├── backend/
│   ├── src/
│   │   ├── controllers/    # auth, chat, user controllers
│   │   ├── routes/         # API route definitions
│   │   └── server.js       # Server entry point
│   ├── middleware/         # Custom auth & error middlewares
│   ├── models/             # Database schemas
│   ├── lib/                # Shared utilities
│   └── swagger.js          # API Documentation config
├── frontend/
│   ├── src/
│   │   ├── components/     # UI Components
│   │   ├── hooks/          # Custom React hooks (useAuthUser)
│   │   ├── lib/            # Axios and API configs
│   │   ├── pages/          # View components
│   │   └── store/          # State management
│   ├── tailwind.config.js  # Styling configuration
│   └── vite.config.js      # Build tool configuration
└── package.json
```
# 🛠️ Getting Started
## Prerequisites
Node.js (v16.x or higher)

npm or yarn

MongoDB (Local or Atlas)

## Installation & Setup
Clone the repository:

## Bash
```
git clone [https://github.com/Shulinagarwal/Campus-Connect.git](https://github.com/Shulinagarwal/Campus-Connect.git)

cd Campus-Connect
```
Configure Backend:
```
cd backend
npm install
```
# Create a .env file and add your MONGO_URI and JWT_SECRET
```
npm start
```
Configure Frontend:

```cd ../frontend
npm install
npm run dev
```

## Env Configuration
```
PORT=3001
MONGO_URI=your_mongodb_uri
STREAM_API_KEY=your_stream_key
STREAM_API_SECRET=your_stream_secret
JWT_SECRET_KEY=your_secret_phrase
NODE_ENV=development
```
## 🚀 Key Features
Secure Authentication: JWT-based login and registration flow.

Real-time Interaction: Chat controllers ready for messaging features.

API Sandbox: Built-in Swagger UI to test backend endpoints without a frontend.

Optimized Performance: Fast builds and Hot Module Replacement (HMR) via Vite.

## 🤝 Contributing
Contributions are welcome!

Fork the Project.

Create your Feature Branch (git checkout -b feature/NewFeature).

Commit your Changes (git commit -m 'Add some NewFeature').

Push to the Branch (git push origin feature/NewFeature).

Open a Pull Request.

## 📈 Scalability & Future Enhancements
To handle a growing campus population, the following architectural improvements are planned:

- **Microservices**: Decoupling the Chat and User services into independent microservices to allow independent scaling.

- **Caching**: Implementing Redis caching for frequently accessed data like user profiles and active chat sessions to reduce DB load.

- **Load Balancing**: Deploying with NGINX or AWS ELB to distribute incoming traffic across multiple server instances.

- **Database Optimization**: Implementing indexing on frequently searched fields (like username or email) and considering database sharding for large datasets.

