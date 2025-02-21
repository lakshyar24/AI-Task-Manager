# AI-Task-Manager

AI-Task-Manager is a web-based application designed to help users manage and prioritize their tasks efficiently. The application uses artificial intelligence to recommend task priorities based on user preferences and historical data.

## Features

- **Task Creation & Management**: Add, update, and delete tasks with deadlines.
- **AI-Powered Task Prioritization**: Automatically prioritize tasks based on urgency and importance.
- **User Authentication**: Secure user registration and login.
- **Responsive UI**: Built with Next.js and Tailwind CSS for a clean and responsive design.
- **Real-Time Communication**: WebSocket integration for real-time task updates.

## Project Structure

This project consists of two main parts:
- **Backend**: A Go-based API to manage tasks and user data.
  - `main.go`: The entry point for the Go application.
  - `config.go`: Configuration files for the backend.
  - `controllers/`, `models/`, `middleware/`, `routes/`: Backend logic and routing.
- **Frontend**: A Next.js app providing the user interface.
  - `pages/`: The pages and components of the app.
  - `components/`: Reusable React components.
  - `styles/`: Tailwind CSS styles for the UI.

## Getting Started

### Prerequisites

- Go (for backend)
- Node.js and npm (for frontend)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/AI-Task-Manager.git
