## Naruto Ninja Handbook API & Character Manager
A full-stack Express and MongoDB application that serves as an interactive handbook and API for Naruto characters. Users can search for ninjas, create new characters, update character images, and remove entries from the database.

## Live Demo
Render Deployment: https://personal-character-creator.onrender.com/

## Features
Character Search & API: Fetch character data dynamically by ninja name via REST API endpoints (/api/:ninjaName).

CRUD Functionality: Full support to Create, Read, Update, and Delete character profiles connected to MongoDB.

Dynamic Templating: Renders full character lists dynamically using EJS view templating on the server.

Case-Insensitive Database Queries: Uses MongoDB collations for smooth case-insensitive and whitespace-tolerant searches and updates.

Static Asset Serving: Express static handling for client scripts, stylesheets, and background imagery.

## API Routes
GET / — Renders the main dashboard (index.ejs) with all characters loaded from MongoDB.

GET /api/Character — Returns a JSON array containing all characters in the database.

GET /api/:ninjaName — Returns JSON details for a specific character matching the parameter (or returns an "Unknown" object if not found).

POST /makeCharacter — Submits new character data (Name, Ability, Age, Village) to MongoDB.

PUT /addImage — Updates an existing character's profile image URL.

DELETE /deleteCharacter — Removes a specified character from the database.

## How It Works
Database Connection: Connects securely to MongoDB using mongoose and environment variables via dotenv.

Server Logic: Express parses URL-encoded form data and JSON payloads to process CRUD requests seamlessly.

Frontend Interaction: Client-side JavaScript (main.js) handles search button clicks, fetches API responses, and manages update and delete triggers against the server.

## How to Set Up
Prerequisites
Node.js installed on your machine

A MongoDB database connection URI
Installation Commands
Clone the repository:
git clone https://github.com/your-username/your-repo-name.git

Navigate into the project folder:
cd your-repo-name

Install dependencies:
npm install

Configure Environment Variables:
Create a .env file in the root directory and add your MongoDB connection string:
MONGODB_URI=your_mongodb_connection_string
PORT=3000

Run the application:
npm start

The server will start on http://localhost:3000 (or your configured port).



<img width="2880" height="1800" alt="image" src="https://github.com/user-attachments/assets/aaf36842-c3d3-4a03-a070-fcbcb68b4373" />







