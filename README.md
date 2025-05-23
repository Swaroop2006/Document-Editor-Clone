# Document-Editor-Clone
This is a Chrome extension that tracks the time you spend on different websites and shows your productivity using a pie chart. It has a simple popup with a "View Analytics" button that opens a page showing how much time was spent on websites like Google, GitHub, and Stack Overflow. It's built using JavaScript, HTML, CSS, and Chart.js.

Document-Editor-Clone is a comprehensive web-based application designed to emulate the core functionalities of modern cloud-based document editors such as Google Docs. This project is built using the React framework, specifically leveraging TypeScript for strong typing and better development experience, and Vite as the build tool for its speed and simplicity. The backend services of the application are powered by Firebase, offering seamless integration of real-time database operations, authentication, and potential deployment.

The main objective of this project is to provide users with a user-friendly platform where they can create, edit, and manage documents online. It serves as a fully functional prototype of a document editor that supports real-time syncing of content, user authentication, and scalable architecture, making it suitable for both personal use and as a base for further development into a collaborative tool.

Purpose and Scope
This project was developed to demonstrate how a full-stack web application can be built using modern JavaScript technologies. It showcases:

The integration of frontend development using React and TypeScript,

The implementation of real-time database capabilities using Firebase Firestore,

The management of user sessions and access control using Firebase Authentication,

The application of best practices in component structuring, configuration management, and scalable design.

This application can serve both as an educational resource for developers learning full-stack development and as a foundation for building production-ready document editing tools.

Technologies Used
The project utilizes a range of modern technologies and tools, each selected to enhance performance, maintainability, and developer productivity:

Frontend
React (TypeScript): Used for building the user interface with components. TypeScript enhances the reliability of the code through static type checking.

Vite: A next-generation frontend build tool that provides fast bundling and efficient hot module replacement.

CSS: Custom styling is applied using standard CSS files.

Backend / Cloud Services
Firebase:

Firestore: A cloud-hosted NoSQL database that supports real-time data syncing, ideal for document editing.

Authentication: Allows user login using various providers (such as Google, Email/Password, etc.).

Hosting (optional): Firebase Hosting can be used to deploy the application for public access.

Project Structure
The directory structure of the project is designed to separate concerns and promote clean coding practices. Below is an overview of the key directories and files:

public/: Contains static files and the HTML template used during development and production.

src/: The source code directory.

assets/: Stores images and other static assets used by the app.

components/: Contains reusable components that encapsulate UI logic and presentation.

App.tsx: The main application component that acts as the container for routing and layout.

App.css: Contains styles related to the App component.

firebase-config.ts: Stores and initializes the Firebase configuration.

index.css: Defines global styles for the application.

main.tsx: The entry point of the application, responsible for rendering the root component.

vite-env.d.ts: Contains environment-specific type definitions for Vite.

Configuration and Metadata Files:

.gitignore: Lists files and folders to be ignored by Git.

eslint.config.js: Defines rules and plugins for linting JavaScript/TypeScript code.

index.html: The base HTML file used as the template for rendering the application.

package.json: Lists project dependencies and contains scripts used for building and serving the application.

package-lock.json: Ensures consistent dependency versions across environments.

README.md: Contains the project description and usage documentation.

tsconfig.json, tsconfig.app.json, tsconfig.node.json: Define TypeScript compiler options for the application and development tools.

vite.config.ts: Configures Vite’s behavior for development and production builds.

Features
The Document-Editor-Clone includes a set of features designed to replicate the essential aspects of a document editing tool:

User Authentication: Allows users to sign in securely using Firebase Authentication.

Document Creation and Editing: Users can create new documents and edit content in a clean, responsive editor.

Real-Time Syncing: All document changes are saved and updated in real-time using Firebase Firestore.

Component-Based Architecture: Each part of the user interface is built as a separate component, making the code modular and reusable.

Development Efficiency: Thanks to Vite, the development server starts almost instantly, and changes are reflected in real time.

Installation and Setup
To set up and run this project on your local machine, follow the steps below. These steps will guide you from cloning the repository to running the development server:

Prerequisites
Before starting, ensure you have the following software installed on your computer:

Node.js (version 16 or higher)

npm (comes bundled with Node.js)

A Firebase account with a project created at Firebase Console

![Screenshot 2025-05-23 072510](https://github.com/user-attachments/assets/7fdc3948-29e1-49cb-8746-dd690af9f153)
