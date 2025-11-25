# Biblioteka

**Biblioteka** is a minimal web application built with **React + TypeScript + Vite** that allows you to search and read books online. It supports searching by **title** or **author** across three categories: **Audio Books**, **Books**, and **Rare Books**, and features a responsive UI built with **Chakra UI**. Books available online can be read directly or listened to for audio files.

## Getting Started

To get started with Biblioteka, follow these steps:

1. **Clone** this repository to your local machine.
2. Run `npm install` to install all dependencies.
3. Run `npm run dev` to start the local development server.
4. Open your browser at [http://localhost:5173](http://localhost:5173) to see the app in action.

## Features

- Search books by **title** or **author**, independently of their category.
- Display books with cover images, title, and author name.
- **Read** button for PDF books and **Listen** button for Audio (MP3) books.
- Responsive UI for desktop and mobile devices.
- Handles books without cover images: title/author text is centered and fully visible.
- Three separate book categories.
- Simple, modular, and reusable React components.

## Project Structure

- **src/components/** – UI components such as `BookCard`, `BookGrid`, `BookReader`, `SearchBar`, `Header`.
- **src/data/** – Contains JSON-like datasets (`audioBooks`, `books`, `rareBooks`) with Google Drive links.
- **App.tsx** – Main application entry point.
- **main.tsx** – Renders React into the DOM.

## Learnings

This project is useful for learning how to:

- Build a modern front-end application with React and TypeScript.
- Manage application **state** and implement category-independent searching.
- Create reusable and modular React components.
- Use UI libraries like Chakra UI effectively.
- Handle different file types (PDF and MP3) dynamically in the UI.
- Maintain consistent layouts even when some items are missing cover images.

**Biblioteka** is minimal and can be extended further with new features or backend integrations.
