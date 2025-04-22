# Real-Time Collaborative Document Editor

A modern, real-time collaborative document editor with built-in grammar checking capabilities. This application allows users to create, edit, and share documents while collaborating in real-time with other users.

## 🌟 Features

### Document Management
- Create and manage multiple documents
- Real-time document editing
- Auto-saving functionality
- Document title editing
- Responsive design for all devices

### Rich Text Editor
- Full-featured text formatting
- Support for headers, lists, and quotes
- Image and link embedding
- Code block support
- Custom toolbar with formatting options

### Grammar Checking
- Real-time grammar suggestions
- Intelligent error detection
- Easy-to-use correction interface
- Detailed explanations for suggestions

### Authentication & Security
- Secure user authentication
- JWT-based session management
- Protected routes
- Secure password handling

### Real-time Collaboration
- Real-time updates across multiple users
- Cursor position tracking
- Conflict resolution
- Socket-based communication

## 🚀 Technology Stack

### Frontend
- React.js
- React Router for navigation
- Socket.io-client for real-time communication
- React-Quill for rich text editing
- CSS3 for styling
- Axios for API communication

### Backend
- Node.js
- Express.js
- MongoDB for database
- Socket.io for real-time features
- JWT for authentication
- bcrypt for password hashing

## 📋 Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js (v14.0.0 or higher)
- MongoDB (v4.0.0 or higher)
- npm or yarn package manager

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
```

2. Install frontend dependencies:
```bash
cd Frontend/docs
npm install
```

3. Install backend dependencies:
```bash
cd backend
npm install
```

4. Create a `.env` file in the backend directory with the following variables:
```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

5. Start the development servers:

Backend:
```bash
cd backend
npm run dev
```

Frontend:
```bash
cd Frontend/docs
npm start
```

## 🎯 Usage

1. Register a new account or login with existing credentials
2. Create a new document using the "New Document" button
3. Start editing your document with the rich text editor
4. Share the document URL with collaborators
5. View grammar suggestions in the right panel
6. Save changes automatically as you type

## 🔒 Security Features

- Password hashing using bcrypt
- JWT token-based authentication
- HTTP-only cookies
- Protected API endpoints
- Secure websocket connections

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


## 🙏 Acknowledgments

- React-Quill for the rich text editor
- Socket.io for real-time capabilities
- MongoDB for database solutions
- The open-source community for various tools and libraries
